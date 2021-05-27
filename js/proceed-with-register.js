const formRegisterShipping = document.querySelector(".register-shipping-adress-form");
const registerShippingAdressInput = document.querySelector("#register-shipping-adress-input");
const registerShippingAdressError = document.querySelector("#register-shipping-adress-error-display");
const registerShippingPostalInput = document.querySelector("#register-shipping-postal-input");
const registerShippingPostalError = document.querySelector("#register-shipping-postal-error-display");
const registerShippingCountyInput = document.querySelector("#register-shipping-county-input");
const registerShippingCountyError = document.querySelector("#register-shipping-county-error-display");
const registerShippingAdressProceedButton = document.querySelector(".cta-register-shipping-adress");

function buttonEnableRegisterShipping() {
  if (
    checklengthRegisterShipping(registerShippingAdressInput.value, 6) &&
    checklengthRegisterShipping(registerShippingPostalInput.value, 4) &&
    checklengthRegisterShipping(registerShippingCountyInput.value, 4)
  ) {
    registerShippingAdressProceedButton.disabled = false;
  } else {
    registerShippingAdressProceedButton.disabled = true;
  }

  if (registerShippingAdressInput.value.trim().length >= 6) {
    registerShippingAdressError.style.display = "none";
  } else {
    registerShippingAdressError.style.display = "block";
  }

  if (registerShippingPostalInput.value.trim().length >= 4) {
    registerShippingPostalError.style.display = "none";
  } else {
    registerShippingPostalError.style.display = "block";
  }

  if (registerShippingCountyInput.value.trim().length >= 4) {
    registerShippingCountyError.style.display = "none";
  } else {
    registerShippingCountyError.style.display = "block";
  }
}

registerShippingAdressInput.addEventListener(
  "keyup",
  buttonEnableRegisterShipping
);
registerShippingPostalInput.addEventListener(
  "keyup",
  buttonEnableRegisterShipping
);
registerShippingCountyInput.addEventListener(
  "keyup",
  buttonEnableRegisterShipping
);

function submitFormRegisterShipping(event) {
  event.preventDefault();

  formRegisterShipping.reset();
}

formRegisterShipping.addEventListener("submit", submitFormRegisterShipping);

function checklengthRegisterShipping(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}
