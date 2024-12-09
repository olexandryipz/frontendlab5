document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('active');
    });
});
