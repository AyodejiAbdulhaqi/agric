const cartContainer = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <div>
                <button onclick="updateQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="updateQty(${index}, 1)">+</button>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart();
});

renderCart();
