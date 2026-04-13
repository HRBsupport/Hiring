const sidebarHTML = `
  <div class="sidebar" id="side">
    <h2>⚔️ Shinigami</h2>
    <a href="/index.html">🏠 Home</a>
    <a href="/pages/dashboard.html">📊 Dashboard</a>
  </div>
`;

document.getElementById('sidebar').innerHTML = sidebarHTML;

function toggleSidebar() {
  document.getElementById('side').classList.toggle('active');
}