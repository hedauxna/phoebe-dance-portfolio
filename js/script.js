let currentIndex = 0;
const images = document.querySelectorAll('.gallery img'); // Select all images in the gallery
const lightbox = document.getElementById('lightbox'); // Get the lightbox container
const lightboxImg = document.getElementById('lightbox-img'); // Get the image element within the lightbox

// Function to open the lightbox and set the image
function openLightbox(img) {
    currentIndex = Array.from(images).indexOf(img); // Find the index of the clicked image
    lightboxImg.src = img.src; // Set the lightbox image source to the clicked image's source
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});

// Function to navigate between images in the lightbox
function changeImage(direction) {
    currentIndex += direction; // Update the index based on direction (+1 or -1)

    // If the index is out of bounds, loop around to the other end
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Go to the last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Go to the first image
    }

    lightboxImg.src = images[currentIndex].src; // Update the lightbox image
}
