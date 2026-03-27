# Konsep Halaman: Progres Proyek (Kreator)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (stepper alur: Apply→Review→Accepted), `app/proyek/page.tsx` (bento dark card + glow), `app/(auth)/layout.tsx` (orb ambient), dan `globals.css`

---

## Tujuan Halaman
Kreator memantau **progres proyek yang sedang dikerjakan** bersama UMKM — melihat milestone, menandai pekerjaan selesai, dan berkomunikasi. Berbeda dengan versi UMKM yang lebih sebagai "pengawas", halaman kreator lebih sebagai **pelaksana** yang melaporkan kemajuan.

---

## Referensi Warna

```
Background halaman  : #f5f2eb   ← cream konsisten
Card proyek aktif   : bg-white rounded-3xl border border-[#1a1a1a]/07
Progress bar track  : #1a1a1a/10
Progress bar fill   : linear-gradient(90deg, #7c6df0, #a394f7) ← ungu khas kreator
                      (bedain dari UMKM yang pakai amber)
Milestone: Done     : #34d399 hijau ← sama dengan UMKM
Milestone: Current  : #7c6df0 ungu  ← khas kreator (bukan amber seperti UMKM)
Milestone: Pending  : #1a1a1a/15
Glow ambient card   : rgba(124,109,240,0.06) ungu ← berbeda dari UMKM yang amber
Kreator avatar self : #7c6df0 (warna sendiri)
UMKM avatar         : #e6a020 (warna UMKM)
```

> *Pilihan warna ungu `#7c6df0` untuk kreator sengaja berbeda dari amber UMKM sebagai identifikasi peran visual.*

---

## Referensi Layout

Layout sama dengan halaman progres UMKM — tapi **perspektif dan aksi berbeda**: Kreator yang melaporkan selesai, bukan UMKM yang menandai.

```
┌───────────────────────────────────────────────────────────┐
│ SIDEBAR     │  [Header]                                   │
│             │                                             │
│             │  [Summary: 2 Aktif • 1 Menunggu Review]    │
│             │                                             │
│             │  ┌──────────────────────────────────────┐  │
│             │  │  CARD PROYEK FEATURED (full-width)    │  │
│             │  │  Info + Progress + Milestone + Aksi   │  │
│             │  └──────────────────────────────────────┘  │
│             │                                             │
│             │  ┌─────────────┐   ┌─────────────────┐    │
│             │  │ CARD mini 2 │   │   CARD mini 3   │    │
│             │  └─────────────┘   └─────────────────┘    │
└───────────────────────────────────────────────────────────┘
```

---

## Konten Halaman

### A. Header
```
[──] PROGRES PENGERJAAN               ← eyebrow #e6a020
Proyekmu yang Berjalan                ← heading font-bold
Laporkan kemajuan dan tetap terhubung dengan UMKM.  ← subline
```

**Summary pills (kanan heading):**
```
[ 2 Sedang Dikerjakan ]  [ 1 Menunggu Persetujuan ]
```
Pill ungu: `bg-[#7c6df0]/10 text-[#7c6df0] border-[#7c6df0]/20` — berbeda dari amber UMKM.

---

