const socket = io("http://localhost:3000");

// UPDATE DATA GROUP
socket.on("groupData", (data) => {
  document.getElementById("groupName").innerText = data.name;
  document.getElementById("memberCount").innerText = data.members.length;

  const list = document.getElementById("memberList");
  list.innerHTML = "";

  data.members.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user;
    list.appendChild(li);
  });
});

// ONLINE COUNT (FAKE / REAL)
socket.on("onlineCount", (count) => {
  document.getElementById("onlineCount").innerText = count;
});