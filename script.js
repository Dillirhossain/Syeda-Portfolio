const artCards = document.querySelectorAll(".art-card img");
const lightbox = document.getElementById("artLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("lightboxClose");
const prevButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");

let currentIndex = 0;

artCards.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("active");
    });
});

function showImage(index) {
    if (index < 0) {
        currentIndex = artCards.length - 1;
    } else if (index >= artCards.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    lightboxImage.src = artCards[currentIndex].src;
    lightboxImage.alt = artCards[currentIndex].alt;
}

prevButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

closeButton.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }
});