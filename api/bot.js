// KIRIM PESAN DARI VERCEL
app.post("/send-message", async (req, res) => {
  try {
    const { to, text } = req.body;

    await sock.sendMessage(to, { text });

    res.json({ status: "success" });
  } catch (err) {
    res.json({ status: "error", error: err.toString() });
  }
});

// AMBIL GROUP
app.get("/groups", async (req, res) => {
  try {
    const groups = await sock.groupFetchAllParticipating();

    const data = Object.values(groups).map(g => ({
      name: g.subject,
      id: g.id
    }));

    res.json(data);
  } catch {
    res.json([]);
  }
});

// STATUS BOT
app.get("/status", (req, res) => {
  res.json({
    status: sock ? "online" : "offline"
  });
});

app.listen(3000, () => console.log("🚀 Bot API Running"));