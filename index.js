// Theme functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeText = document.querySelector('.theme-text');
    themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.menu-links a');

function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

hamburgerMenu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// Text animation
let words = [];

fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words = data.words;
        startTextAnimation();
    })
    .catch(err => console.error('Error loading words:', err));

function startTextAnimation() {
    let index = 0;
    if (words.length > 0) {
        document.getElementById("changing-text").textContent = words[index];
    }
    setInterval(() => {
        if (words.length > 0) {
            index = (index + 1) % words.length;
            document.getElementById("changing-text").textContent = words[index];
        }
    }, 3000);
}

async function updateChessRatings() {
    try {
        const url = "https://nameless-mode-9239.aswinkrishna2923.workers.dev/";
        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("rapid-rating").textContent =
            data.chess_rapid?.last?.rating ?? "N/A";

        document.getElementById("blitz-rating").textContent =
            data.chess_blitz?.last?.rating ?? "N/A";

        document.getElementById("bullet-rating").textContent =
            data.chess_bullet?.last?.rating ?? "N/A";

    } catch (err) {
        console.error(err);
    }
}

updateChessRatings();
