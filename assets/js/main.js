function sendToWhatsApp() {
  const nama = document.getElementById("nama").value;
  const pesanan = document.getElementById("pesanan").value;
  const catatan = document.getElementById("catatan").value;
  const waktu = document.getElementById("waktuAmbil").value;

  if (!nama || !pesanan) {
    alert("Harap isi nama dan pesanan terlebih dahulu!");
    return;
  }

  let text = `Halo, saya ${nama}!%0ASaya ingin pesan:%0A${pesanan}`;
  if (catatan) text += `%0ACatatan: ${catatan}`;
  if (waktu) text += `%0AWaktu Ambil: ${waktu}`;
  text += `%0A%0ASaya akan ambil langsung di lokasi.`;

  const phone = "6281234567890"; // ubah ke nomor WA bisnis kamu
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
