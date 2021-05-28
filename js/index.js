const emailInput = document.querySelector("#e-postadresse-logg-inn");
const emailInputError = document.querySelector("#profile-epost-error");
const passwordInput = document.querySelector("#password-logg-inn");
const passwordInputError = document.querySelector("#profile-password-error");
const loggInnButton = document.querySelector(".logg-inn-button");

loggInnButton.onclick = function () {
  event.preventDefault();

  if (passwordInput.value.trim().length >= 10) {
    passwordInputError.style.display = "none";
  } else {
    passwordInputError.style.display = "block";
  }
};
console.log("balle")