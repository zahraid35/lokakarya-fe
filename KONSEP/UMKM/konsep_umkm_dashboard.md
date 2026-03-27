# Konsep Halaman: Dashboard UMKM
> Referensi diambil dari `app/peluang-kerja/page.tsx`, `app/(auth)/layout.tsx`, `components/landing/Hero.tsx`, dan `components/landing/Navbar.tsx`

---

## Tujuan Halaman
Halaman pertama yang dilihat UMKM setelah login. Berfungsi sebagai **pusat kendali** — memberikan gambaran menyeluruh tentang aktivitas proyek, pelamar yang masuk, dan status kolaborasi yang sedang berjalan.

---

## Referensi Warna (dari `globals.css` & kode existing)

```
Background halaman : #f5f2eb   ← sama dengan /peluang-kerja & /proyek
Sidebar panel kiri : #111111   ← sama dengan panel kiri auth layout
Aksen utama (amber): #e6a020   ← --color-primary di globals.css
Amber gradient     : linear-gradient(135deg, #e6a020, #f0b830)
Teks primer        : #1a1a1a   ← --color-dark di globals.css
Teks sekunder      : #1a1a1a/60
Aksen ungu         : #7c6df0   ← dari peluang-kerja & proyek
Aksen biru         : #4ab3f4
Aksen pink         : #f06090
Border kartu       : rgba(26,26,26,0.07)
```

---

## Referensi Layout

### Shell (App Layout)
Diambil dari pola **auth layout** (`app/(auth)/layout.tsx`) yang pakai 2 panel:
- **Panel kiri** (sidebar) → dark `#111111`, lebar `w-64`, fixed, berisi navigasi
- **Panel kanan** (konten) → cream `#f5f2eb`, scrollable

```
┌─────────────────────────────────────────────────────┐
│  SIDEBAR (dark #111)  │  KONTEN (cream #f5f2eb)    │
│  w-64, fixed          │  flex-1, overflow-y-auto    │
│                       │                             │
│  [Logo LokaKarya]     │  [Header selamat datang]   │
│                       │                             │
│  ● Dashboard  (aktif) │  [4x Stat Cards]           │
│  ○ Tambah Proyek      │                             │
│  ○ Pelamar            │  [Proyek Terbaru - List]   │
│  ○ Progres            │                             │
│                       │  [Quick Actions]            │
│  [Avatar + Nama UMKM] │                             │
│  [Logout]             │  [Feed Aktivitas]           │
└─────────────────────────────────────────────────────┘
```

### Sidebar Details
Referensi dari panel kiri auth layout:
- Background: `linear-gradient(160deg, #1c1c1c 0%, #0f0f0f 40%, #080808 100%)`
- Grid texture overlay: `opacity-[0.035]`, `backgroundSize: "32px 32px"` (subtle lines)
- Orb ambient glow: amber `rgba(230,160,32,0.06)` blur di tengah
- Brand mark: "LokaKarya" + logo kotak amber `linear-gradient(135deg, #e6a020, #f5c842)`
- Nav item aktif: highlight amber, mirip tab aktif di auth (amber text `#e6a020`)
- Nav item non-aktif: `text-white/35 hover:text-white/60`

---

## Konten Halaman

### A. Section Header — "Selamat Datang"
Referensi: eyebrow label style dari `/peluang-kerja`:
```
[──] RINGKASAN AKTIVITAS         ← eyebrow: text-xs tracking-[0.18em] uppercase #e6a020
Selamat datang, [Nama UMKM] 👋  ← clamp(1.5rem,3.5vw,2.25rem) font-bold #1a1a1a
Hari ini ada 3 pelamar baru.    ← text-sm text-[#1a1a1a]/40
```

### B. Stat Cards (4 kartu horizontal)
Referensi visual dari **bento grid** di `/proyek/page.tsx` — dark card `#222120` dengan colored glow:

| # | Label | Contoh Nilai | Aksen |
|---|---|---|---|
| 1 | Proyek Aktif | 3 | `#e6a020` amber |
| 2 | Total Pelamar | 24 | `#7c6df0` ungu |
| 3 | Kolaborasi Berjalan | 2 | `#4ab3f4` biru |
| 4 | Proyek Selesai | 7 | `#34d399` hijau |

**Anatomy satu stat card** (mengikuti bento card `/proyek`):
```
┌──────────────────────────────┐
│  [Glow ambient top-right]    │  ← blur-[60px] opacity-20
│                              │
│  [Icon 20x20 warna aksen]   │
│  LABEL KECIL                 │  ← text-[11px] uppercase tracking-wider white/40
│                              │
│  42                          │  ← text-4xl font-black text-white
│  ↑ +3 minggu ini             │  ← text-xs text-white/35
└──────────────────────────────┘
  background: #222120
  rounded-2xl, p-6
```

### C. Section: Proyek Terbaru
Referensi struktur dari card job di `/peluang-kerja/page.tsx`:
- Background: `bg-white rounded-3xl border border-[#1a1a1a]/07`
- Tiap baris proyek: ikon (kategori), judul, badge status, jumlah pelamar, 2 tombol aksi
- Badge status: `Aktif` → amber, `Draft` → abu, `Selesai` → hijau

```
┌─────────────────────────────────────────────────────────────────┐
│  [🎨] Designer UI/UX Mobile App    [Aktif ●]  👥 7 Pelamar    │
│       Kategori: Desain • Diposting 25/03/2026                   │
│                          [Lihat Pelamar ↗] [Lihat Progres →]  │
└─────────────────────────────────────────────────────────────────┘
```

### D. Quick Actions (3 kartu horizontal)
Referensi hover + arrow dari bento grid `/proyek`:
- **Tambah Proyek Baru** → amber gradient CTA
- **Lihat Semua Pelamar** → dark `#1a1a1a`
- **Cek Progress** → ungu `#7c6df0`
- Tiap kartu: ikon besar, label, sub-label, arrow `ArrowUpRight` muncul saat hover

### E. Feed Aktivitas Terbaru
Mini activity feed, style ringan:
- Item: avatar bulat warna-warni + teks + waktu relatif
- Contoh: _"Diani Putri apply ke **Designer UI/UX**_ — 2 jam lalu"
- Warna avatar: ikuti pola `['#e6a020', '#7c6df0', '#4ab3f4']` dari `Hero.tsx`

---

## Interaksi & Animasi
- Halaman masuk: `framer-motion` fade-in dari bawah (`y: 20 → 0`)
- Stat card hover: `hover:-translate-y-0.5 hover:shadow-xl` (sama dengan bento card)
- Nav item aktif di sidebar: motion pill `layoutId="activeNav"` geser saat pindah halaman
- Badge status: pulse dot untuk "Aktif" → `animate-pulse` (sama dengan Hero badge)

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah perlu notifikasi real-time (badge angka di nav icon)?
- [ ] Feed aktivitas: scroll infinite atau max 5 item dengan "Lihat Semua"?
- [ ] Stat card "Proyek Selesai" → link ke halaman riwayat?
