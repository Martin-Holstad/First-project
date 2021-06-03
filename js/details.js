const productDetailContainer = document.querySelector(".productDetailContainer")
const productInfoContainer = document.querySelector(".product-info-container")
const loader = document.querySelector(".loader-men-section")
const idStringDetails = document.location.search;
const newUrlDetails = new URLSearchParams(idStringDetails);
const idDetails = newUrlDetails.get("id", "name");
const urlDetails = "https://holstaddesign.com/rainydays-products/wp-json/wc/store/products/" + idDetails;

async function productDetails() {
    try {
        const response = await fetch(urlDetails)

        const details = await response.json();

        loader.style.display = "none";

        newHtml(details);
    } catch (error) {
        loader.innerHTML = "Ops... Something went wrong";
    }
}

productDetails()

function newHtml(details) {
    productDetailContainer.innerHTML += `
                                       <img class="product-image-details" src="${details.images[0].src}" alt="${details.name}">`

    productInfoContainer.innerHTML += `
                                      <div class="h1-and-in-stock-container">
                                      <h1 class="h1-details">${details.name}</h1>
                                      <p class="product-in-stock">${details.is_in_stock}</p>
                                      </div>
                                      <p class="product-price-details">${details.price_html}</p>
                                      <p class="product-h2"><strong>${details.description}</strong></p>
                                      <p class="product-description-details">${details.short_description}</p>
                                      <section>
                                      <select name="size" id="size-select">
                                      <option value="">Please choose a size</option>
                                      <option value="s">S</option>
                                      <option value="m">M</option>
                                      <option value="l">L</option>
                                      <option value="xl">XL</option>
                                      </select>
                                      </section>
                                      <div class="product-add-to-cart" data-products="${details}">Add to cart</div>`

    const imageModalContainer = document.querySelector(".image-modal-container")
    const modalImageCenter = document.querySelector(".modal-image-center")
    const modalImage = document.querySelector(".modal-image")
    const image = document.querySelector(".product-image-details")

    image.onclick = function () {
        imageModalContainer.style.display = "block"
        modalImage.src = image.src
    }

    imageModalContainer.onclick = function (event) {
        if (event.target === imageModalContainer || event.target === modalImageCenter) {
            imageModalContainer.style.display = "none"
        }
    }

    const inStock = document.querySelector(".product-in-stock")

    if (details.is_in_stock) {
        inStock.innerHTML = "In stock"
        inStock.style.color = "green"

    } else {
        inStock.innerHTML = "Out of stock"
        inStock.style.color = "red"
    }

    const addToCartBtn = document.querySelector(".product-add-to-cart");
    const showCart = document.querySelector(".cart-overlay-container");

    let count = 0

    addToCartBtn.onclick = function () {

        showCart.style.display = "block";

        const itemInCartCount = document.querySelector(".total-items")

        count++;

        itemInCartCount.innerHTML = "Items in cart " + count;

        showCart.innerHTML += `
                               <div class="shopping-cart-product-container">
                               <img class="shopping-cart-image" src="${details.images[0].src}">
                               <p class="shopping-cart-name">${details.name}</p>
                               <p class="shopping-cart-price">${details.price_html}</p>
                               </div>
                               `
    }
}


const proceedButton = document.querySelector(".cta-button-proceed")
const goBackButton = document.querySelector(".cta-button-go-back")
const goBackButtonContactUs = document.querySelector(".contact-us-go-back-cta")
const contactUsForm = document.querySelector(".contact-us-overlay-container")

proceedButton.onclick = function () {
    window.location = "/purchase/proceed%20as%20guest.html"
}

goBackButton.onclick = function () {
    history.back();
}

goBackButtonContactUs.onclick = function () {
    window.location = "/purchase/details.html"
}
