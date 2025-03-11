function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("sidebar", "components/sidebar.html");
    loadComponent("navbar", "components/navbar.html", function () {
        fetch("components/modals.html")
            .then(response => response.text())
            .then(modalData => {
                document.body.insertAdjacentHTML("beforeend", modalData);
            })
            .catch(error => console.error("Error loading modals:", error));
    });
    loadComponent("search-cart", "components/search-cart.html");
});
