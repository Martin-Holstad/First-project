const backToTopButton = document.querySelector(".back-to-top-cta")

backToTopButton.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

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
