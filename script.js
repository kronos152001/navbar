// script.js

// JavaScript for toggling the menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    var menu = document.querySelector('.menu');
    if (event.target.className !== 'menu-toggle' && event.target.className !== 'menu' && menu.style.display === 'block') {
        menu.style.display = 'none';
    }
};

