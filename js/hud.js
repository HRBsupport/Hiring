let speed = 0;

setInterval(() => {
  speed = (speed + Math.floor(Math.random() * 10)) % 180;
  document.getElementById("speed").innerText = speed;
}, 1000);