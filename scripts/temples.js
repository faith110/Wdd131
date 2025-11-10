// Footer dynamic content
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
        hamburger.textContent = '\u2630'; // hamburger icon
    } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        hamburger.textContent = '\u2715'; // X to close
    }
});
