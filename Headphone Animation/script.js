const backgrounds = document.querySelectorAll(".background");
const slider = document.querySelector(".slider-images");

const images = Array.from(slider.children);

let imageIndex = 0;

function updateSlider() {

    // Reset classes
    images.forEach((img) => {
        img.classList.remove("active", "previous", "next", "inactive");
    });

    // Active image
    images[imageIndex].classList.add("active");

    // Previous image
    const prevIndex = (imageIndex - 1 + images.length) % images.length;
    images[prevIndex].classList.add("previous");

    // Next image
    const nextIndex = (imageIndex + 1) % images.length;
    images[nextIndex].classList.add("next");

    // Inactive images
    images.forEach((img, index) => {
        if (index !== imageIndex && index !== prevIndex && index !== nextIndex) {
            img.classList.add("inactive");
        }
    });

    // Update backgrounds
    backgrounds.forEach(bg => bg.style.opacity = 0);
    if (backgrounds[imageIndex]) {
        backgrounds[imageIndex].style.opacity = 1;
    }

    // Move to next slide
    imageIndex = (imageIndex + 1) % images.length;
}

// Initialize slider
updateSlider();

// Auto slide every 3 seconds
setInterval(updateSlider, 3000);