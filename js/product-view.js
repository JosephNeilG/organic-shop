document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));



    document.querySelector(".main-img").src = product.img;
    document.querySelector(".main-img").alt = product.name;
    document.querySelector(".details-container h3").textContent = product.name;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".description").textContent = product.description;

    //  star ratings dynamic
    const ratingContainer = document.querySelector(".rating");
    ratingContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let starImg = document.createElement("img");
        starImg.src = i < product.rating ? "assets/product-view-img/star-yellow.png" : "assets/product-view-img/star-white.png";
        ratingContainer.appendChild(starImg);
    }

    // update quantity and total price
    const quantityInput = document.querySelector(".quantity-input");
    const totalAmount = document.querySelector(".total-amount input");

    quantityInput.addEventListener("input", function () {
        let quantity = parseInt(quantityInput.value) || 1;
        let price = parseFloat(product.price.replace("$", ""));
        totalAmount.value = "$" + (quantity * price).toFixed(2);
    });
});
