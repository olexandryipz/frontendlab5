const sliders = document.querySelectorAll('input[type="range"]');
const box = document.getElementById('box');

function updateBox() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const rotation = document.getElementById('rotation').value;

    document.getElementById('widthValue').textContent = width;
    document.getElementById('heightValue').textContent = height;
    document.getElementById('rotationValue').textContent = rotation;

    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.transform = `rotate(${rotation}deg)`;
}

sliders.forEach(slider => slider.addEventListener('input', updateBox));

updateBox();
