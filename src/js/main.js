const submenu = document.querySelector("#submenu");
const show = document.querySelector("#show");

show.addEventListener("click", () => {
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
})