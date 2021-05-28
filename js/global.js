
function checklength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function emailRequirements(email) {
    const requirements = /\S+@\S+\.\S+/;
    const emailMatch = requirements.test(email);
    return emailMatch;
}

const cartOverlay = document.querySelector(".cart-overlay-container")
const cartOverlayButton = document.querySelector("#icon-cart-il")

cartOverlayButton.onclick = function () {

    if (cartOverlay.style.display === "none") {
        cartOverlay.style.display = "block"
    } else {
        cartOverlay.style.display = "none"
    }

}

const profileOverlayContainer = document.querySelector(".profile-overlay-container")
const profileOverlayBytton = document.querySelector("#icon-profile-il")

profileOverlayBytton.onclick = function () {

    if (profileOverlayContainer.style.display === "none") {
        profileOverlayContainer.style.display = "block"
    } else {
        profileOverlayContainer.style.display = "none"
    }
}

const contactUsButton = document.querySelector(".contact-us-button")
const contactOverlayContainer = document.querySelector(".contact-us-overlay-container")

contactUsButton.onclick = function () {

    if (contactOverlayContainer.style.display === "none") {
        contactOverlayContainer.style.display = "block"
    } else {
        contactOverlayContainer.style.display = "none"
    }
}