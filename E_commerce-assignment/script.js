// I have added comments for each function for better clarification

// Sample product data 
const products = [
    { id: 1, name: "Product 1", price: 19.99, src:"asset/product-1.webp" },
    { id: 2, name: "Product 2", price: 24.99, src:"asset/product-2.avif" },
    { id: 3, name: "Product 3", price: 19.99, src:"asset/product-1.webp" },
    { id: 4, name: "Product 4", price: 19.99, src:"asset/product-1.webp" },
    { id: 5, name: "Product 5", price: 19.99, src:"asset/product-1.webp" },
    { id: 6, name: "Product 6", price: 19.99, src:"asset/product-1.webp" },
    { id: 7, name: "Product 7", price: 19.99, src:"asset/product-1.webp" }
    
];

let cart = [];

// Function to display products on the page
function displayProducts() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = ""; 
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        
        productDiv.innerHTML = `
            <img src="${product.src}" alt="Product Image">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        mainContent.appendChild(productDiv);
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// update cart function
function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartCount.textContent = cart.length;
    cartItemsList.innerHTML = "";
    
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
    
    // Display cart modal
    cartModal.style.display = "block";
}

// close function
function closeCartModal() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";
}

// Checkout function
function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
    closeCartModal();
}

// Close cart when clicked out
window.onclick = function(event) {
    const cartModal = document.getElementById("cart-modal");
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
};


displayProducts();
