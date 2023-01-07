var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var largeContainer = document.querySelector(".container");


menuIcon.onclick = () => {
    sideBar.classList.toggle("small-sidebar");
    largeContainer.classList.toggle("large-container");
}