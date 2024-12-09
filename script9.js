const orderButtons = document.querySelectorAll('.orderButton');
const cartItems = document.getElementById('cartItems');

let cart = {};

function addToCart(productName) {
    if (cart[productName]) {
        cart[productName] += 1;
    } else {
        cart[productName] = 1;
    }

    updateCartDisplay();
}

function removeFromCart(productName) {
    delete cart[productName];
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItems.innerHTML = '';

    for (const product in cart) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product}</td>
            <td>${cart[product]}</td>
            <td><button class="removeButton" data-product="${product}">Видалити</button></td>
        `;
        cartItems.appendChild(row);
    }

    document.querySelectorAll('.removeButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.product;
            removeFromCart(productName);
        });
    });
}

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        addToCart(productName);
    });
});
