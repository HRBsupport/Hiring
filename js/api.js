const API = "https://backend-kamu.up.railway.app";

// KIRIM PESAN
async function sendMessage() {
  const target = document.getElementById("target").value;
  const message = document.getElementById("message").value;

  if (!target || !message) {
    alert("Isi data dulu!");
    return;
  }

  await fetch(API + "/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: target,
      text: message
    })
  });

  alert("Pesan terkirim 🚀");
}

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