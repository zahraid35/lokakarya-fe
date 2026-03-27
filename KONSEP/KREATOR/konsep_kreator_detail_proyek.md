# Konsep Halaman: Detail Proyek (Kreator)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (modal detail apply — struktur dua kolom, syarat, alur status), `app/proyek/page.tsx` (dark accent card), dan `globals.css`

---

## Tujuan Halaman
Halaman **full-page detail** dari satu proyek UMKM. Kreator bisa membaca semua informasi proyek secara lengkap sebelum memutuskan untuk melamar. Berbeda dari modal di `/peluang-kerja` — ini adalah halaman penuh, bukan popup.

> Konsep ini adalah versi expanded dari modal yang sudah ada di `app/peluang-kerja/page.tsx`.

---

## Referensi Warna

```
Background halaman  : #f5f2eb   ← cream, konsisten
Hero section card   : #1a1a1a (dark) atau #222120  ← bento card /proyek
Info panel kiri     : bg-white rounded-3xl border border-[#1a1a1a]/07
Sidebar info kanan  : bg-white rounded-2xl atau bg-[#1a1a1a] text-white
Aksen kategori      : {accent}15 bg + {accent} text ← /peluang-kerja
CTA "Lamar Sekarang": linear-gradient(135deg,#e6a020,#f0b830) shadow-amber
Back button         : text-[#1a1a1a]/40 hover:text-[#1a1a1a] ← link subtle
Syarat checklist    : CheckCircle2 icon #e6a020 ← persis dari /peluang-kerja modal
```

---

## Referensi Layout

Mengacu ke **layout modal `/peluang-kerja`** yang sudah punya dua kolom (konten kiri + panel info kanan), diperluas ke halaman penuh.

