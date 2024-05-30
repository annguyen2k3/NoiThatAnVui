//TODO Valuedation
const inputEmail = $("#email");
const btnSubmit = $(".btnSubmit");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

btnSubmit.addEventListener("click", () => {
    if (isValidEmail(inputEmail.value))
        $(".valuedation-email").style.display = "none";
    else $(".valuedation-email").style.display = "block";

    if (isValidPhoneNumber($("#phone").value))
        $(".valuedation-phone").style.display = "none";
    else $(".valuedation-phone").style.display = "block";

    if ($("textarea#message").value === "")
        $(".valuedation-desc").style.display = "block";
    else $(".valuedation-desc").style.display = "none";
});
