const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];

let currentIndex = 0;

const galleryContainer = document.querySelector('.gallery-container');
const imageElement = document.createElement('img');
imageElement.src = images[currentIndex];
imageElement.alt = "Image";
imageElement.classList.add('active');
galleryContainer.appendChild(imageElement);

const nextButton = document.getElementById('nextButton');

function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = document.createElement('img');
    nextImage.src = images[nextIndex];
    nextImage.alt = "Image";
    nextImage.classList.add('next');
    galleryContainer.appendChild(nextImage);

    nextImage.onload = () => {
        const currentImage = galleryContainer.querySelector('.active');

        setTimeout(() => {
            currentImage.classList.remove('active');
            nextImage.classList.remove('next');
            nextImage.classList.add('active');
        }, 50);

        currentIndex = nextIndex;

        setTimeout(() => {
            galleryContainer.removeChild(currentImage);
        }, 500);
    };
}

nextButton.addEventListener('click', showNextImage);
