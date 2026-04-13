async function loadGroup() {
  try {
    const res = await fetch("/api/group");
    const data = await res.json();

    document.getElementById("groupName").innerText = data.name;
    document.getElementById("memberCount").innerText = data.members.length;

    const list = document.getElementById("memberList");
    list.innerHTML = "";

    data.members.forEach(user => {
      const li = document.createElement("li");
      li.innerText = user;
      list.appendChild(li);
    });

  } catch (err) {
    console.log("Error:", err);
  }
}

// polling tiap 5 detik
setInterval(loadGroup, 5000);
loadGroup();