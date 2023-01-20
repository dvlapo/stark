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

const playButton = document.querySelector("#play-button");
const iframe = document.querySelector("iframe");
const placeholderImage = document.querySelector(".placeholder-image");

playButton.addEventListener("click", playVideo);

function playVideo() {
    // placeholderImage.style.zIndex = "-2";
    iframe.style.visibility = "visible";
    iframe.style.zIndex = "2";
    iframe.allow = "autoplay";
}
