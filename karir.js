document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const popup = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");
  const positionInput = document.getElementById("position");
  const form = document.getElementById("applyForm");

  applyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const job = btn.dataset.job;
      positionInput.value = job;
      popup.classList.add("active");
    });
  });

  closePopup.addEventListener("click", () => popup.classList.remove("active"));

  // Kirim ke Discord Webhook
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const position = document.getElementById("position").value;
    const message = document.getElementById("message").value.trim();

    const payload = {
      embeds: [
        {
          title: "💼 Lamaran Baru Diterima",
          color: 3447003,
          fields: [
            { name: "👤 Nama", value: name, inline: true },
            { name: "📧 Email", value: email, inline: true },
            { name: "📌 Posisi", value: position, inline: false },
            { name: "📝 Pesan", value: message, inline: false },
          ],
          footer: { text: "OneDev Hiring Portal" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch("https://discord.com/api/webhooks/1437685779878121557/0RNvPRCN_msrqd9NbFv61lOdMzw-3TwUBdCi0rOsOTAjDm6TG9qBeGxHSR8H2oAj8uSu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Lamaran berhasil dikirim!");
        form.reset();
        popup.classList.remove("active");
      } else {
        alert("Gagal mengirim lamaran ke Discord.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan saat mengirim lamaran.");
    }
  });
});