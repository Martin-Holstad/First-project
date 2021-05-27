const form = document.querySelector(".contact-us-form");
const firstName = document.querySelector("#first-name-contact-us");
const firstNameErrorContactUs = document.querySelector("#first-name-contact-us-error");
const lastName = document.querySelector("#last-name-contact-us");
const lastNameErrorContactUs = document.querySelector("#last-name-contact-us-error");
const email = document.querySelector("#email-contact-us");
const emailError = document.querySelector("#email-contact-us-error");
const message = document.querySelector("#message-contact-us");
const messageError = document.querySelector("#message-contact-us-error");
const button = document.querySelector(".contact-us-submit-cta");
const successMessage = document.querySelector(".contact-us-form-message");


function buttonEnable() {
  if (
    checklength(firstName.value, 4) &&
    checklength(lastName.value, 4) &&
    emailRequirements(email.value) &&
    checklength(message.value, 10)
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
    successMessage.innerHTML = "";
  }

  if (firstName.value.trim().length >= 4) {
    firstNameErrorContactUs.style.display = "none";
  } else {
    firstNameErrorContactUs.style.display = "block";
  }

  if (lastName.value.trim().length >= 4) {
    lastNameErrorContactUs.style.display = "none";
  } else {
    lastNameErrorContactUs.style.display = "block";
  }

  if (emailRequirements(email.value.trim()) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (message.value.trim().length >= 10) {
    messageError.style.display = "none";

  } else {
    messageError.style.display = "block";
  }
}


firstName.addEventListener("keyup", buttonEnable);
lastName.addEventListener("keyup", buttonEnable);
email.addEventListener("keyup", buttonEnable);
message.addEventListener("keyup", buttonEnable);

function submitForm(event) {
  event.preventDefault();

  successMessage.innerHTML = `<div class="contact-us-form-message">Your message has been sendt</div>`;

  form.reset();
}

form.addEventListener("submit", submitForm);

