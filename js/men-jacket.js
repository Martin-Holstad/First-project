const urlMenJacket = "https://holstaddesign.com/rainydays-products/wp-json/wc/store/products?per_page=100"
const loader = document.querySelector(".loader-men-jacket")
const productContainerMenJacket = document.querySelector(".product-container-men-jacket")

async function menProducts() {
    try {
        const response = await fetch(urlMenJacket);

        const result = await response.json();

        loader.innerHTML = "";

        const productInfo = result;

        productInfo.forEach(function (products) {

            if (products.categories[0].name === "Men") {

                productContainerMenJacket.innerHTML += `<a href="../purchase/details.html?id=${products.id}?name=${products.name}">
                                                    <div class="images-men-jacket-container">
                                                    <img class="images-men-jacket" src="${products.images[0].src}" alt="${products.name}">
                                                    <p class="name-men-jacket">${products.name}</p>
                                                    <div class="name-and-price-flex-men-jacket">
                                                    <div>
                                                    <p>${products.description}</p>
                                                    </div>
                                                    <div class="price-men-jacket">
                                                    <p>${products.price_html}</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </a>
                                                    `;
            }
        });

    } catch (error) {
        console.log("Failed to fetch url")
    }
}
menProducts()