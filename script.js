document.addEventListener("DOMContentLoaded", () => {
  // Inject header, sidebar, and footer
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
      <nav class="sidebar-nav">
        <a href="index.html">Home</a>
        <a href="karir.html">Karir</a>
        <a href="tentang.html">Tentang</a>
        <a href="kontak.html">Kontak</a>
      </nav>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <p>© 2025 <strong>OneDev</strong>. All rights reserved.</p>
      <p>Designed & Developed by 
        <a href="https://onedevofficial.vercel.app" target="_blank" rel="noopener">
          OneDev Official
        </a>
      </p>
    `;
  }

  // Tunggu elemen ter-load dulu sebelum aktifkan toggle
  setTimeout(() => {
    const menuBtn = document.getElementById("menuBtn");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebarEl = document.getElementById("sidebar");

    if (menuBtn && sidebarEl) {
      menuBtn.addEventListener("click", () => {
        sidebarEl.classList.add("active");
        document.body.classList.add("no-scroll");
      });
    }

    if (closeSidebar && sidebarEl) {
      closeSidebar.addEventListener("click", () => {
        sidebarEl.classList.remove("active");
        document.body.classList.remove("no-scroll");
      });
    }

    // Klik area luar sidebar untuk menutup
    window.addEventListener("click", (e) => {
      if (e.target === sidebarEl) {
        sidebarEl.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  }, 100);
});