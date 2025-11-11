document.addEventListener("DOMContentLoaded", () => {
  // Header
  const header = document.getElementById("header");
  header.innerHTML = `
    <div class="logo">OneDev</div>
    <nav class="nav-links">
      <a href="index.html">Home</a>
      <a href="karir.html">Karir</a>
      <a href="tentang.html">Tentang</a>
      <a href="kontak.html">Kontak</a>
    </nav>
    <button class="menu-btn" id="menuBtn">☰</button>
  `;

  // Sidebar
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("sidebar");
  sidebar.innerHTML = `
    <button class="close-btn" id="closeSidebar">×</button>
    <a href="index.html">Home</a>
    <a href="karir.html">Karir</a>
    <a href="tentang.html">Tentang</a>
    <a href="kontak.html">Kontak</a>
  `;

  // Footer
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <p>© 2025 <strong>OneDev</strong>. All rights reserved.</p>
    <p>Designed & Developed by 
      <a href="https://onedevofficial.vercel.app" target="_blank" rel="noopener">
        OneDev Official
      </a>
    </p>
  `;

  // Sidebar toggle logic
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeSidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});