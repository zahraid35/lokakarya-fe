# Konsep Halaman: Jelajahi Proyek UMKM (Kreator)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (grid card + filter bar + modal), `app/proyek/page.tsx` (bento grid + tabs), dan design tokens `globals.css`

---

## Tujuan Halaman
Halaman **browsing** proyek — kreator melihat semua proyek yang diposting UMKM lalu memilih yang ingin mereka lamar. Ini adalah halaman paling sering dikunjungi kreator, jadi harus nyaman di-scroll dan mudah discan.

---

## Referensi Warna

```
Background halaman  : #f5f2eb   ← sama dengan /peluang-kerja (konsisten)
Card proyek         : bg-white rounded-3xl border border-[#1a1a1a]/07
Card hover shadow   : hover:shadow-xl hover:shadow-[#e6a020]/05
Aksen utama         : #e6a020
Tab aktif           : linear-gradient(135deg, #e6a020, #c98a18) ← sama persis /proyek tab
Tab non-aktif       : rgba(255,255,255,0.6) border rgba(26,26,26,0.08) ← /proyek
Kategori badge      : {accent}15 bg + {accent} text ← pola /peluang-kerja
CTA "Lamar"         : bg-[#1a1a1a] text-white hover:bg-[#e6a020] ← persis button /peluang-kerja
Reward highlight    : text-[#1a1a1a]/70 font-bold ← style reward card /peluang-kerja
```

---

## Referensi Layout

Halaman ini adalah **evolusi langsung** dari `/peluang-kerja/page.tsx` — struktur, grid, dan filter bar mengacu 80% ke sana, dengan penambahan fitur (search lebih kaya, filter lebih banyak, bento featured di atas).

```
┌───────────────────────────────────────────────────────────┐
│ SIDEBAR     │  [Header + Search bar]                     │
│             │                                             │
│             │  [Tabs kategori: Semua | Desain | Web | …] │
│             │                                             │
│             │  [Featured Bento (proyek unggulan)]        │
│             │  ┌────┐ ┌──┐ ┌──┐                         │
│             │  │ XL │ │  │ │  │                         │
│             │  │    │ └──┘ └──┘                         │
│             │  └────┘                                    │
│             │                                             │
│             │  [Filter Bar: Kategori + Sort + Count]     │
│             │                                             │
│             │  ┌──────┐ ┌──────┐ ┌──────┐              │
│             │  │ Card │ │ Card │ │ Card │              │
│             │  └──────┘ └──────┘ └──────┘              │
│             │  ┌──────┐ ┌──────┐ ┌──────┐              │
│             │  │ Card │ │ Card │ │ Card │              │
│             │  └──────┘ └──────┘ └──────┘              │
│             │                                             │
│             │  [Pagination]                              │
└───────────────────────────────────────────────────────────┘
```

---

## Konten Halaman

### A. Header + Search
Referensi dari header `/peluang-kerja`:
```
[──] PELUANG KOLABORASI                 ← eyebrow #e6a020
Jelajahi Proyek UMKM                    ← heading font-bold
Temukan proyek yang cocok dengan keahlianmu.  ← subline

                      [🔍 Cari proyek, keahlian…]    ← input search w-[300px]
```
Input search style persis dari `/peluang-kerja`:
`pl-11 pr-5 py-3 bg-white rounded-2xl border border-[#1a1a1a]/08 shadow-sm focus:ring-2 focus:ring-[#e6a020]/20`

### B. Tabs Kategori
Referensi **langsung** dari tab `/proyek/page.tsx`:
```
[ Semua ] [ Desain ] [ Web Dev ] [ Penulisan ] [ Fotografi ] [ Marketing ] [ Visual ]
```
Pill button style identik dengan tab di `/proyek`:
- Aktif: `background: linear-gradient(135deg,#e6a020,#c98a18)` + `color:#fff` + shadow amber
- Non-aktif: `background:rgba(255,255,255,0.6)` + `color:rgba(26,26,26,0.5)` + border tipis

### C. Featured Bento Grid (Proyek Unggulan)
Referensi langsung dari **bento grid** `/proyek/page.tsx` — tapi isinya proyek UMKM bukan kategori layanan. Dark background `#222120`, glow top-right warna aksen.

```
┌──────────────────────────┬──────────────┬──────────────┐
│  [Web Development]       │ [UI Design]  │ [Marketing]  │
│  340+ proyek tersedia    │  Featured    │  Featured    │
│  Jelajahi →              │              │              │
│  (md:col-span-2 row-2)  │              │              │
├──────────────────────────┤──────────────┤──────────────┤
│  (area besar kiri)       │ [Fotografi]  │ [Penulisan]  │
│                          │              │              │
└──────────────────────────┴──────────────┴──────────────┘
```
Anatomy tiap bento card (sama persis `/proyek`): count badge top-left, title bottom-left, arrow bulat muncul saat hover, accent underline anim.

### D. Filter Bar
Referensi dari filter `/peluang-kerja`:
```
Filter: [ Kategori ˅ ]  [ Urutkan: Terbaru ˅ ]
                          Menampilkan 24 proyek
```
Tambahan `Urutkan`: Terbaru | Paling Banyak Pelamar | Deadline Terdekat

### E. Grid Card Proyek
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

**Anatomy card** (referensi 1:1 dari card job `/peluang-kerja`):
```
┌────────────────────────────────────────────┐
│  [🎨 icon kategori]            [26/03/2026]│  ← icon colored + tanggal kecil
│                                             │
│  Designer UI/UX Mobile App                 │  ← h3 group-hover:text-[#e6a020]
│  [DESAIN] • Peluang Portofolio             │  ← kategori badge + tipe
│                                             │
│  Kami membutuhkan desainer UI/UX untuk...  │  ← line-clamp-3 text-sm text-[#1a1a1a]/50
│                                             │
│  ─────────────────────────────────────     │
│  Reward:              Portofolio & Sertif  │
│  [ Pelajari & Lamar ↗ ]                   │  ← tombol full-width
└────────────────────────────────────────────┘
bg-white rounded-3xl p-6 hover:shadow-xl hover:shadow-[#e6a020]/05
```

Tombol "Pelajari & Lamar": `bg-[#1a1a1a] text-white` hover ke `bg-[#e6a020]` — persis button di `/peluang-kerja`.

**Label tambahan di card (beda dari /peluang-kerja):**
- `👥 7 Pelamar` — counter pelamar di pojok bawah kiri
- `⏰ Deadline: 10 Apr` — jika ada deadline

### F. Pagination
Persis dari `/peluang-kerja` — pill pagination dengan amber highlight untuk halaman aktif.

---

## Interaksi: Klik Card → Halaman Detail
Klik tombol/card seluruh area → navigasi ke **halaman detail proyek** (file terpisah: `konsep_kreator_detail_proyek.md`).

---

## Animasi
- Tab switch: card re-render fade-out/in (`framer-motion AnimatePresence`)
- Bento card hover: `hover:-translate-y-0.5` + accent line `scale-x-100` (sama `/proyek`)
- Job card hover: title berubah ke amber (sama `/peluang-kerja`)
- Search focus: icon search berubah ke amber (sama `/peluang-kerja`)

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah proyek yang sudah dilamar kreator diberi tanda "Sudah Dilamar" di card-nya?
- [ ] Filter berdasarkan reward (portofolio / berbayar / sertifikat)?
- [ ] Apakah kreator bisa menyimpan/bookmark proyek?
