let darkMode;

document.addEventListener('DOMContentLoaded', function() {

    if (localStorage.getItem("darkModeOff") == "true") {
        darkMode = false;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.getElementById("lighting").innerHTML = "Toggle Dark Mode";
        document.querySelectorAll(".nav-link").forEach(element => {
            element.style.color = "#194BF8";})
    }
    else {
        darkMode = true;
        document.querySelector("body").style.backgroundColor = "#555555";
        document.querySelector("body").style.color = "#F5F5F5";
        document.getElementById("lighting").innerHTML = "Toggle Light Mode";
        document.querySelectorAll(".nav-link").forEach(element => {
            element.style.color = "#19E2F8";})
    }


    document.getElementById("lighting").onclick = function() {toggleLighting()};
    function toggleLighting() {
        if (darkMode) {
            darkMode = false
            localStorage.setItem("darkModeOff", "true");
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";
            document.getElementById("lighting").innerHTML = "Toggle Dark Mode";
            document.querySelectorAll(".nav-link").forEach(element => {
                element.style.color = "#194BF8";})
        }
        else {
            darkMode = true
            localStorage.setItem("darkModeOff", "false");
            document.querySelector("body").style.backgroundColor = "#555555";
            document.querySelector("body").style.color = "#F5F5F5";
            document.getElementById("lighting").innerHTML = "Toggle Light Mode";
            document.querySelectorAll(".nav-link").forEach(element => {
                element.style.color = "#19E2F8";})
        }
    }
})