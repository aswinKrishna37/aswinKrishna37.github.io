window.onload = function() {
    const element = document.getElementById("main-text");
    // Initially hide the element
    element.style.display = "none"; 

    // After 1 second, show the element and set its opacity
    setTimeout(function() {
        element.style.display = "block";
        setTimeout(function() {
            element.style.opacity = 1; // Fade-in effect
        }, 10);
    }, 1000);
};

function toggleTheme() {
    let body = document.getElementById("body");
    let text = document.getElementById("main-text");
    let image = document.getElementById("mspaint-aswin");
    let button = document.getElementById("themeButton");

    if (button.innerText === "Light") {
        body.style.backgroundColor = 'black';
        text.style.color = 'white';
        image.src = '/IMAGES/mspaint_aswin.png'; // Update with the correct path
        button.innerText = 'Dark';
    } else {
        body.style.backgroundColor = 'rgb(169, 218, 218)';
        text.style.color = 'rgb(0, 0, 87)';
        image.src = '/IMAGES/mspaint_aswin.png'; // Update with the correct path
        button.innerText = 'Light';
    }
}

if (window.innerWidth < 768) {
    window.location.href = "/Mobile/mobile.html"; // your mobile version
  }
