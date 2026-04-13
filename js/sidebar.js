document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("sidebar").innerHTML = `
    <div class="sidebar" id="side">
      <h2>⚔️ Shinigami</h2>
      <a href="/index.html">🏠 Home</a>
      <a href="/pages/dashboard.html">📊 Dashboard</a>
      <a href="/pages/group.html">👥 Group</a>
      <a href="/group/shinigami.html">📌Group Community</a>
      <a href="/pages/about.html">📖 About</a>
    </div>
  `;

  const side = document.getElementById("side");
  const btn = document.getElementById("menuBtn");

  btn.addEventListener("click", () => {
    side.classList.toggle("active");
  });

});