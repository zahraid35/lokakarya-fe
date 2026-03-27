# Konsep Halaman: Apply Proyek (Kreator)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (form apply di modal), `app/(auth)/layout.tsx` (dual panel, orb glow), dan design tokens `globals.css`

---

## Tujuan Halaman
Kreator mengisi **form lamaran** untuk bergabung ke proyek UMKM yang dipilih. Halaman ini harus terasa ringan dan cepat diisi — bukan birokrasi, tapi seperti percakapan singkat.

---

## Catatan Pendekatan
Form apply di `/peluang-kerja` sudah ada dalam bentuk **modal**. Konsep ini adalah versi **halaman penuh** yang lebih kaya — cocok ketika proyek membutuhkan lamaran yang lebih detail.

---

## Referensi Warna

```
Background halaman    : #f5f2eb  ← cream, konsisten
Panel form            : bg-white rounded-3xl p-8 border border-[#1a1a1a]/07
Input border default  : border-[#1a1a1a]/08
Input focus ring      : focus:ring-2 focus:ring-[#e6a020]/20 focus:border-[#e6a020]/30
Label field           : text-xs font-bold text-[#1a1a1a] uppercase tracking-wider
Placeholder           : placeholder:text-[#1a1a1a]/30
Submit CTA            : linear-gradient(135deg, #e6a020, #f0b830) + shadow amber
Success state         : bg-green-500 rounded-full + CheckCircle2 icon ← /peluang-kerja
Error state           : border-red-400/50, text-red-400 text-xs
```

---

## Referensi Layout

Struktur mengacu ke **form apply di modal `/peluang-kerja`** — tapi diperluas jadi halaman penuh dengan sisi kiri form dan sisi kanan ringkasan proyek (sticky).

```
┌────────────────────────────────────────────────────────────┐
│ SIDEBAR │  ← Kembali ke Detail Proyek                     │
│         │                                                  │
│         │  [Header + nama proyek yang dilamar]            │
│         │                                                  │
│         │  ┌─────────────────────┐  ┌─────────────────┐  │
│         │  │ FORM LAMARAN (kiri) │  │ RINGKASAN       │  │
│         │  │                     │  │ PROYEK (kanan,  │  │
│         │  │ [Textarea motivasi] │  │ sticky)         │  │
│         │  │ [Input portofolio]  │  │                 │  │
│         │  │ [Input keahlian]    │  │ [Judul proyek]  │  │
│         │  │ [Textarea rencana]  │  │ [Reward card]   │  │
│         │  │ [Submit]            │  │ [Alur status]   │  │
│         │  └─────────────────────┘  └─────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

---

## Konten Halaman

### A. Header
```
[──] FORMULIR LAMARAN                  ← eyebrow
Lamar Proyek                           ← heading font-bold
Ceritakan dirimu dan kenapa kamu cocok untuk proyek ini.
```

**Sub-header: konteks proyek (breadcrumb visual):**
```
Melamar ke:  [🎨] Designer UI/UX Mobile App  [DESAIN]
             Batik Nusantara  •  Diposting 26/03/2026
