# Konsep Halaman: Progres Proyek (UMKM)
> Referensi diambil dari `app/peluang-kerja/page.tsx` (stepper alur status), `app/proyek/page.tsx` (bento card dark), `app/(auth)/layout.tsx` (orb/glow ambient), dan design tokens `globals.css`

---

## Tujuan Halaman
Halaman ini memungkinkan UMKM untuk **memantau jalannya proyek** yang sedang dikerjakan bersama kreator — melihat milestone yang sudah tercapai, yang sedang dikerjakan, dan yang belum dimulai. Ini adalah ruang kolaborasi bersama.

---

## Referensi Warna

```
Background halaman  : #f5f2eb    ← sama dengan halaman publik light
Card proyek aktif   : bg-white rounded-3xl border border-[#1a1a1a]/07
Progress bar track  : #1a1a1a/10 (abu terang)
Progress bar fill   : linear-gradient(90deg, #e6a020, #f5c842) ← amber gradient
Milestone: Done     : #34d399    ← hijau
Milestone: Current  : #e6a020    ← amber (sama dengan current step di modal /peluang-kerja)
Milestone: Pending  : #1a1a1a/15 ← abu
Aksen glow card     : rgba(230,160,32,0.06) blur — mengikuti glow di Hero.tsx & auth layout
Kreator avatar      : rotasi ['#e6a020', '#7c6df0', '#4ab3f4', '#f06090']
```

---

## Referensi Layout

### Terinspirasi dari dua sumber:
1. **Stepper alur status** di modal `/peluang-kerja` (vertikal: Apply → Review → Accepted)
2. **Card dark** di `/proyek` (bento grid `#222120` dengan colored glow top-right)

```
┌───────────────────────────────────────────────────────────┐
│ SIDEBAR │  [Header]                                       │
│         │                                                 │
│         │  ┌──────────────────────────────────────────┐  │
│         │  │ CARD PROYEK AKTIF 1                      │  │
│         │  │                                          │  │
│         │  │  [Info Proyek + Kreator]  [Progress Bar] │  │
│         │  │                                          │  │
│         │  │  [Milestone Stepper]                     │  │
│         │  │                                          │  │
│         │  │  [Tombol Aksi]                           │  │
│         │  └──────────────────────────────────────────┘  │
│         │                                                 │
│         │  ┌─────────────────────┐  ┌─────────────────┐  │
│         │  │ CARD PROYEK 2 (sm) │  │ CARD PROYEK 3  │  │
│         │  └─────────────────────┘  └─────────────────┘  │
└───────────────────────────────────────────────────────────┘
```

Layout: Proyek pertama (featured) full-width, sisanya 2 kolom. Mobile: semua stack vertikal.

---

## Konten Halaman

### A. Header
```
[──] KOLABORASI AKTIF               ← eyebrow #e6a020
Progres Proyek                      ← heading
Pantau dan kelola proyek yang sedang berjalan bersama kreator.
```

**Summary pills (di samping heading, kanan):**
```
[ 2 Aktif ]  [ 1 Menunggu Review ]
```
Pill style: `px-3 py-1 rounded-full bg-[#e6a020]/10 text-[#e6a020] text-xs font-bold border border-[#e6a020]/20`

### B. Card Proyek (Featured — Full Width)

Referensi: kombinasi card `/peluang-kerja` (struktur isi) + dark tone bento `/proyek` (untuk versi featured). Namun karena ini dashboard, card tetap light `bg-white`.

```
┌─────────────────────────────────────────────────────────────────┐
│  [Glow amber subtle top-right, seperti auth layout orb]         │
│                                                                  │
│  ┌───────────────────────────────┐  ┌──────────────────────┐   │
│  │ INFO PROYEK                   │  │ PROGRESS               │   │
│  │                               │  │                        │   │
│  │ [🎨] Designer UI/UX Mobile   │  │  65%                   │   │
│  │       App                     │  │  ████████░░░░░  65%   │   │
│  │                               │  │  ← progress bar amber  │   │
│  │ [DESAIN] • Dimulai 20/03/26  │  │                        │   │
│  │                               │  │ Deadline: 10/04/26     │   │
│  │ Kreator:                      │  │ Sisa: 14 hari          │   │
│  │ [🟡] [🟣] Diani + 1 lainnya │  │                        │   │
│  │                               │  │ Update terakhir:       │   │
│  │ "Revisi ke-2 sedang           │  │ 2 jam lalu             │   │
│  │  dikerjakan oleh kreator"     │  │                        │   │
│  └───────────────────────────────┘  └──────────────────────┘   │
│                                                                  │
│  ── MILESTONE ─────────────────────────────────────────────── │
│                                                                  │
│  ✅ Brief & Kickoff          selesai 21/03/26                   │
│  ✅ Wireframe & Mockup       selesai 23/03/26                   │
│  🔄 Revisi & Feedback        sedang berjalan ← pulse amber      │
│  ⏳ Final Delivery            menunggu                          │
│  ⏳ Review & Close            menunggu                          │
│                                                                  │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  [ 💬 Kirim Pesan ke Kreator ]    [ ✓ Tandai Milestone Selesai ]│
└─────────────────────────────────────────────────────────────────┘
bg-white rounded-3xl p-8 border border-[#1a1a1a]/07
shadow-sm hover:shadow-lg transition-all
```

