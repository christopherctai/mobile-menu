const hamburgerIcon = document.querySelector('.hamburger-icon'); 

hamburgerIcon.addEventListener('click', () => {
    changeMenu();
})

function changeMenu() {
    let menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('hidden'); 
}