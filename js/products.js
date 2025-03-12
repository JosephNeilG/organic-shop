const products = [
    {
        name: "Cranberries",
        price: "$10.00",
        img: "assets/img/fruits/Cranberries.jpeg",
        rating: 4,
        description: "Fresh and juicy cranberries."
    },
    {
        name: "Strawberries",
        price: "$10.00",
        img: "assets/img/fruits/Strawberries.jpeg",
        rating: 4,
        description: "Sweet and ripe strawberries."
    },
    {
        name: "Mixed Berries",
        price: "$10.00",
        img: "assets/img/fruits/Mixedberries.jpeg",
        rating: 4,
        description: "A delicious mix of berries."
    },
    {
        name: "Raspberries",
        price: "$10.00",
        img: "assets/img/fruits/Raspberries.jpeg",
        rating: 4,
        description: "Tart and tasty raspberries."
    },
    {
        name: "Blackcurrants",
        price: "$10.00",
        img: "assets/img/fruits/Black.jpeg",
        rating: 4,
        description: "Rich in antioxidants, perfect for smoothies."
    },
    {
        name: "Carrots",
        price: "$10.00",
        img: "assets/img/veg/BabyCarrots.jpeg",
        rating: 4,
        description: "Crunchy and sweet baby carrots."
    },
    {
        name: "Broccoli",
        price: "$10.00",
        img: "assets/img/veg/Broccoli.jpeg",
        rating: 4, description: "Fresh green broccoli, rich in vitamins."
    },
    {
        name: "Brussels Sprouts",
        price: "$10.00",
        img: "assets/img/veg/BrusselsSprouts.jpeg",
        rating: 4, description: "Healthy and nutritious Brussels sprouts."
    },
    {
        name: "Green Peas",
        price: "$10.00",
        img: "assets/img/veg/Green Peas.jpeg",
        rating: 4,
        description: "Sweet green peas, perfect for any dish."
    },
    {
        name: "Cordon Bleu",
        price: "$10.00",
        img: "assets/img/pork/cordon-bleu.jpeg",
        rating: 4,
        description: "Delicious crispy chicken cordon bleu."
    },
    {
        name: "Loin Steak",
        price: "$10.00",
        img: "assets/img/pork/loin-steaks.jpeg",
        rating: 4,
        description: "Juicy and tender pork loin steak."
    },
    {
        name: "Ribeye Steak",
        price: "$10.00",
        img: "assets/img/beef/RibeyeSteak.jpeg",
        rating: 4,
        description: "Premium quality ribeye steak."
    },
    {
        name: "Striploin",
        price: "$10.00",
        img: "assets/img/beef/Striploin.png",
        rating: 4, description: "Perfectly marbled striploin steak."
    },
    {
        name: "Chicken Cordon",
        price: "$10.00",
        img: "assets/img/poultry/chicken-cordon.jpeg",
        rating: 4, description: "Savory and crispy chicken cordon bleu."
    },
    {
        name: "Duck Liver",
        price: "$10.00",
        img: "assets/img/poultry/duck-liver.jpeg",
        rating: 4, description: "Rich and flavorful duck liver."
    },
];

const productContainer = document.getElementById("product-grid");
let productGridHTML = "";

products.forEach((product, index) => {
    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);

    productGridHTML += `
        <div class="col">
            <div class="card h-100 shadow-sm rounded-3 product-card" data-index="${index}">
                <img src="${product.img}" class="card-img-top rounded-top-3" alt="${product.name}">
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

// event listener to each product card
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        const index = card.getAttribute("data-index");
        localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
        window.location.href = "product-view.html"; // Redirect to product-view.html
    });
});
