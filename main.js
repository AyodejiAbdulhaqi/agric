// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Carousel
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let offset = 0;
const cardWidth = 260; // includes margin

prevBtn.addEventListener("click", () => {
    offset += cardWidth;
    if (offset > 0) offset = -(carousel.scrollWidth - carousel.clientWidth);
    carousel.style.transform = `translateX(${offset}px)`;
});

nextBtn.addEventListener("click", () => {
    offset -= cardWidth;
    if (Math.abs(offset) > carousel.scrollWidth - carousel.clientWidth) offset = 0;
    carousel.style.transform = `translateX(${offset}px)`;
});

// Cart (save in localStorage)
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({name, price, qty: 1});
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart`);
}
