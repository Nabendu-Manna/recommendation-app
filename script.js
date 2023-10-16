

/**
 * Vitamin C Serum - Glow, INR 1095, 4.3 x
 * Pink Clay Mask - Glow, INR 845, 4.7 x
 * Day Cream - Dry, INR 845, 4.1 x
 * Night Cream - Dry, INR 945, 4.7 x
 * Hyaluronic Acid Serum - Dry, INR 975, 4.9 x
 * Acne Busting Serum - Acne, INR 975, 4.6 x
 * Green Clay Mask - Acne, INR 695, 4.7 x
 * Day Gel - Dry, INR 645, 4.9 x
 * AHA Serum - Glow, INR 1095, 4.5 x
 * AHA Sleep Mask - Glow, INR 995, 4.3
 */
const products = [{
    name: "Vitamin C Serum",
    rating: 4.3,
    category: "Glow",
    mrp: 1095
}, {
    name: "Pink Clay Mask",
    rating: 4.7,
    category: "Glow",
    mrp: 845
}, {
    name: "Day Cream",
    rating: 4.1,
    category: "Dry",
    mrp: 845
}, {
    name: "Night Cream",
    rating: 4.7,
    category: "Dry",
    mrp: 945
}, {
    name: "Hyaluronic Acid Serum",
    rating: 4.9,
    category: "Dry",
    mrp: 975
}, {
    name: "Acne Busting Serum",
    rating: 4.6,
    category: "Acne",
    mrp: 675
}, {
    name: "Green Clay Mask ",
    rating: 4.7,
    category: "Acne",
    mrp: 695
}, {
    name: "Day Gel",
    rating: 4.9,
    category: "Dry",
    mrp: 645
}, {
    name: "AHA Serum",
    rating: 4.5,
    category: "Glow",
    mrp: 1095
}, {
    name: "AHA Sleep Mask",
    rating: 4.3,
    category: "Glow",
    mrp: 995
}];

var recommendedProduct = [];

document.addEventListener("DOMContentLoaded", () => {
    const proListElementRef = document.getElementById("pro-list");
    const proSelectElementRef = document.querySelector('[name = "product"]');
    const proRatingElementRef = document.querySelector('[name = "rating"]');
    products.forEach((product, index) => {
        let proItem = document.createElement("div");
        let proText = document.createTextNode(`${product.name} (${product.category}) - ${product.mrp} INR, ${product.rating}`);
        proItem.appendChild(proText);
        proListElementRef.appendChild(proItem);
        let optnItem = document.createElement("option");
        optnItem.setAttribute("value", index);
        optnItem.text = product.name;
        proSelectElementRef.add(optnItem);
    });

    const ratingFormElementRef = document.getElementById("rating-form");
    ratingFormElementRef.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!proRatingElementRef.value || !proSelectElementRef.value) {
            alert("Invalid Details!");
            return;
        }
        recommendedProduct = products;
        console.log("-", proRatingElementRef.value, proSelectElementRef.value);
    });
});

function displayList() {
    
}
