const image = document.getElementById('image');
const button = document.getElementById('toggleSize');

button.addEventListener('click', () => {
    image.classList.toggle('enlarged');
});
