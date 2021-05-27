const guestShippingform = document.querySelector(".shipping-adress-form");
const guestShippingFirstNameInput = document.querySelector("#shipping-guest-first-name-input");
const guestShippingFirstNameError = document.querySelector("#shipping-adress-guest-first-name-error");
const guestShippingLastNameInput = document.querySelector("#shipping-guest-last-name-input");
const guestShippingLastNameError = document.querySelector("#shipping-adress-guest-last-name-error");
const guestShippingShippingAdressInput = document.querySelector("#shipping-guest-shipping-adress-input");
const guestShippingShippingAdressError = document.querySelector("#shipping-adress-guest-shipping-adress-error");
const guestShippingPostalCodeInput = document.querySelector("#shipping-guest-postal-code-input");
const guestShippingPostalCodeError = document.querySelector("#shipping-adress-guest-postal-code-error");
const guestShippingCountyInput = document.querySelector("#shipping-guest-county-input");
const guestShippingCountyError = document.querySelector("#shipping-adress-guest-county-error");
const guestShippingButton = document.querySelector("#shipping-adress-guest-cta");

function buttonEnableGuestShipping() {
  if (
    checklengthGuestShipping(guestShippingFirstNameInput.value, 4) &&
    checklengthGuestShipping(guestShippingLastNameInput.value, 4) &&
    checklengthGuestShipping(guestShippingShippingAdressInput.value, 6) &&
    checklengthGuestShipping(guestShippingPostalCodeInput.value, 4) &&
    checklengthGuestShipping(guestShippingCountyInput.value, 4)
  ) {
    guestShippingButton.disabled = false;
  } else {
    guestShippingButton.disabled = true;
  }

  if (guestShippingFirstNameInput.value.trim().length >= 4) {
    guestShippingFirstNameError.style.display = "none";
  } else {
    guestShippingFirstNameError.style.display = "block";
  }

  if (guestShippingLastNameInput.value.trim().length >= 4) {
    guestShippingLastNameError.style.display = "none";
  } else {
    guestShippingLastNameError.style.display = "block";
  }

  if (guestShippingShippingAdressInput.value.trim().length >= 6) {
    guestShippingShippingAdressError.style.display = "none";
  } else {
    guestShippingShippingAdressError.style.display = "block";
  }

  if (guestShippingPostalCodeInput.value.trim().length >= 4) {
    guestShippingPostalCodeError.style.display = "none";
  } else {
    guestShippingPostalCodeError.style.display = "block";
  }

  if (guestShippingCountyInput.value.trim().length >= 4) {
    guestShippingCountyError.style.display = "none";
  } else {
    guestShippingCountyError.style.display = "block";
  }
}

guestShippingFirstNameInput.addEventListener(
  "keyup",
  buttonEnableGuestShipping
);
guestShippingLastNameInput.addEventListener("keyup", buttonEnableGuestShipping);
guestShippingShippingAdressInput.addEventListener(
  "keyup",
  buttonEnableGuestShipping
);
guestShippingPostalCodeInput.addEventListener(
  "keyup",
  buttonEnableGuestShipping
);
guestShippingCountyInput.addEventListener("keyup", buttonEnableGuestShipping);

function submitFormGuestShipping(event) {
  event.preventDefault();
  guestShippingform.reset();
}

guestShippingform.addEventListener("submit", submitFormGuestShipping);

function checklengthGuestShipping(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

guestShippingButton.onclick = function () {
  location.href =
    "http://127.0.0.1:5500/purchase/choose-payment-method.html";
};
