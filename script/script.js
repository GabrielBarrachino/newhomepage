const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const closeMenuOverlay = document.getElementById('closeMenuOverlay');

function abrirMenu(){
    document.documentElement.classList.add('menuOpened')
}

function fecharMenu(){
    document.documentElement.classList.remove('menuOpened')
}

function fecharMenuOverlay(){
    document.documentElement.classList.remove('menuOpened')
}

openMenu.addEventListener('click', abrirMenu);
closeMenu.addEventListener('click', fecharMenu);
closeMenuOverlay.addEventListener('click', fecharMenuOverlay);