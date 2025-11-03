# 🧩 Project-PROGNET

## 🏗️ Struktur Branch

Repository ini menggunakan 4 branch utama untuk kolaborasi:

- **`main`** → berisi versi final dan stabil dari project
- **`juana`** → branch kerja Juana
- **`gerald`** → branch kerja Gerald
- **`darren`** → branch kerja Darren

---

## ⚙️ Panduan Awal (Semua Anggota)

### 1️⃣ Clone repository ke komputer masing-masing

```bash
git clone https://github.com/juanaxyz/Project-PROGNET.git
cd Project-PROGNET
```

### 2️⃣ Pindah ke branch masing-masing

Untuk Juana:

```bash
git checkout juana
```

Untuk Gerald:

```bash
git checkout gerald
```

Untuk Darren:

```bash
git checkout darren
```

Kalau branch belum muncul di lokal:

```bash
git fetch origin
git checkout <nama_branch>
```

---

## 🔄 Workflow Harian

### 🕓 Sebelum mulai edit

Selalu update kode terbaru dari `main`:

```bash
git checkout main
git pull origin main
git checkout <nama_branch_kamu>
git merge main
```

### 🧠 Saat sedang mengerjakan tugas

Lakukan perubahan di branch masing-masing, lalu:

```bash
git add .
git commit -m "deskripsi singkat perubahan"
git push origin <nama_branch_kamu>
```

Contoh:

```bash
git push origin gerald
```

### ✅ Setelah fitur selesai

Buka repo di GitHub, lalu:

1. Klik tab **Pull Requests**
2. Klik **“New Pull Request”**
3. Pilih:

   - Base: `main`
   - Compare: `<nama_branch_kamu>`

4. Tambahkan deskripsi perubahan
5. Klik **Create Pull Request**




## 🧰 Tips Kolaborasi

- Gunakan commit message yang jelas, misal:

  - `feat: menambahkan halaman login`
  - `fix: perbaiki bug validasi`
  - `docs: update README`

- Lakukan `git pull origin main` setiap kali sebelum mulai kerja.
- Hindari kerja di file yang sama bersamaan.
- Gunakan tab **Issues** di GitHub untuk mencatat tugas dan pembagian kerja.

---

## 🗂️ Struktur Folder 

```
Project-PROGNET/
│
├── assets/           # Gambar, ikon, CSS, dll.
│      ├── css        
│      ├── js
│      ├── img
│      └── font
├── README.md
├── index.html
└── .gitignore
```
