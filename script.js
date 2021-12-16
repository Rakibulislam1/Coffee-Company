const btn = document.getElementById('menu_btn')
const nav = document.getElementById('menu')
function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no_scroll')
}

btn.addEventListener('click', navToggle)