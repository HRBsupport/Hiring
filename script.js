// Header & Footer Auto Load
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const sidebar = document.getElementById("sidebar");
  const footer = document.getElementById("footer");

  if (header) {
    header.innerHTML = `
      <div class="logo">OneDev</div>
      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="karir.html">Karir</a>
        <a href="tentang.html">Tentang</a>
        <a href="kontak.html">Kontak</a>
        <button class="btn">Lamar Sekarang</button>
      </nav>
      <button class="menu-btn" id="menuBtn">☰</button>
    `;
  }

  if (sidebar) {
    sidebar.innerHTML = `
      <button class="close-btn" id="closeSidebar">×</button>
      <a href="index.html">Home</a>
      <a href="karir.html">Karir</a>
      <a href="tentang.html">Tentang</a>
      <a href="kontak.html">Kontak</a>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <p>© 2025 <strong>OneDev</strong>. All rights reserved.</p>
      <p>Designed & Developed by 
        <a href="https://onedevofficial.vercel.app" target="_blank">OneDev Official</a>
      </p>
    `;
  }

  // Sidebar toggle
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebarEl = document.getElementById("sidebar");

  if (menuBtn && sidebarEl) {
    menuBtn.addEventListener("click", () => sidebarEl.classList.add("active"));
  }
  if (closeBtn && sidebarEl) {
    closeBtn.addEventListener("click", () => sidebarEl.classList.remove("active"));
  }
});