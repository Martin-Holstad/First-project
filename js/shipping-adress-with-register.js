const registerForm = document.querySelector(".register-form");
const firstNameInput = document.querySelector("#first-name-input");
const firstNameError = document.querySelector("#first-name-error");
const lastNameInput = document.querySelector("#last-name-input");
const lastNameError = document.querySelector("#last-name-error");
const epostInput = document.querySelector("#e-postadresse-input");
const epostError = document.querySelector("#e-postadresse-error");
const passwordInput = document.querySelector("#password-input");
const passowrdError = document.querySelector("#password-input-error");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const confirmPasswordError = document.querySelector("#confirm-password-error");
const registerButton = document.querySelector("#cta-register");

function buttonEnableContactUs() {
  if (
    checklengthContactUs(firstNameInput.value, 4) &&
    checklengthContactUs(lastNameInput.value, 4) &&
    emailRequirementsContactUs(epostInput.value) &&
    checklengthContactUs(passwordInput.value, 6)
  ) {
    registerButton.disabled = false;
  } else {
    button.disabled = true;
  }

  if (firstNameInput.value.trim().length >= 4) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (lastNameInput.value.trim().length >= 4) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (emailRequirementsContactUs(epostInput.value.trim()) === true) {
    epostError.style.display = "none";
  } else {
    epostError.style.display = "block";
  }

  if (passwordInput.value.trim().length >= 6) {
    passowrdError.style.display = "none";
  } else {
    passowrdError.style.display = "block";
  }
}

firstNameInput.addEventListener("keyup", buttonEnableContactUs);
lastNameInput.addEventListener("keyup", buttonEnableContactUs);
epostInput.addEventListener("keyup", buttonEnableContactUs);
passwordInput.addEventListener("keyup", buttonEnableContactUs);

function submitFormContactUs(event) {
  event.preventDefault();

  registerForm.reset();
}

registerForm.addEventListener("submit", submitFormContactUs);

function checklengthContactUs(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

registerButton.onclick = function () {
  window.location =
    "http://127.0.0.1:5500/purchase/proceed%20with%20register.html";
};

function emailRequirementsContactUs(email) {
  const requirements = /\S+@\S+\.\S+/;
  const emailMatch = requirements.test(email);
  return emailMatch;
}
