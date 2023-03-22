let panels = document.querySelectorAll(".panels");

function toggleActive() {
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener("mouseover", toggleActive))
// return activePanel