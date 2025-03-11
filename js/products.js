const products = [
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },

    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },

    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
    { name: "Fruits", price: "$10.00", img: "assets/img/sample1.webp", rating: 4 },
];

const productContainer = document.getElementById("product-grid");
let productGridHTML = "";

products.forEach(product => {
    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);

    productGridHTML += `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="card-title mb-0">${product.name}</h6>
                            <span class="fw-bold">${product.price}</span>
                        </div>
                        <div class="text-warning">${stars}</div>
                    </div>
                </div>
            </div>
        `;
});

productContainer.innerHTML = productGridHTML;
