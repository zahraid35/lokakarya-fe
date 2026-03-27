# Konsep Halaman: Lihat Pelamar (UMKM)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (card job + modal), `app/proyek/page.tsx` (filter bar + grid), dan design tokens `globals.css`

---

## Tujuan Halaman
UMKM dapat melihat **siapa saja kreator yang sudah melamar** ke proyek-proyek mereka, lalu mengambil keputusan: **Terima** atau **Tolak** tiap pelamar. Halaman ini adalah titik penting keputusan kolaborasi.

---

## Referensi Warna

```
Background halaman  : #f5f2eb    ← sama dengan /peluang-kerja
Card pelamar        : bg-white rounded-3xl border border-[#1a1a1a]/07
Hover card          : hover:shadow-xl hover:shadow-[#e6a020]/05
Aksen utama         : #e6a020 → tombol "Terima"
Tolak               : #ef4444/80 merah (atau abu #1a1a1a/20 jika sudah ditolak)
Status Menunggu     : #e6a020/15 bg + #e6a020 text
Status Diterima     : #34d399/15 bg + #34d399 text (hijau)
Status Ditolak      : #1a1a1a/08 bg + #1a1a1a/30 text (netral/pudar)
Avatar warna        : rotasi dari ['#e6a020', '#7c6df0', '#4ab3f4', '#f06090']
                      ← sama dengan social proof di Hero.tsx
```

---

## Referensi Layout

### Grid Card — Terinspirasi `/peluang-kerja`
Halaman `/peluang-kerja` pakai `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`. Halaman pelamar pakai pola yang sama tapi tiap card adalah **profil kreator**, bukan job.

```
┌───────────────────────────────────────────────────────────┐
│ SIDEBAR │  [Header + Filter Bar]                          │
│         │                                                 │
│         │  Proyek: [ Semua ˅ ]  Status: [●][●][●]        │
│         │  Menampilkan 7 pelamar                          │
│         │                                                 │
│         │  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│         │  │ Card     │  │ Card     │  │ Card     │     │
│         │  │ Pelamar  │  │ Pelamar  │  │ Pelamar  │     │
│         │  └──────────┘  └──────────┘  └──────────┘     │
│         │                                                 │
│         │  ┌──────────┐  ┌──────────┐                   │
│         │  │ Card     │  │ Card     │                   │
│         │  └──────────┘  └──────────┘                   │
└───────────────────────────────────────────────────────────┘
```

---

## Konten Halaman

### A. Header
```
[──] MANAJEMEN PELAMAR            ← eyebrow
Kreator yang Melamar              ← heading clamp font-bold
Tinjau dan pilih kreator terbaik untuk proyekmu.  ← subline text-[#1a1a1a]/40
```

### B. Filter Bar
Referensi dari filter di `/peluang-kerja` (SelectDropdown + count text):

```
┌───────────────────────────────────────────────────────────┐
│ Filter Proyek:  [ Designer UI/UX Mobile App  ˅ ]         │
│                                                           │
│ Status: [ Semua ] [ Menunggu ] [ Diterima ] [ Ditolak ]  │
│                                                     ← pill tabs, aktif = amber bg
│                              Menampilkan 7 pelamar        │
└───────────────────────────────────────────────────────────┘
```

- Dropdown proyek: `<SelectDropdown>` style persis sama dengan di `/peluang-kerja`
- Tab status: pill button `px-4 py-2 rounded-xl text-xs font-semibold border`
  - Aktif: `bg-[#e6a020] text-white border-transparent`
  - Non-aktif: `bg-white/60 text-[#1a1a1a]/50 border-[#1a1a1a]/08`

### C. Grid Card Pelamar
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

**Anatomy satu card pelamar** (referensi struktur card `/peluang-kerja` tapi isinya profil kreator):

