let panels = document.querySelectorAll(".panel");
console.log(panels)

function toggleActive(e) {
    this.classList.toggle('open');
    this.classList.toggle('open-active');

    panels.forEach(panel => {
        if (panel !== this) {
            panel.classList.remove('open')
            panel.classList.remove('open-active')
        }
    })
}

function removeClass(e) {
    panels.forEach(panel => {
        if (e.propertyName.includes('flex')) {
            panel.classList.remove('open')
        }
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleActive)
    panel.addEventListener('click', removeClass)
    // panel.addEventListener('transitionend', toggleActive)
})
// return activePan