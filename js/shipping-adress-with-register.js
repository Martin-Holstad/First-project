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

function formRequireme() {
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
  if (emailRequirements(epostInput.value.trim()) === true) {
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

if (
  firstNameInput &&
  lastNameInput &&
  emailRequirements &&
  passwordInput === true
) {
  window.location = "something";
}

registerForm.addEventListener("submit", formRequireme);

function emailRequirements(email) {
  const requirements = /\S+@\S+\.\S+/;
  const emailMatch = requirements.test(email);
  return emailMatch;
}
