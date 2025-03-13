function updateCartCount() {
    let cartData = localStorage.getItem("cart");
    let cart = cartData ? cartData.split(";").filter(item => item.trim() !== "") : [];
    let totalUniqueItems = cart.length;

    let cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = `(${totalUniqueItems})`;
    }
}


// function to load reusable components
function loadComponent(id, file, callback = null) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); 
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// load all components
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("sidebar", "components/sidebar.html");
    loadComponent("navbar", "components/navbar.html", function () {
        setupNavbarEventListeners(); 
    });
    loadComponent("search-cart", "components/search-cart.html", function () {
        updateCartCount(); 
    });
});
