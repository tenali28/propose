// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);

// YES popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// NO button runs away 😄
function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}
