const API = "https://backend-kamu.up.railway.app";

// STATUS BOT
async function checkStatus() {
  const res = await fetch(API + "/status");
  const data = await res.json();

  const el = document.getElementById("botStatus");
  if (el) el.innerText = data.status.toUpperCase();
}


await fetch(API + "/send-message", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "shinigami123"
  },
  body: JSON.stringify({
    to: number,
    text: message
  })
});

// LOAD GROUP
async function loadGroups() {
  const res = await fetch(API + "/groups");
  const data = await res.json();

  const container = document.getElementById("groupContainer");
  if (!container) return;

  container.innerHTML = "";

  data.forEach(g => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${g.name}</h3>
      <p>${g.id}</p>
    `;

    container.appendChild(div);
  });
}

// AUTO LOAD
checkStatus();
loadGroups();