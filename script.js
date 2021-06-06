

(() => {
    // Nav Menu
    const menu = document.querySelectorAll('i');
    const nav = document.querySelector('nav')
    const menuMobile = document.querySelector('.menu-mobile')
    menu.forEach(icon => {
        icon.addEventListener('click', () => {
            nav.classList.toggle('opened')
            menuMobile.classList.toggle('opened')
        })
})

})()