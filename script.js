let panels = document.querySelectorAll(".panel");
console.log(panels)

function toggleActive(e) {
    this.classList.toggle('open');
    this.classList.toggle('open-active');

    panels.forEach(panel => {
        if (panel !== this) {
            panel.classList.remove('open')
        }
    })
}

function name(e) {
    panels.forEach(panel => {
        if (e.property) {
            panel.classList.remove('open')
        }
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleActive)
    panel.addEventListener('transitionend', toggleActive)
})
// return activePanel