### C. Milestone Stepper (Detail)
Referensi langsung dari **status alur** di modal `/peluang-kerja` (tapi diperluas dan lebih detail):

```tsx
// Referensi dari /peluang-kerja modal:
{ label: 'Apply', done: true, current: false }
{ label: 'Review UMKM', done: false, current: true }
{ label: 'Accepted', done: false, current: false }
```

Untuk halaman progres, diperluas menjadi connector vertikal:

```
  ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  │  ✅ BRIEF & KICKOFF           21 Mar
  │  Tim sepakat, brief disetujui
  │
  ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  │  ✅ WIREFRAME & MOCKUP        23 Mar
  │  Draft H.1-5 dikirimkan kreator
  │
  ◉━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← current (amber pulse)
  │  🔄 REVISI & FEEDBACK         sedang
  │  Menunggu revisi dari kreator
  │
  ○━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← abu
     ⏳ FINAL DELIVERY
     ⏳ REVIEW & CLOSE
```

**Dot style:**
- Done `●`: `w-5 h-5 rounded-full bg-[#34d399]` + `CheckCircle2` icon (sama dengan checkmark di modal `/peluang-kerja`)
- Current `◉`: `w-5 h-5 rounded-full bg-[#e6a020]` + `Clock` icon + `animate-pulse class` di outer ring
- Pending `○`: `w-5 h-5 rounded-full bg-[#1a1a1a]/10`

### D. Card Proyek Kecil (Grid 2 Kolom)
Versi ringkas dari card featured — hanya tampilkan:
- Judul + kategori
- Avatar kreator
- Progress bar + persentase
- Status milestone sekarang (1 baris)
- Tombol "Lihat Detail →"

### E. Section Kosong (jika tidak ada proyek aktif)
```
┌────────────────────────────────────────┐
│            (ilustrasi sederhana)       │
│                                        │
│   Belum ada proyek yang berjalan.      │
│   Mulai dengan posting proyek baru!    │
│                                        │
│     [ + Tambah Proyek Sekarang ]       │
└────────────────────────────────────────┘
```
Style: `bg-white rounded-3xl p-12 text-center border border-dashed border-[#1a1a1a]/10`

---

## State Milestone & Interaksi

### Tombol "Tandai Selesai"
Klik → konfirmasi modal kecil:
```
"Tandai milestone [Revisi & Feedback] sebagai selesai?"
[ Batal ]  [ Ya, Tandai Selesai ]
```
Setelah konfirm:
- Dot berubah: amber → hijau ✅
- Progress bar angka naik (animasi counter)
- Milestone berikutnya jadi "Current" (amber pulse)
- Toast: "Milestone berhasil diperbarui! 🎉"

### Tombol "Kirim Pesan"
Klik → panel chat slide dari kanan (atau modal):
```
┌────────────────────────────────┐
│  Chat dengan Diani Putri  [×] │
│  ─────────────────────────── │
│  [bubble] Hei, bagaimana...   │
│  [bubble]       Sudah selesai │
│  ─────────────────────────── │
│  [input pesan...      [Kirim] │
└────────────────────────────────┘
```
Panel: `fixed right-0 top-0 h-full w-[360px]`, background `#f5f2eb`, border kiri `border-[#1a1a1a]/08`

---

## Animasi
- Progress bar fill: animasi dari 0% → nilai aktual saat komponen mount (CSS transition + framer-motion)
- Counter angka progress: `0 → 65%` dengan easing spring
- Milestone dot current: outer ring `animate-ping opacity-30` amber
- Card hover: `hover:-translate-y-0.5 hover:shadow-lg` (sama dengan bento card `/proyek`)
- Milestone tandai selesai: dot color transition `framer-motion` spring

---

## Pertanyaan Terbuka / To-do
- [ ] Apakah kreator juga punya halaman progres yang sama (dari perspektif kreator)?
- [ ] Milestone — siapa yang bisa menambah/edit? UMKM saja, kreator saja, atau keduanya?
- [ ] Chat panel: apakah fitur real-time (WebSocket) atau cukup statik dulu?
- [ ] Notifikasi push saat kreator menyelesaikan milestone?
