function openMenu() {
    document.getElementById("sidebar").style.width = "47vh";
    document.getElementById("sidebar").style.backgroundColor = "hsl(36, 100%, 99%)";
    document.getElementById("overlay").style.display = "block"; // Show overlay
}
function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Show overlay
}
