let panels = document.querySelectorAll(".panels");

function toggleActive() {
    this.classList.toggle('.open');
    this.classList.toggle('.open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleActive))
// return activePanel