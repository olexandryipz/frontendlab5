const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedEmailsDiv = document.getElementById('selectedEmails');

const updateSelectedEmails = () => {
    const selectedEmails = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    selectedEmailsDiv.textContent = selectedEmails.length
        ? selectedEmails.join(', ')
        : 'No emails selected';
};

checkboxes.forEach(checkbox =>
    checkbox.addEventListener('change', updateSelectedEmails)
);