```
┌────────────────────────────────────────────────────────────┐
│ SIDEBAR │  ← Kembali ke Jelajahi Proyek                   │
│         │                                                  │
│         │  ┌──────────────────────────────────────────┐   │
│         │  │  HERO CARD  — dark background #222120    │   │
│         │  │  [icon kategori besar]  Judul Proyek     │   │
│         │  │  [badge kategori]  •  [tipe]             │   │
│         │  │  Diposting: [UMKM Name] • [tanggal]      │   │
│         │  └──────────────────────────────────────────┘   │
│         │                                                  │
│         │  ┌─────────────────────┐  ┌─────────────────┐  │
│         │  │ KONTEN UTAMA (kiri) │  │ PANEL INFO      │  │
│         │  │                     │  │ (kanan, sticky) │  │
│         │  │ Tentang Proyek      │  │                 │  │
│         │  │ Persyaratan         │  │ Reward Card     │  │
│         │  │ Tentang UMKM        │  │ Alur Status     │  │
│         │  │                     │  │ CTA Lamar       │  │
│         │  └─────────────────────┘  └─────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

---

## Konten Halaman

### A. Breadcrumb / Back Navigation
```
← Kembali ke Jelajahi Proyek
```
Style: `text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a] flex items-center gap-1.5 group`
Icon: `ChevronLeft` dari lucide-react (sudah dipakai di `/peluang-kerja`)

### B. Hero Card (Full-width, Dark)
Referensi tampilan dark card dari `/proyek` bento:
```
┌──────────────────────────────────────────────────────────────┐
│  [Glow ambient warna aksen top-right, blur-[80px] opacity-20]│
│                                                              │
│  [ 🎨 icon 56x56 rounded-2xl warna aksen]                   │
│     DESAIN • PELUANG PORTOFOLIO                               │  ← badge kecil
│                                                              │
│  Designer UI/UX Mobile App                                   │  ← text-3xl font-black text-white
│  Batik Nusantara UMKM  • Diposting 26/03/2026               │  ← text-sm text-white/40
│                                                              │
│  👥 7 Pelamar sudah apply           ⏰ Deadline: 10 Apr      │
└──────────────────────────────────────────────────────────────┘
background: #222120, rounded-2xl p-8 mb-8
```

### C. Konten Utama (Kiri, 60%)
Background: `bg-white rounded-3xl p-8 border border-[#1a1a1a]/07`

**C.1 Tentang Proyek**
```
● TENTANG PROYEK                  ← section header style /peluang-kerja modal
  [deskripsi panjang]
  [deskripsi panjang]
```
Section header:
```tsx
<span className="w-1.5 h-1.5 rounded-full bg-[#e6a020]" />
<h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
  Tentang Proyek
</h4>
```

**C.2 Persyaratan**
Referensi **langsung** dari syarat di modal `/peluang-kerja`:
```tsx
<ul className="space-y-2">
  {syarat.map((s, i) => (
    <li key={i} className="flex items-start gap-2 text-sm text-[#1a1a1a]/60">
      <CheckCircle2 className="w-4 h-4 text-[#e6a020] shrink-0 mt-0.5" />
      {s}
    </li>
  ))}
</ul>
```

**C.3 Keahlian yang Dibutuhkan**
Chip/tag dalam grid:
```
[Figma]  [UI/UX]  [Prototyping]  [User Research]
```
Chip: `px-3 py-1 rounded-lg text-xs font-bold bg-[#e6a020]/10 text-[#e6a020] border border-[#e6a020]/20`

**C.4 Tentang UMKM**
Card pendek:
```
┌──────────────────────────────────────────┐
│  [Avatar UMKM]  Batik Nusantara          │
│                 Industri: Kerajinan Tangan│
│                 Bergabung: Jan 2026      │
│                 [3 proyek sebelumnya]    │
└──────────────────────────────────────────┘
bg-[#1a1a1a]/[0.03] rounded-2xl p-5 border border-[#1a1a1a]/05
```

### D. Panel Info (Kanan, 40%, sticky)

**D.1 Reward Card (dark)**
Referensi dari **"Benefit Utama"** card di modal `/peluang-kerja`:
```
┌────────────────────────────────┐
│  BENEFIT UTAMA                 │  ← text-[10px] uppercase tracking-[0.2em] white/30
│  Portofolio & Sertifikat       │  ← text-sm font-bold text-white
└────────────────────────────────┘
bg-[#1a1a1a] rounded-xl p-5 text-white
```

**D.2 Detail Cepat (list)**
```
📅 Diposting: 26/03/2026
⏰ Deadline:  10/04/2026
👥 Pelamar:   7 orang
🏷 Tipe:      Peluang Portofolio
```

**D.3 Alur Status**
Referensi **langsung** dari "Status Alur" di modal `/peluang-kerja`:
```tsx
[{ label: 'Apply', done: false, current: false }]
[{ label: 'Review UMKM', done: false, current: false }]
[{ label: 'Accepted', done: false, current: false }]
```
Semua kosong (belum apply). Setelah apply → step pertama menjadi aktif.

**D.4 CTA Button**
```
┌───────────────────────────────────┐
│   🚀  Lamar Proyek Ini            │  ← amber gradient, full-width
└───────────────────────────────────┘
```
Style: persis button submit di `/peluang-kerja`
`py-4 rounded-2xl font-black text-[#1a1a1a] bg-gradient-to-br from-[#e6a020] to-[#f0b830] shadow-[0_4px_24px_rgba(230,160,32,0.3)]`

Klik → navigasi ke **halaman apply** (file: `konsep_kreator_apply_proyek.md`) atau buka modal apply.

---

## State CTA

| Kondisi | Tampilan tombol |
|---|---|
| Belum apply | Amber gradient "Lamar Proyek Ini" |
| Sudah apply | Abu disabled "Lamaran Terkirim ✓" |
| Diterima | Hijau "Kamu Diterima! Lihat Progres →" |
| Ditolak | Merah pudar "Lamaran Ditolak" |

---

## Animasi
- Halaman masuk: hero card fade-in dari atas, konten kiri muncul dari bawah (`framer-motion`)
- Panel kanan: fade-in dari kanan
- CTA button: `hover:brightness-110 active:scale-[0.98]` (sama dengan semua button di project)
- Skill chip: pop saat di-hover: `hover:scale-105`

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah kreator bisa melihat identitas pelamar lain (nama saja, atau anonim)?
- [ ] Foto/gambar brief proyek bisa diupload UMKM dan tampil di sini?
- [ ] Share proyek ke media sosial?
