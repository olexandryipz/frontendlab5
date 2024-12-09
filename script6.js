document.querySelectorAll('.section').forEach(section => {
    const input = section.querySelector('input');

    if (input) {
        input.addEventListener('focus', () => section.classList.add('active'));
        input.addEventListener('blur', () => section.classList.remove('active'));
    }
});
