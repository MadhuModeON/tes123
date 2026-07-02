let poin = 0
let cost1 = 100
let cost2 = 1200
let perklik = 1
let mult1 = 1
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
tips = [
  "1 klik per hari menjauhkanmu dari kemiskinan digital",
  "I came, i saw, i clicked",
  "Jangan percaya semua tips. kecuali yang ini",
  "Semua tips ada makna nya percayalah pada mereka",
  "99% player berhenti sebelum mengeklik lagi",
  "'Imajinasi lebih penting daripada pengetahuan. Tapi klik lebih penting daripada keduanya'- Albert Einstein",
  "Rumput itu nyata, tapi klik lebih nyata",
  "Ayo makan 4 klik 5 sempurna",
  "0.01% player menyadari bahwa ini hanya membuang waktu. mereka tidak pernah terlihat lagi",
  "Selamat, anda telah mengubah listrik menjadi angka!",
  "kamu bisa belajar fisika kuantum, tapi kamu memilih ini",
  "Para ilmuan menemukan bahwa game ini membuang waktu. Mereka tetap memainkannya",
  "lv.1 kliker noob VS lv.100 kliker boss",
  "Klik adalah rumahnya, tapi UPGRADE adalah fondasinya",
  "Tips berikutnya sedang diproses, mohon tunggu",
  "Subaru naik tangga karena aura, sedangkan aku ingin ke kelas",
  "Setiap klik membawamu lebih dekat ke klik berikutnya",
  "CPU-mu bekerja keras untuk menampilkan angka",
  "Mungkin harta karun yang sebenarnya adalah klik yang kita kumpulkan sepanjang perjalanan",
  "Aku di tabrak truk dan muncul di dunia lain dengan +999 klik system lalu jadi raja seluruh multiverse",
  "di hari itu saya dilahirkan kembali untuk klik",
  "Aura setelah klik: 1+ 1+ 1+ 1+",
  "BBM mungkin naik, tapi klik mu lebih naik"
]
ftips()

function klik() {
  let total1 = perklik * mult1
  poin += total1
  document.getElementById("textpoin").innerText = "poin: " + poin
}


//-------TIPS----------------------------------------------
async function fadeOut(el) {
  for (let i = 100; i >= 0; i--) {
    el.style.opacity = i / 100;
    await wait(10);
  }
}
async function fadeIn(el) {
  for (let i = 0; i <= 100; i++) {
    el.style.opacity = i / 100;
    await wait(10);
  }
}
async function ftips() {
  const tip = document.getElementById("tip")
  while (true) {
    const rtip = tips[Math.floor(Math.random() * tips.length)];
    await wait(1000);
    await fadeOut(tip);
    document.getElementById("tip").innerText = rtip;
    await fadeIn(tip);

  }
}
//----------TIPS-------------------------------------

function update() {
  document.getElementById("textpoin").innerText = "poin: " + poin
}
function up1() {
  if (poin >= cost1) {
    poin -= cost1;
    cost1 += 100
    perklik += 1;
  }
}

function up2() {
  if (poin >= cost2) {
    poin -= cost2;
    cost2 *= 2;
    mult += 1;
  }
}