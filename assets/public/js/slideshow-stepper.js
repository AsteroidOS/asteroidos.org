document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.getElementById("slideshow");
    if (!slideshow) return; // Exit if slideshow element doesn't exist
    
    const wrapper = slideshow.querySelector(".slide-wrapper");
    if (!wrapper) return; // Exit if slide-wrapper doesn't exist
    
    const images = wrapper.children;
    if (images.length < 2) return; // Need at least 2 images for scrolling
    
    const first = images[0];
    const second = images[1];

    const imageWidth = second.offsetLeft - first.offsetLeft;

    const totalImages = images.length;

    // Clone images once for seamless looping
    // Convert HTMLCollection to array to avoid issues with live collection during iteration
    const imageArray = Array.from(images);
    for (let i = 0; i < totalImages; i++) {
        wrapper.appendChild(imageArray[i].cloneNode(true));
    }

    let index = 0;

    const slideDuration = 400;   // ms (movement speed)
    const pauseDuration = 2000;  // ms (pause per image)

    function step() {
        index++;

        wrapper.style.transition = `transform ${slideDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
        wrapper.style.transform = `translateX(-${index * imageWidth}px)`;

        setTimeout(() => {
            // If we've reached original set length, reset instantly
            if (index >= totalImages) {
                wrapper.style.transition = "none";
                wrapper.style.transform = "translateX(0)";
                index = 0;
            }
        }, slideDuration);
    }

    // Initial pause before starting
    setTimeout(() => {
        setInterval(step, slideDuration + pauseDuration);
    }, pauseDuration);
});
