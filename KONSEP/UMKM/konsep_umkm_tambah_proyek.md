# Konsep Halaman: Tambah Proyek (UMKM)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (modal apply + form), `app/(auth)/layout.tsx` (split panel), dan design tokens dari `globals.css`

---

## Tujuan Halaman
UMKM mengisi form untuk **memposting proyek baru** yang akan bisa dilihat dan dilamar oleh kreator. Di sisi kanan, terdapat **live preview kartu proyek** — persis seperti yang akan dilihat kreator di halaman publik.

---

## Referensi Warna

```
Background halaman : #f5f2eb   ← sama dengan /peluang-kerja
Panel form (kiri)  : bg-white rounded-3xl border border-[#1a1a1a]/07
Panel preview (kanan): #222120 ← dark card, sama dengan bento card /proyek
Aksen utama        : #e6a020
Input focus ring   : focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30
Label field        : text-xs font-bold text-[#1a1a1a] uppercase tracking-wider
Placeholder text   : placeholder:text-[#1a1a1a]/30
Error border       : border-red-400/50
Submit button      : linear-gradient(135deg, #e6a020, #f0b830) → text-[#1a1a1a] font-black
```

---

## Referensi Layout

### Pola: Split Panel Horizontal
Terinspirasi dari **auth layout** (`app/(auth)/layout.tsx`) yang membagi layar dua panel — di sini dibalik: kiri = form (terang), kanan = preview (gelap).

```
┌───────────────────────────────────────────────────────┐
│ SIDEBAR (dari layout.tsx)   │  KONTEN                 │
│                             │                         │
│                             │  ┌─────────┬─────────┐ │
│                             │  │  FORM   │ PREVIEW │ │
│                             │  │  (60%)  │  (40%)  │ │
│                             │  │         │         │ │
│                             │  │ [Input] │ [Card   │ │
│                             │  │ [Input] │  live   │ │
│                             │  │ [Area]  │  preview│ │
│                             │  │ [Submit]│  ]      │ │
│                             │  └─────────┴─────────┘ │
└───────────────────────────────────────────────────────┘
```

**Mobile:** Preview card kecil di atas, form di bawah (stack vertikal).

---

## Konten Halaman

### A. Header Halaman
```
[──] BUAT PELUANG BARU          ← eyebrow style #e6a020
Posting Proyek                  ← heading bold
Isi detail proyek supaya kreator terbaik bisa menemukanmu.  ← subline
```

### B. Panel Form (kiri, 60%)
Background: `bg-white rounded-3xl p-8 border border-[#1a1a1a]/07`

**Field-field form** (referensi style input dari form apply di `/peluang-kerja`):

```
1. Judul Proyek *
   ┌──────────────────────────────────┐
   │ cth: "Designer UI/UX Mobile App" │  ← text input, rounded-xl
   └──────────────────────────────────┘

2. Kategori *
   ┌────────────────────┬──────────┐
   │ Desain             │    ˅     │  ← <select> dropdown, styled sama dengan SelectDropdown
   └────────────────────┴──────────┘
   Opsi: Desain | Web Dev | Penulisan | Fotografi | Marketing | Visual

3. Deskripsi Proyek *
   ┌──────────────────────────────────┐
   │                                  │
   │  (min 80 karakter)               │  ← <textarea> min-h-[120px]
   │                                  │
   └──────────────────────────────────┘
   Counter karakter di bawah kanan: "43/80"

4. Keahlian yang Dibutuhkan *
   ┌────────────────────────────────────────────┐
   │ [Figma ×] [UI/UX ×] [+] ketik & enter...  │  ← tag/chip input
   └────────────────────────────────────────────┘
   Chip style: bg-[#e6a020]/10 text-[#e6a020] rounded-lg px-2 py-0.5 text-xs font-bold

5. Persyaratan Tambahan (Opsional)
   ┌──────────────────────────────────┐
   │  cth: "Komitmen 2 minggu"        │
   └──────────────────────────────────┘

6. Reward / Benefit *
   ┌──────────────────────────────────┐
   │  cth: "Portofolio & Sertifikat"  │
   └──────────────────────────────────┘

7. Deadline (Opsional)
   ┌──────────────────────────────────┐
   │  dd/mm/yyyy                      │  ← date input
   └──────────────────────────────────┘
```

**Tombol submit:**
```
┌────────────────────────────────────────┐
│  🚀  Posting Proyek Sekarang           │  ← full-width, amber gradient
└────────────────────────────────────────┘
```
Style: `py-4 rounded-2xl font-black text-[#1a1a1a] shadow-[0_4px_24px_rgba(230,160,32,0.3)]`

### C. Panel Preview (kanan, 40%)
Background: `#222120`, `rounded-2xl`, sticky saat scroll form.

**Isi preview** — persis mengikuti tampilan kartu di `/peluang-kerja`:
```
┌────────────────────────────────┐  background: #222120
│  [🎨] Icon kategori (amber)   │
│                    [live date] │
│                                │
│  Judul Proyek                  │  ← teks dari input, fallback "Judul Proyek..."
│  [DESAIN badge] • Peluang Port │
│                                │
│  Deskripsi singkat...          │  ← 2 baris truncate
│                                │
│  ────────────────────────────  │
│  Reward:  Portofolio + Sertif  │
│  [Preview Tampilan →]          │  ← disabled/abu-abu
└────────────────────────────────┘
```

Label kecil di atas preview card: `PREVIEW TAMPILAN KREATOR` — `text-[10px] uppercase text-white/30 tracking-[0.2em]`

---

## State & Interaksi

### State: Idle (form kosong)
- Preview card menampilkan placeholder abu-abu
- Counter karakter: "0 / 80"
- Submit button: disabled, opacity-50

### State: Mengisi (form diisi sebagian)
- Preview card update live saat user mengetik
- Counter karakter berubah warna: abu → amber saat mendekati minimum
- Tag keahlian: animasi pop saat ditambahkan (`framer-motion scale 0.8 → 1`)

### State: Validasi Gagal
- Border input jadi merah: `border-red-400/50 ring-red-400/20`
- Pesan error kecil di bawah field: `text-xs text-red-400`
- Scroll otomatis ke field pertama yang error

### State: Submit Berhasil ✅
Overlay modal sukses di tengah layar (referensi dari success state apply di `/peluang-kerja`):
```
┌─────────────────────────────────────┐
│                                     │
│   ✅ (lingkaran hijau besar)        │
│                                     │
│   Proyek Berhasil Diposting!        │  ← font-black text-[#1a1a1a]
│   Kreator sudah bisa menemukan      │
│   proyekmu sekarang.                │
│                                     │
│   [Lihat Pelamar →]  [+ Proyek Lagi]│
│                                     │
└─────────────────────────────────────┘
```
Background overlay: `bg-[#1a1a1a]/80 backdrop-blur-md`

---

## Animasi
- Form panel: fade-in + slide dari kiri saat halaman load (`framer-motion`)
- Preview card: fade-in dari kanan
- Tag chip baru: `scale 0 → 1` spring animation
- Submit button: `hover:brightness-110 active:scale-[0.98]` (sama dengan button di Hero)

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah bisa simpan sebagai "Draft" sebelum publish?
- [ ] Upload gambar/logo proyek — perlu atau tidak?
- [ ] Limit berapa proyek aktif per UMKM?
