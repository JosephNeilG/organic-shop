document.addEventListener("DOMContentLoaded", function () {
    // Get product from localStorage
    const productString = localStorage.getItem("selectedProduct");
    if (!productString) return;

    // convert pipe-separated string back to  object
    const productArray = productString.split("|");

    const product = {
        name: productArray[0],
        price: productArray[1],
        img: productArray[2],
        rating: parseInt(productArray[3]), // convert rating to a number
        description: productArray[4]
    };

    // Set main product details
    document.querySelector(".main-img").src = product.img;
    document.querySelector(".main-img").alt = product.name;
    document.querySelector(".details-container h3").textContent = product.name;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".description").textContent = product.description;

    // Generate star ratings
    const ratingContainer = document.querySelector(".rating");
    ratingContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let star = document.createElement("img");
        star.src = i < product.rating
            ? "assets/product-view-img/star-yellow.png"
            : "assets/product-view-img/star-white.png";
        ratingContainer.appendChild(star);
    }

    // Load sub-images dynamically
    const subImgContainer = document.querySelector(".sub-img-container");
    subImgContainer.innerHTML = "";

    const baseName = product.img.replace(/(\.jpeg|\.jpg|\.png)$/i, "");
    let subImages = [];

    for (let i = 1; i <= 4; i++) {
        let subImgPath = `${baseName}${i}.jpeg`;
        fetch(subImgPath, { method: "HEAD" })
            .then(response => {
                if (response.ok) {
                    let subImg = document.createElement("img");
                    subImg.classList.add("sub-img");
                    subImg.src = subImgPath;
                    subImg.alt = `${product.name} Image`;

                    subImg.addEventListener("click", () => {
                        document.querySelector(".main-img").src = subImg.src;
                    });

                    subImgContainer.appendChild(subImg);
                }
            })
            .catch(() => {});
    }

    // Update total price
    const quantityInput = document.querySelector(".quantity-input");
    const totalAmount = document.querySelector(".total-amount input");
    const price = parseFloat(product.price.replace("₱", ""));

    quantityInput.addEventListener("input", function () {
        let quantity = Math.max(1, parseInt(quantityInput.value) || 1);
        quantityInput.value = quantity;
        totalAmount.value = "₱" + (quantity * price).toFixed(2);
    });

    quantityInput.dispatchEvent(new Event("input")); 

   
    document.querySelector(".btn-add-to-cart").addEventListener("click", function (event) {
        event.preventDefault(); //stops reloading page
        
        let cart = localStorage.getItem("cart") ? localStorage.getItem("cart").split(";") : [];
        let existingIndex = cart.findIndex(item => item.startsWith(product.name + "|"));

        if (existingIndex !== -1) {
            let cartItem = cart[existingIndex].split("|");
            cartItem[5] = parseInt(cartItem[5]) + Math.max(1, parseInt(quantityInput.value) || 1);
            cart[existingIndex] = cartItem.join("|");
        } else {
            product.quantity = Math.max(1, parseInt(quantityInput.value) || 1);
            let productData = `${product.name}|${product.price}|${product.img}|${product.rating}|${product.description}|${product.quantity}`;
            cart.push(productData);
        }

        localStorage.setItem("cart", cart.join(";"));
        updateCartCount(); 
    });
});
