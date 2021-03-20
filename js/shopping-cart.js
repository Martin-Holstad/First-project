const cartCount = document.querySelector(".cart-count");
const addToCartBtn = document.querySelector(".add-to-cart-cta");

let count = 0;

addToCartBtn.onclick = function () {
  count++;
  cartCount.innerHTML = count;
};
