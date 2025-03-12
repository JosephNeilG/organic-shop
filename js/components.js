function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load components
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("sidebar", "components/sidebar.html");
    loadComponent("navbar", "components/navbar.html");
    loadComponent("search-cart", "components/search-cart.html");
});