const shippingAdressForm = document.querySelector(".shipping-adress-form");
const firstNameInput = document.querySelector(
  "#shipping-guest-first-name-input"
);
const firstNameError = document.querySelector(
  "#shipping-adress-guest-first-name-error"
);
const lastNameInput = document.querySelector("#shipping-guest-last-name-input");
const lastNameError = document.querySelector(
  "#shipping-adress-guest-last-name-error"
);
const shippingAdressInput = document.querySelector(
  "#shipping-guest-shipping-adress-input"
);
const shippingAdressError = document.querySelector(
  "#shipping-adress-guest-shipping-adress-error"
);
const postalCodeInput = document.querySelector(
  "#shipping-guest-postal-code-input"
);
const postalCodeError = document.querySelector(
  "#shipping-adress-guest-postal-code-error"
);
const countyInput = document.querySelector("#shipping-guest-county-input");
const countyError = document.querySelector(
  "#shipping-adress-guest-county-error"
);
const proceedCta = document.querySelector("#shipping-adress-guest-cta");

function formRequirements() {
  event.preventDefault();
  if (firstNameInput.value.trim().length >= 1) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (lastNameInput.value.trim().length >= 1) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (shippingAdressInput.value.trim().length >= 1) {
    shippingAdressError.style.display = "none";
  } else {
    shippingAdressError.style.display = "block";
  }

  if (postalCodeInput.value.trim().length >= 4) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
  }

  if (countyInput.value.trim().length >= 4) {
    countyError.style.display = "none";
  } else {
    countyError.style.display = "block";
  }
}

proceedCta.onclick = function () {
  location.href =
    "https://mh-rainydays.netlify.app/purchase/choose-payment-method.html";
};

shippingAdressForm.addEventListener("submit", formRequirements);
