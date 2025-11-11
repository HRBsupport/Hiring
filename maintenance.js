// =========================================================
// 🌐 OneDev Maintenance Overlay
// =========================================================

// Tambahkan overlay ke halaman tanpa ubah HTML
const overlay = document.createElement("div");
overlay.id = "maintenance-overlay";
overlay.innerHTML = `
  <h1>🚧 OneDev Sedang Maintenance</h1>
  <p>Kami sedang menyiapkan pembaruan besar untuk meningkatkan pengalaman Anda.</p>
  
  <div class="countdown">
    <div><span id="days">00</span><label>Hari</label></div>
    <div><span id="hours">00</span><label>Jam</label></div>
    <div><span id="minutes">00</span><label>Menit</label></div>
    <div><span id="seconds">00</span><label>Detik</label></div>
  </div>

  <a href="https://onedevofficial.vercel.app" target="_blank">OneDev Official</a>
`;
document.body.appendChild(overlay);

// Hitung mundur otomatis 5 hari dari sekarang
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 5);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    overlay.classList.add("hidden");
  }
}

setInterval(updateCountdown, 1000);