### B. Card Proyek Featured (Full-Width)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Glow ungu ambient top-right, blur-[80px] opacity-15]          │
│                                                                  │
│  ┌──────────────────────────────┐  ┌───────────────────────┐   │
│  │ INFO PROYEK                  │  │ PROGRESS              │   │
│  │                              │  │                       │   │
│  │ [🎨] Designer UI/UX Mobile  │  │  65%                  │   │
│  │       App                    │  │  ████████░░░  65%    │   │
│  │ [DESAIN] • Batik Nusantara   │  │  ← ungu gradient      │   │
│  │ Dimulai: 20/03/2026          │  │                       │   │
│  │                              │  │ Deadline: 10/04/2026  │   │
│  │ UMKM:                        │  │ Sisa: 14 hari         │   │
│  │ [🟡] Batik Nusantara         │  │                       │   │
│  │                              │  │ Update terakhir:      │   │
│  │ Status milestone sekarang:   │  │ Barusan               │   │
│  │ "Sedang mengerjakan revisi"  │  │                       │   │
│  └──────────────────────────────┘  └───────────────────────┘   │
│                                                                  │
│  ── MILESTONE (DARI PERSPEKTIF KREATOR) ─────────────────────── │
│                                                                  │
│  ✅ Brief & Kickoff            selesai 21/03/26                 │
│  ✅ Wireframe & Mockup         selesai 23/03/26                 │
│  🔄 Revisi & Feedback          [Laporkan Selesai ▶]            │  ← aksi kreator
│  ⏳ Final Delivery              menunggu                        │
│  ⏳ Review & Close              menunggu                        │
│                                                                  │
│  ──────────────────────────────────────────────────────────── │
│                                                                  │
│  [ 💬 Chat dengan UMKM ]     [ ✅ Laporkan Milestone Selesai ]  │
└─────────────────────────────────────────────────────────────────┘
bg-white rounded-3xl p-8 border border-[#1a1a1a]/07 shadow-sm
```

**Perbedaan kunci vs versi UMKM:**
- Progress bar: ungu `#7c6df0` (kreator) vs amber `#e6a020` (UMKM)
- Milestone current dot: ungu pulse (bukan amber)
- Tombol: "**Laporkan Milestone Selesai**" (kreator melaporkan) bukan "Tandai Selesai" (UMKM yang approve)
- Label: kreator fokus pada "apa yang perlu dikerjakan", UMKM fokus pada "apa yang sudah disetujui"

---

### C. Milestone Stepper (Perspektif Kreator)

Referensi langsung dari stepper di modal `/peluang-kerja` — diperluas jadi vertikal connector.

**Dot color kreator:**
- Done `●`: `bg-[#34d399]` hijau + CheckCircle2 icon — sama dengan UMKM
- Current `◉`: `bg-[#7c6df0]` ungu + `animate-pulse` outer ring ungu — **beda dari UMKM** yang amber
- Pending `○`: `bg-[#1a1a1a]/10` abu — sama

```
  ● Selesai: Brief & Kickoff
  │   Disetujui UMKM ✓
  │
  ● Selesai: Wireframe & Mockup
  │   Disetujui UMKM ✓
  │
  ◉ Sedang: Revisi & Feedback           ← current ungu pulse
  │   [ Laporkan Selesai → ]            ← tombol inline kecil
  │   Catatan: "Menunggu feedback UMKM"
  │
  ○ Belum: Final Delivery
  ○ Belum: Review & Close
```

**Tombol inline "Laporkan Selesai":**
- Style: `px-3 py-1.5 rounded-lg text-xs font-bold bg-[#7c6df0]/10 text-[#7c6df0] border border-[#7c6df0]/20 hover:bg-[#7c6df0] hover:text-white transition-all`

---

### D. Alur Status Persetujuan (Tambahan untuk Kreator)

Di bawah milestone, ada mini status track: **laporan kreator → review UMKM → disetujui:**

```
[ Kreator Laporkan ] → [ Menunggu Review UMKM ] → [ Disetujui / Revisi ]
```

Jika UMKM meminta revisi → muncul note:
```
┌───────────────────────────────────────────────┐
│  ⚠️  UMKM meminta revisi                     │  ← warning box amber
│  "Tolong perbaiki bagian landing page hero…" │
└───────────────────────────────────────────────┘
bg-[#e6a020]/08 border border-[#e6a020]/20 rounded-xl p-4
text-sm text-[#e6a020] font-medium
```

---

### E. Card Proyek Mini (Grid 2 Kolom)
Versi ringkas card: judul, avatar UMKM, progress bar ungu, milestone sekarang, tombol "Lihat Detail".

---

### F. Section Kosong (Tidak Ada Proyek Aktif)
```
┌──────────────────────────────────────────┐
│         (ilustrasi ringan)               │
│  Belum ada proyek yang berjalan.         │
│  Jelajahi proyek UMKM dan mulai lamar!   │
│                                          │
│  [ 🔍 Jelajahi Proyek ]                 │
└──────────────────────────────────────────┘
bg-white rounded-3xl p-12 text-center border border-dashed border-[#1a1a1a]/10
```

---

## Interaksi Kunci

### "Laporkan Milestone Selesai"
Klik → konfirmasi kecil:
```
"Laporkan milestone [Revisi & Feedback] sebagai selesai?"
[ Batal ]  [ Ya, Laporkan ]
```
Setelah konfirm:
- Status milestone: "Sedang" → "Menunggu Review UMKM" (spinner kecil abu)
- Tombol laporkan: disabled
- UMKM akan menerima notifikasi untuk approve/revisi
- Toast: "Laporan dikirim! Menunggu persetujuan UMKM 🕐"

### "Chat dengan UMKM"
Panel chat slide dari kanan (sama dengan konsep UMKM):
```
┌────────────────────────────────┐
│  Chat dengan Batik Nusantara [×]│
│  ─────────────────────────── │
│  [bubble UMKM] Bagaimana prog... │
│  [bubble Kreator]   Sudah 80%   │
│  ─────────────────────────── │
│  [Ketik pesan...      [Kirim]   │
└────────────────────────────────┘
```
`fixed right-0 top-0 h-full w-[360px]` + background `#f5f2eb` + border kiri

---

## Animasi
- Progress bar: 0% → nilai aktual saat mount (transition 800ms ease-out)
- Milestone dot current: `animate-ping` ungu outer ring
- Card hover: `hover:-translate-y-0.5 hover:shadow-lg` (bento card `/proyek`)
- Konfirmasi modal: `scale 0.96 → 1` + `opacity 0 → 1` spring
- Toast: slide dari kanan + auto-dismiss 3 detik

---

## Perbedaan Visual Kreator vs UMKM (Ringkasan)

| Elemen | UMKM | Kreator |
|---|---|---|
| Progress bar | Amber `#e6a020` | Ungu `#7c6df0` |
| Milestone current | Amber pulse | Ungu pulse |
| Glow card | Amber `06` | Ungu `06` |
| Tombol aksi | "Tandai Milestone Selesai" | "Laporkan Milestone Selesai" |
| Alur tambahan | Tidak ada | Revisi request dari UMKM |
| Empty state CTA | "Tambah Proyek Baru" | "Jelajahi Proyek" |

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah kreator bisa upload file/gambar sebagai bukti pekerjaan saat laporkan selesai?
- [ ] Jika UMKM meminta revisi berulang — apakah ada batas revisi?
- [ ] Rating UMKM oleh Kreator setelah proyek selesai (dan sebaliknya)?
