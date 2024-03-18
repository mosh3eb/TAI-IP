let currentImage = 0;
const images = document.querySelectorAll('.imgs img');
const totalImages = images.length;

function displayImage(imageIndex) {
    if (imageIndex < 0) {
        currentImage = totalImages - 1;
    } else if (imageIndex >= totalImages) {
        currentImage = 0;
    } else {
        currentImage = imageIndex;
    }

    images.forEach(image => {
        image.style.display = 'none';
    });

    images[currentImage].style.display = 'block';
}

function showNext() {
    displayImage(currentImage + 1);
}

function showPrevious() {
    displayImage(currentImage - 1);
}

displayImage(currentImage);
