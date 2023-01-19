const menuButton = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const heroSection = document.querySelector(".hero");

menuButton.addEventListener("click", () => {
    const currentState = menuButton.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        menuButton.setAttribute("data-state", "opened");
        menuButton.setAttribute("aria-expanded", "true");
        mobileMenu.classList.add("opened");
    } else {
        menuButton.setAttribute("data-state", "closed");
        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("opened");
    }
});
