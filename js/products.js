const products = [
    { name: "Cranberies", price: "$10.00", img: "assets/img/fruits/Cranberries.jpeg", rating: 4 },
    { name: "Strawberries", price: "$10.00", img: "assets/img/fruits/Strawberries.jpeg", rating: 4 },
    { name: "Mixed Berries", price: "$10.00", img: "assets/img/fruits/Mixedberries.jpeg", rating: 4 },
    { name: "Raspberries", price: "$10.00", img: "assets/img/fruits/Raspberries.jpeg", rating: 4 },
    { name: "Blackcurrants", price: "$10.00", img: "assets/img/fruits/Black.jpeg", rating: 4 },

    { name: "Carrots", price: "$10.00", img: "assets/img/veg/BabyCarrots.jpeg", rating: 4 },
    { name: "Broccoli", price: "$10.00", img: "assets/img/veg/Broccoli.jpeg", rating: 4 },
    { name: "Brussels Sprouts", price: "$10.00", img: "assets/img/veg/BrusselsSprouts.jpeg", rating: 4 },
    { name: "Green Peas", price: "$10.00", img: "assets/img/veg/Green Peas.jpeg", rating: 4 },
    { name: "Cordon Bleu", price: "$10.00", img: "assets/img/pork/cordon-bleu.jpeg", rating: 4 },

    { name: "Loin Steak", price: "$10.00", img: "assets/img/pork/loin-steaks.jpeg", rating: 4 },
    { name: "Ribeye Steak", price: "$10.00", img: "assets/img/beef/RibeyeSteak.jpeg", rating: 4 },
    { name: "Striploin", price: "$10.00", img: "assets/img/beef/Striploin.png", rating: 4 },
    { name: "Chicken Cordon", price: "$10.00", img: "assets/img/poultry/chicken-cordon.jpeg", rating: 4 },
    { name: "Duck Liver", price: "$10.00", img: "assets/img/poultry/duck-liver.jpeg", rating: 4 },
];

const productContainer = document.getElementById("product-grid");
let productGridHTML = "";

products.forEach(product => {
    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);

    productGridHTML += `
            <div class="col">
                <div class="card h-100 shadow-sm rounded-3">
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
