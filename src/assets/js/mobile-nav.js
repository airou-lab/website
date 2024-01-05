const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        // Hide the menu
        menu.classList.remove("showMenu");
        menu.classList.add("hideMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        // Show the menu
        menu.classList.remove("hideMenu");
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}