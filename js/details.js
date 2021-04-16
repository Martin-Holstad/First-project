const productDetailContainer = document.querySelector(".productDetailContainer")
const productInfoContainer = document.querySelector(".product-info-container")
const loader = document.querySelector(".loader-men-jacket")
const idStringDetails = document.location.search;
const newUrlDetails = new URLSearchParams(idStringDetails);
const idDetails = newUrlDetails.get("id", "name");
const urlDetails = "https://holstaddesign.com/rainydays-products/wp-json/wc/store/products/" + idDetails;

async function productDetails() {
    try {
        const response = await fetch(urlDetails)

        const details = await response.json();

        loader.innerHTML = "";

        newHtml(details);
    } catch (error) {
        console.log("failed to fetch url")
        loader.innerHTML = "Ops... Something went wrong";
    }
}

productDetails()

function newHtml(details) {
    productDetailContainer.innerHTML += `
                                       <img class="product-image-details" src="${details.images[0].src}" alt="${details.name}">`

    productInfoContainer.innerHTML += `
                                      <div class="h1-and-in-stock-container">
                                      <h1>${details.name}</h1>
                                      <p class="product-in-stock">${details.is_in_stock}</p>
                                      </div>
                                      <p class="product-h2"><strong>${details.description}</strong></p>
                                      <p class="product-description-details">${details.short_description}</p>
                                      <button class="product-add-to-cart">Add to cart</button>`

    const inStock = document.querySelector(".product-in-stock")

    if (details.is_in_stock) {
        inStock.innerHTML = "In stock"
        inStock.style.color = "green"

    } else {
        inStock.innerHTML = "Out of stock"
        inStock.style.color = "red"
    }
}

const goBackButton = document.querySelector(".cta-button-go-back")

goBackButton.onclick = function () {
    history.back();
}



