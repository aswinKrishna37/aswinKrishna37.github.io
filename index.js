// Theme functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeText = document.querySelector('.theme-text');
    themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
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
const words = ["am learning Web Development","am an ISTP","do some Python programming","am Iron Man"];
let index = 0;

setInterval(() => {
    index = (index + 1) % words.length;
    document.getElementById("changing-text").textContent = words[index];
}, 3000);

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
