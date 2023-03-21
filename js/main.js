// Mobile menu
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

// Video
const playButton = document.querySelector("#play-button");
const iframe = document.querySelector("iframe");
const placeholderImage = document.querySelector(".placeholder-image");

placeholderImage.addEventListener("click", playVideo);

function playVideo() {
    iframe.style.visibility = "visible";
    iframe.style.zIndex = "2";
}

// Infinite scroll
const scrollContainer = document.querySelector(".companies-scroll-container");
const scrollContainerWidth = scrollContainer.getBoundingClientRect().width;
const scrollEl = document.querySelector(".scroll");

scrollEl.style.setProperty("--width", `-${scrollContainerWidth + 83}px`);

// Animate on Scroll
const animateOnScroll = document.querySelectorAll(".animate-on-scroll");

window.addEventListener("scroll", checkIntersection);

checkIntersection();

function checkIntersection() {
    const triggerBottom = window.innerHeight * 0.7;

    animateOnScroll.forEach((anim) => {
        const top = anim.getBoundingClientRect().top;

        if (top < triggerBottom) {
            anim.classList.add("in-view");
        } else {
            anim.classList.remove("in-view");
        }
    });
}
