# Konsep Halaman: Dashboard Kreator
> Referensi diambil dari `app/peluang-kerja/page.tsx`, `app/(auth)/layout.tsx`, `components/landing/Hero.tsx`, `globals.css`

---

## Tujuan Halaman
Halaman pertama yang dilihat kreator setelah login. Berfungsi sebagai **home base** — ringkasan proyek yang sedang dikerjakan, lamaran yang dikirim, portofolio, dan statistik kontribusi mereka.

---

## Referensi Warna

```
Background halaman  : #f5f2eb   ← sama dengan /peluang-kerja & /proyek
Sidebar panel kiri  : #111111   ← panel kiri auth layout
Aksen utama (amber) : #e6a020   ← --color-primary globals.css
Amber gradient      : linear-gradient(135deg, #e6a020, #f0b830)
Teks primer         : #1a1a1a
Teks sekunder       : #1a1a1a/60
Aksen ungu          : #7c6df0   ← dari proyek & peluang-kerja
Aksen biru          : #4ab3f4
Aksen pink          : #f06090
Card border         : rgba(26,26,26,0.07)
Avatar warna        : rotasi ['#e6a020', '#7c6df0', '#4ab3f4', '#f06090']
```

---

## Referensi Layout

Pola dua panel: **sidebar kiri** (dark) + **konten kanan** (cream) — sama persis dengan dashboard UMKM. Yang beda adalah isi menu dan isi kontennya.

```
┌─────────────────────────────────────────────────────┐
│  SIDEBAR (dark #111)    │  KONTEN (cream #f5f2eb)  │
│  w-64, fixed            │  flex-1, overflow-y-auto  │
│                         │                           │
│  [Logo LokaKarya]       │  [Header + profil mini]  │
│                         │                           │
│  ● Dashboard   (aktif)  │  [3x Stat Cards]         │
│  ○ Jelajahi Proyek      │                           │
│  ○ Lamaranku            │  [Proyek Aktif - Cards]  │
│  ○ Progres Proyek       │                           │
│                         │  [Lamaran Terkirim]      │
│  [Avatar + Nama]        │                           │
│  [Badge KREATOR]        │  [Rekomendasi Proyek]    │
│  [Logout]               │                           │
└─────────────────────────────────────────────────────┘
```

**Sidebar detail** (referensi auth layout kiri):
- Bg: `linear-gradient(160deg, #1c1c1c 0%, #0f0f0f 40%, #080808 100%)`
- Grid texture overlay: `opacity-[0.035]` 32px
- Orb glow amber di tengah: `rgba(230,160,32,0.06)`
- Badge role kreator: pill kecil `KREATOR` — ungu `#7c6df0/20` bg + `#7c6df0` text (beda dengan UMKM yang amber, supaya bisa dibedakan)
- Nav aktif: teks `#7c6df0` ungu (warna khas kreator)

---

## Konten Halaman

### A. Section Header
```
[──] RINGKASAN AKTIVITAS              ← eyebrow #e6a020
Hei, [Nama Kreator]! 👋              ← clamp(1.5rem,3.5vw,2.25rem) font-bold
Kamu punya 2 proyek yang sedang berjalan.  ← text-sm text-[#1a1a1a]/40
```

**Profil mini (pojok kanan header):**
- Avatar bulat + nama + keahlian utama
- Badge "Kreator Terverifikasi" jika sudah terverifikasi: `✓ Terverifikasi` — hijau kecil

### B. Stat Cards (3 kartu — lebih sedikit dari UMKM karena fokus berbeda)
Referensi visual dari **bento grid** `/proyek` (dark card `#222120`, colored glow):

| # | Label | Nilai | Aksen |
|---|---|---|---|
| 1 | Proyek Aktif | 2 | `#e6a020` amber |
| 2 | Lamaran Dikirim | 8 | `#7c6df0` ungu |
| 3 | Proyek Selesai | 5 | `#34d399` hijau |

Anatomy card sama dengan UMKM: icon, label kecil uppercase, angka besar, sub-text "+N bulan ini".

### C. Section: Proyek Aktif (yang sedang dikerjakan)
Grid 2 kolom, card ringan `bg-white rounded-3xl`:
```
┌─────────────────────────────────────────────────────────┐
│  [🎨] Designer UI/UX Mobile App       [Aktif 🔄]       │
│       UMKM: Batik Nusantara • Progress: 65%             │
│       ████████░░░  Milestone sekarang: Revisi           │
│                              [Lihat Progres →]          │
└─────────────────────────────────────────────────────────┘
```

### D. Section: Lamaran yang Dikirim (status singkat)
List horizontal scroll atau grid kecil 3 kolom, referensi pill/badge dari modal `/peluang-kerja`:

```
┌───────────────────────────────────────────────────────┐
│  [🖥] Frontend Developer React       [Menunggu ⏳]   │
│       Peluang dikirim 25/03/2026                      │
│                                                       │
│  [✍] Copywriter Konten Medsos        [Diterima ✓]   │
│       Peluang dikirim 23/03/2026                      │
└───────────────────────────────────────────────────────┘
```

### E. Section: Rekomendasi Proyek
3 card proyek dari platform yang direkomendasikan berdasarkan kategori keahlian kreator.
Referensi card dari `/peluang-kerja` job card — tampilan mini dengan tombol "Lihat →".

---

## Interaksi & Animasi
- Badge role ungu sidebar: berbeda visual dengan UMKM (amber) → identitas peran
- Stat card hover: `hover:-translate-y-0.5` + `hover:shadow-xl` (`/proyek` bento)
- Rekomendasi card hover: `group-hover:text-[#7c6df0]` (ungu khas kreator, bukan amber)
- Lamaran status badge: `animate-pulse` untuk yang masih "Menunggu"
- Halaman masuk: stagger fade-in `framer-motion`

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah ada sistem rating/reputasi kreator yang tampil di dashboard?
- [ ] Notif badge di nav jika lamaran diterima/ditolak?
- [ ] Profil kreator bisa diedit dari dashboard atau halaman terpisah?