```
┌──────────────────────────────────────────┐
│  [ Avatar  ]  Diani Putri                │  ← avatar: bulat 48x48, warna aksen
│  ( warna   )  UI/UX Designer            │  ← sub-label
│                              [Menunggu] │  ← badge status pojok kanan
│                                          │
│  ✦ Proyek yang dilamar:                  │  ← text-[10px] uppercase tracking-wider
│    Designer UI/UX Mobile App             │  ← text-sm font-semibold + kategori badge
│                                          │
│  💬 Motivasi:                            │
│  "Saya tertarik karena proyek ini..."     │  ← 2 baris line-clamp-2
│                                          │
│  🔗 behance.net/diani   · 2 jam lalu    │  ← link + waktu relatif
│                                          │
│  ─────────────────────────────────────  │
│  [ ✕ Tolak ]          [ ✓ Terima ]     │  ← 2 tombol, full-width 50/50
└──────────────────────────────────────────┘
bg-white rounded-3xl p-6 hover:shadow-xl transition-all
```

**Detail tombol:**
- **Terima**: `bg-[#e6a020] text-[#1a1a1a] font-bold` → hover `brightness-110`
- **Tolak**: `bg-[#1a1a1a]/05 text-[#1a1a1a]/50 border border-[#1a1a1a]/10` → hover `bg-red-50 text-red-400`

**Setelah Terima diklik:**
- Badge berubah: `Menunggu` → `Diterima ✓` (hijau)
- Tombol "Terima" berubah jadi disabled, checkmark
- Tombol "Tolak" hilang / memudar
- Mini toast muncul: "Diani Putri telah diterima! 🎉"

**Setelah Tolak diklik:**
- Card pudar: `opacity-60`
- Badge berubah: `Menunggu` → `Ditolak`
- Kedua tombol disabled

### D. Modal Detail Pelamar
Klik area card (bukan tombol) → modal muncul. Referensi modal dari `/peluang-kerja` (modal apply):

```
┌──────────────────────────────────────────────────────┐
│  [ Avatar besar ]  Diani Putri         [ × ]        │
│                    UI/UX Designer                    │
│                                                      │
│  ┌──────────────────────┬───────────────────────┐   │
│  │ Motivasi Lengkap     │ Info Pelamar          │   │
│  │                      │                       │   │
│  │ "Saya tertarik ...   │ Melamar ke:           │   │
│  │  ...teks panjang..." │ Designer UI/UX...     │   │
│  │                      │                       │   │
│  │                      │ Waktu Apply:          │   │
│  │                      │ 27 Mar 2026, 09.30    │   │
│  │                      │                       │   │
│  │                      │ Portofolio:           │   │
│  │                      │ behance.net/diani ↗  │   │
│  └──────────────────────┴───────────────────────┘   │
│                                                      │
│       [ ✕ Tolak Pelamar ]  [ ✓ Terima Pelamar ]   │
└──────────────────────────────────────────────────────┘
```

Overlay: `bg-[#1a1a1a]/80 backdrop-blur-md` — persis sama dengan modal apply di `/peluang-kerja`
Modal body: `bg-[#f5f2eb] rounded-[32px]` — sama dengan modal di `/peluang-kerja`

---

## State & Interaksi

| State Card | Tampilan |
|---|---|
| Menunggu | Card normal, kedua tombol aktif |
| Diterima | Badge hijau, tombol "Terima" → disabled checkmark, toast sukses |
| Ditolak | Card opacity-60, badge abu, kedua tombol disabled |

**Toast notification:**
- Posisi: pojok kanan bawah, `fixed bottom-6 right-6 z-50`
- Style: `bg-[#1a1a1a] text-white rounded-2xl px-5 py-3 shadow-xl`
- Auto-dismiss: 3 detik

---

## Animasi
- Card masuk: stagger fade-in dari bawah (`framer-motion`, delay 0.05s per card)
- Filter ganti: card re-render dengan fade-out/in
- Badge status berubah: `framer-motion` color transition
- Modal: `scale 0.95 → 1` + `opacity 0 → 1` spring animation (sama pola auth layout)
- Toast: slide dari kanan, `framer-motion AnimatePresence`

---

## Pertanyaan Terbuka / To-do
- [ ] Bisakah UMKM mengirim pesan langsung ke pelamar dari sini?
- [ ] Apakah setelah "Terima" langsung masuk ke halaman Progres otomatis?
- [ ] Limit jumlah kreator yang bisa diterima per proyek (misal max 1 atau bisa tim)?
