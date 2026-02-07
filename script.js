 function goYes() {
  window.location.href = "story.html";
}

function moveNo() {
  const noBtn = document.querySelector(".no");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}
