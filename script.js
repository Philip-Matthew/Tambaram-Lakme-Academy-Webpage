// Select the hamburger menu and navigation links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navRight = document.querySelector('.nav-right');

// Function to toggle the visibility of the navigation links
function toggleMenu() {
    navRight.classList.toggle('active');
}

// Toggle the visibility of nav links when hamburger menu icon is clicked
hamburgerMenu.addEventListener('click', function() {
    toggleMenu();
});

// Hide the menu when a link is clicked
navRight.addEventListener('click', function() {
    toggleMenu();
});
