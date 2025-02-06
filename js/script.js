const bars = document.querySelector(".bars-icon");
const navBtns = document.querySelector(".nav-btns");
let menuOpen = false;

bars.addEventListener('click', function() {
    if (menuOpen == false) {
        navBtns.style.display = "block";
        menuOpen = true;
    } else if (menuOpen == true) {
        navBtns.style.display = "none";
        menuOpen = false;
    }
});