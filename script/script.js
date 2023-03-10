function query() {
    if (window.innerWidth >=768) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    } 
}
function clickmenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}
