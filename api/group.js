export default async function handler(req, res) {

  // contoh dummy (nanti bisa dari DB / bot)
  const data = {
    name: "Shinigami Group",
    members: [
      "6281234567890",
      "6289876543210"
    ]
  };

  res.status(200).json(data);
}