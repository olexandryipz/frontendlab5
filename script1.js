document.getElementById('showSelected').addEventListener('click', () => {
    const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    document.getElementById('selectedValues').textContent = selected.length
        ? selected.join(', ')
        : 'Нічого не обрано';
});
