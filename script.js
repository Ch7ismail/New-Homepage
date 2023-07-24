const Menu = document.getElementById('menu');
const openMenu = document.getElementById('open-btn');
const closeMenu = document.getElementById('close-btn');

openMenu.addEventListener("click", (event) => {
    menu.style.display='block';
});

closeMenu.addEventListener("click", (event) => {
    menu.style.display='none';
});