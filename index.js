// Create the darkMode variable
let darkMode;

// Check that the page is loaded
document.addEventListener('DOMContentLoaded', function() {

    // If local storage item is false, then choose light mode settings
    if (localStorage.getItem("darkMode") == "false") {
        darkMode = false;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.getElementById("lighting").innerHTML = "Toggle Dark Mode";
        document.querySelectorAll(".nav-link").forEach(element => {
            element.style.color = "#194BF8";})
    }

    // Else, choose dark mode settings
    else {
        darkMode = true;
        document.querySelector("body").style.backgroundColor = "#555555";
        document.querySelector("body").style.color = "#F5F5F5";
        document.getElementById("lighting").innerHTML = "Toggle Light Mode";
        document.querySelectorAll(".nav-link").forEach(element => {
            element.style.color = "#19E2F8";})
    }


    // If the toggle lighting button is clicked, call the toggleLighting function
    document.getElementById("lighting").onclick = function() {toggleLighting()};
    function toggleLighting() {

        // If darkMode variable true: set darkMode false, set local storage item false, choose light mode settings
        if (darkMode) {
            darkMode = false
            localStorage.setItem("darkMode", "false");
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";
            document.getElementById("lighting").innerHTML = "Toggle Dark Mode";
            document.querySelectorAll(".nav-link").forEach(element => {
                element.style.color = "#194BF8";})
        }

        // Else: set darkMode true, set local storage item true, choose dark mode settings
        else {
            darkMode = true
            localStorage.setItem("darkMode", "true");
            document.querySelector("body").style.backgroundColor = "#555555";
            document.querySelector("body").style.color = "#F5F5F5";
            document.getElementById("lighting").innerHTML = "Toggle Light Mode";
            document.querySelectorAll(".nav-link").forEach(element => {
                element.style.color = "#19E2F8";})
        }
    }
})