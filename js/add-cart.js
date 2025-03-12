document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTotal = document.querySelector(".cart-total");

    cartContainer.innerHTML = ""; // clear static items items

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <li class="list-group-item text-center p-5 shadow rounded-4">
                <h6 class="mb-3">There are no items in this cart.</h6>
                <a href="/index.html" class="btn btn-outline-purple">Continue Shopping</a>
            </li>
        `;
    } else {
        cart.forEach(product => {
            let cartItem = document.createElement("li");
            cartItem.classList.add("list-group-item", "d-flex", "align-items-center", "p-0", "shadow", "rounded-4");

            cartItem.innerHTML = `
                <img src="${product.img}" alt="${product.name}" class="img-fluid rounded-4" style="width: 120px;">
                <div class="ms-4 flex-grow-1">
                    <h6 class="mb-2 text-secondary">${product.name}</h6>
                    <p class="badge bg-secondary-subtle rounded-4 py-1 px-2">${product.price}</p>
                </div>

                <div class="d-flex gap-4 me-4">
                    <div class="d-flex flex-column">
                        <label class="text-muted mb-1">Quantity</label>
                        <input type="number" class="form-control cart-quantity" value="${product.quantity}" min="1" data-name="${product.name}">
                    </div>
                    <div class="d-flex flex-column">
                        <label class="text-muted mb-1">Total Amount</label>
                        <p class="badge bg-secondary-subtle rounded custom-p fw-bold cart-total">
                            ₱${(parseFloat(product.price.replace("₱", "")) * product.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>

                <div class="px-3 py-5 border-start">
                    <button type="button" class="btn-close remove-item" data-name="${product.name}" aria-label="Remove Item"></button>
                </div>
            `;

            cartContainer.appendChild(cartItem);
        });

        // update quantity and remove items
        document.querySelectorAll(".cart-quantity").forEach(input => {
            input.addEventListener("input", function () {
                let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
                let item = updatedCart.find(p => p.name === this.dataset.name);

                if (item) {
                    item.quantity = Math.max(1, parseInt(this.value) || 1);
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    location.reload(); // refresh 
                }
            });
        });
        

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
                updatedCart = updatedCart.filter(p => p.name !== this.dataset.name);

                localStorage.setItem("cart", JSON.stringify(updatedCart));
                location.reload(); // refresh
            });
        });
    }
});