```
Container: `bg-[#e6a020]/08 rounded-2xl px-5 py-4 border border-[#e6a020]/15 mb-8`

### B. Form Lamaran (Kiri, 60%)
Background: `bg-white rounded-3xl p-8 border border-[#1a1a1a]/07`

**Field-field** (referensi style field dari form apply `/peluang-kerja` + tambahan):

```
1. Kenapa kamu tertarik? *
   ┌──────────────────────────────────────┐
   │ Ceritakan motivasimu dan bagaimana   │   ← <textarea> persis dari /peluang-kerja:
   │ kamu bisa membantu proyek ini...     │   "focus:ring-2 focus:ring-[#e6a020]/20"
   │                                      │   min-h-[120px]
   └──────────────────────────────────────┘
   Counter: "48 karakter" (warna berubah abu→amber saat mendekati min)

2. URL Portofolio Terkait (Opsional)
   ┌──────────────────────────────────────┐
   │ https://behance.net/username...      │   ← <input type="url"> dari /peluang-kerja
   └──────────────────────────────────────┘

3. Keahlian Relevan yang Kamu Miliki *
   ┌──────────────────────────────────────┐
   │ [Figma ×] [Prototyping ×] [+]…      │   ← tag input (chip), sama dengan form
   └──────────────────────────────────────┘   tambah proyek UMKM
   Chip: bg-[#e6a020]/10 text-[#e6a020] rounded-lg px-2 py-0.5 text-xs font-bold

4. Rencana Pengerjaanmu (Opsional)
   ┌──────────────────────────────────────┐
   │ Ceritakan pendekatan atau rencana    │   ← <textarea> lebih pendek min-h-[80px]
   │ pengerjaan singkat kamu...           │
   └──────────────────────────────────────┘

5. Perkiraan Waktu Selesai *
   ┌────────────────────┬─────────────────┐
   │ 1 minggu           │         ˅       │   ← <select> dropdown
   └────────────────────┴─────────────────┘
   Opsi: 1 minggu | 2 minggu | 1 bulan | > 1 bulan | Fleksibel
```

**Tombol Submit:**
```
┌──────────────────────────────────────────────┐
│  ✈️  Kirim Lamaran Sekarang                  │  ← full-width, amber gradient
└──────────────────────────────────────────────┘
```
Style persis tombol submit modal `/peluang-kerja`:
`py-4 bg-[#e6a020] text-[#1a1a1a] rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-[#e6a020]/20 hover:scale-[1.01] active:scale-[0.98]`
Icon: `Send` dari lucide-react (sama dengan `/peluang-kerja`)

### C. Panel Ringkasan Proyek (Kanan, 40%, sticky)
Background: `bg-white rounded-2xl p-6 border border-[#1a1a1a]/07`

**Isi:**
- **Judul + ikon + badge kategori** — mini card dark (`#222120`) seperti hero bento
- **Reward**: `bg-[#1a1a1a] text-white rounded-xl p-4` — persis "Benefit Utama" dari modal `/peluang-kerja`
- **Alur status** (awal kosong, belum apply):
  - Step 1: Apply → akan aktif setelah submit
  - Step 2: Review UMKM
  - Step 3: Accepted
- **Alert ringan**: `⚠️ Pastikan kamu membaca syarat proyek sebelum melamar.`
  Style: `bg-[#e6a020]/08 border border-[#e6a020]/20 rounded-xl p-4 text-xs text-[#e6a020] font-medium`

---

## State & Interaksi

### State: Form Kosong / Belum Lengkap
- Submit button: disabled + `opacity-50`
- Required fields menampilkan tanda `*`

### State: Sedang Diisi
- Input focus: ring amber muncul
- Counter karakter berubah warna
- Tag keahlian pop saat ditambah (`framer-motion scale 0 → 1`)
- Submit button aktif ketika field wajib terisi semua

### State: Submit Berhasil ✅
Referensi animasi sukses **langsung dari `/peluang-kerja`**:
```
┌─────────────────────────────────────────┐
│                                         │
│   ✅ (w-16 h-16 bg-green-500 rounded-full)
│                                         │
│   Aplikasi Terkirim!                    │  ← text-lg font-bold text-[#1a1a1a]
│   Mohon tunggu kabar dari UMKM terkait. │  ← text-sm text-[#1a1a1a]/50
│                                         │
│   animate-bounce — persis /peluang-kerja│
│                                         │
└─────────────────────────────────────────┘
```
Auto redirect ke halaman dashboard Kreator setelah 2.5 detik, atau tombol manual "Kembali ke Dashboard".

### State: Error Validasi
- Border field merah: `border-red-400/50 ring-red-400/20`
- Pesan error di bawah: `text-xs text-red-400`
- Scroll halaman ke field pertama yang error

---

## Animasi
- Halaman masuk: sub-header konteks proyek fade-in dari atas, form muncul dari bawah
- Tag chip: `scale 0 → 1` spring (framer-motion)
- Submit sukses: bounce animation (sama persis dengan `/peluang-kerja`)
- Panel kanan: fade-in dari kanan saat halaman load

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah ada limit berapa banyak proyek yang bisa dilamar kreator sekaligus?
- [ ] Upload contoh karya (gambar/file) sebagai portofolio lampiran?
- [ ] Notifikasi langsung ke kreator saat UMKM membaca lamarannya ("Seen")?
