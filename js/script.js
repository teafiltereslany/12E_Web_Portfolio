// Mobil menü animáció
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        mobileMenu.style.left = '0';
        menuOpen = true;
    } else {
        mobileMenu.style.left = '-100%';
        menuOpen = false;
    }
});