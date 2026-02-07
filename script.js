 // Typing Effect
const text =
"Dear Kanna (Arun), ❤️\n" +
"Every moment with you feels special.\n" +
"My heart chose you long ago.\n";

let i = 0;
const typing = document.getElementById("typing");

function typeText() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(typeText, 70);
  }
}
typeText();

// Floating Hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);

// NO Button Movement
function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

// YES Celebration
function celebrate() {
  document.getElementById("celebration").style.display = "block";

  for (let i = 0; i < 30; i++) {
    const fire = document.createElement("div");
    fire.className = "fire";
    fire.innerHTML = "🎆";
    fire.style.left = Math.random() * 100 + "vw";
    fire.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(fire);

    setTimeout(() => fire.remove(), 1500);
  }
}

function closeCelebration() {
  document.getElementById("celebration").style.display = "none";
}
