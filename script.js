 // NO button movement
function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

// Firecrackers on proposal page
if (window.location.pathname.includes("proposal.html")) {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const fire = document.createElement("div");
      fire.className = "fire";
      fire.innerHTML = "🎆";
      fire.style.left = Math.random() * 100 + "vw";
      fire.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(fire);

      setTimeout(() => fire.remove(), 1800);
    }, i * 120);
  }
}
