document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const header = document.querySelector(".header");

    burger.addEventListener("click", function() {
        header.classList.toggle("open");

        const isOpen = header.classList.contains("open");
        burger.setAttribute("aria-expanded", isOpen);
    });
});

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        const burger = document.getElementById("burger");
        const header = document.querySelector(".header");

        header.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
    }
});