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