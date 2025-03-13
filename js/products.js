const products = [
    {
        name: "Cranberries",
        price: "₱ 460",
        img: "assets/img/fruits/Cranberries.jpeg",
        rating: 5,
        description: "Imported from Europe, these cranberries were harvested when ripe and then individually quick-frozen to make sure that their freshness is preserved all the way to your door. Cranberries are sweet, tart, and rich in vitamins and antioxidants, which makes them ideal for healthy smoothies, juices, sauces, and jams that have a bit of a sour kick!"
    },
    {
        name: "Strawberries",
        price: "₱ 175",
        img: "assets/img/fruits/Strawberries.jpeg",
        rating: 3,
        description: "Enjoy the convenience – no need to thaw! Simply toss these frozen berries straight into your blender for delicious smoothies, or use them as a delightful topping or ingredient for countless desserts and sauces, such as classic strawberry shortcake, homemade ice cream, jams, and cheesecakes. These versatile berries are one of the keys to unleash your culinary creativity."
    },
    {
        name: "Mixed Berries",
        price: "₱ 220",
        img: "assets/img/fruits/Mixedberries.jpeg",
        rating: 4,
        description: "A cocktail of berries of whole red fruits, the varieties of which have been selected for their taste quality: Blackberries, Blueberries, Raspberries, Strawberries and Redcurrants. Picked when ripe then sorted, cleaned, and frozen to retain all the benefits. Mixed berries are an excellent source of antioxidants and fiber. They are also high in nutrients, low in calories, and a good source of vitamin C."
    },
    {
        name: "Raspberries",
        price: "₱ 399",
        img: "assets/img/fruits/Raspberries.jpeg",
        rating: 3,
        description: "Juicy, antioxidant-packed raspberries of pure, sweet taste, are now available all year round with our frozen variant. Harvested at the peak of ripeness, these whole berries are flash-frozen to lock in their vibrant color, juicy texture, and wonderful flavor."
    },
    {
        name: "Blackcurrants",
        price: "₱ 325",
        img: "assets/img/fruits/Black.jpeg",
        rating: 2,
        description: "Fresh blackcurrant fruits gathered ripe and then individually quick-frozen before being de-stemmed, to guarantee peak freshness and quality. Discover the vibrant burst of flavor and nutrition with our exquisite blackcurrants from France. Tangy-sweet berries packed with vitamin C and antioxidants offer a delicious and healthy way to add a unique twist to your recipes."
    },
    {
        name: "Carrots",
        price: "₱ 220",
        img: "assets/img/veg/BabyCarrots.jpeg",
        rating: 4,
        description: "Sweet, firm, and perfectly sized carrots ideal for eating with dips, mixing into salads, or enjoying as a nutritious snack. Carrots are known for their high content of beta-carotene, which is converted into vitamin A in the body. This essential nutrient supports good vision, a strong immune system, and healthy skin. Additionally, baby carrots are low in calories and high in fiber, making them a great choice for weight management and digestive health."
    },
    {
        name: "Broccoli",
        price: "₱ 199",
        img: "assets/img/veg/Broccoli.jpeg",
        rating: 0, description: "Enjoy the garden-fresh taste and nutritional power of broccoli all year round with our premium broccoli florets. Harvested at peak ripeness, our broccoli is meticulously washed, trimmed, blanched, and frozen within hours to preserve its vibrant color, crisp texture, and essential nutrients."
    },
    {
        name: "Brussels Sprouts",
        price: "₱ 145",
        img: "assets/img/veg/BrusselsSprouts.jpeg",
        rating: 1, description: "Skip the prep work and enjoy the benefits with this flash-frozen option. Packed with essential vitamins and antioxidants, these frozen Brussels sprouts are a healthy and delicious way to boost your meals."
    },
    {
        name: "Green Peas",
        price: "₱ 320",
        img: "assets/img/veg/Green Peas.jpeg",
        rating: 4,
        description: "Peas add a pop of sweetness and a delightful pop of color and texture to your dishes. And most importantly, they are a nutrient powerhouse. As part of the legume family, green peas are packed with essential nutrients like protein, fiber, vitamins A, C, K, iron, and more."
    },
    {
        name: "Cordon Bleu",
        price: "₱ 620",
        img: "assets/img/pork/cordon-bleu.jpeg",
        rating: 5,
        description: "Enjoy the more convenient version of this classic recipe, a combination of pork, ham, and melted Swiss cheese rolled in golden crispy breadcrumbs. Simple and delicious, a favorite among people of all ages. It is one of the foolproof dishes one can serve on any occasion."
    },
    {
        name: "Loin Steak",
        price: "₱ 699",
        img: "assets/img/pork/loin-steaks.jpeg",
        rating: 5,
        description: "Protein-packed and easy-to-prepare meals are a breeze with these boneless pork steaks. Lean, tender, and versatile, these are perfect for a variety of cooking methods - fry, braise, grill, or bake – these steaks adapt to your preferred cooking style."
    },  
    {
        name: "Ribeye Steak",
        price: "₱ 1580",
        img: "assets/img/beef/RibeyeSteak.jpeg",
        rating: 3,
        description: "The ultimate steakhouse experience: tender, juicy, and robust - only with our Certified Angus Beef® Ribeye Steak. This prime cut, sourced from the heart of the rib, is renowned for its exceptional marbling, ensuring a tender and flavorful eating experience."
    },
    {
        name: "Striploin",
        price: "₱ 880",
        img: "assets/img/beef/Striploin.jpeg",
        rating: 4, description: "This boneless Striploin is becoming a favorite of many steak lovers due to its appetizing meat flavor and its tenderness throughout. The characteristic strip of fat gives it an extra succulent flavour."
    },
    {
        name: "Chicken Cordon",
        price: "₱ 340",
        img: "assets/img/poultry/chicken-cordon.jpeg",
        rating: 5, description: "Enjoy the convenient, ready-to-cook version of this classic combination of chicken, bacon, and melted cheese rolled in golden crispy breadcrumbs - a simple and delicious favorite among people of all ages."
    },
    {
        name: "Duck Liver",
        price: "₱ 4600",
        img: "assets/img/poultry/duck-liver.jpeg",
        rating: 2, description: "Duck foie gras has been a delicacy in French culinary tradition for centuries. It has a pronounced taste of distinct texture and flavor and is uncompromisingly rich with its high-fat content."
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
                        <h6 class="card-title mb-0 small text-muted">${product.name}</h6>
                        <span class="fw-semibold purple bg-secondary-subtle rounded-4 px-2 py-1 small">${product.price}</span>
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
        const product = products[index];

       
        let productString = `${product.name}|${product.price}|${product.img}|${product.rating}|${product.description}`;
        localStorage.setItem("selectedProduct", productString);

        
        window.location.href = "product-view.html";
    });
});
