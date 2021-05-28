const urlWomenJacket = "https://holstaddesign.com/rainydays-products/wp-json/wc/store/products?per_page=100"
const loader = document.querySelector(".loader-women-jacket")
const productContainerWomenJacket = document.querySelector(".product-container-women-jacket")

async function womenProducts() {
    try {
        const response = await fetch(urlWomenJacket);

        const result = await response.json();

        loader.innerHTML = "";

        const productInfo = result;

        productInfo.forEach(function (products) {

            if (products.categories[0].name === "Women") {

                productContainerWomenJacket.innerHTML += `<a href="../purchase/details.html?id=${products.id}?name=${products.name}">
                                                    <div>
                                                    <img class="images-women-jacket" src="${products.images[0].src}" alt="${products.name}">
                                                    <p class="name-women-jacket">${products.name}</p>
                                                    <div class="name-and-price-flex-women-jacket">
                                                    <div>
                                                    <p>${products.description}</p>
                                                    </div>
                                                    <div class="price-women-jacket">
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
womenProducts()

const backToTopButton = document.querySelector(".back-to-top-cta")

backToTopButton.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
