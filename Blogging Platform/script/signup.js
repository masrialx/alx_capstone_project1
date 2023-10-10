const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const acceptTermsCheckbox = document.getElementById("accept-terms");
const signUpButton = document.querySelector(".signup-button");

// Add event listeners to input fields and checkbox for validation
usernameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);
acceptTermsCheckbox.addEventListener("change", validateForm);

// Function to check if the form is valid
function validateForm() {
    const isUsernameValid = usernameInput.value.trim() !== "";
    const isEmailValid = emailInput.checkValidity();
    const isPasswordValid = passwordInput.value.length >= 6;
    const doPasswordsMatch = confirmPasswordInput.value === passwordInput.value;
    const isTermsAccepted = acceptTermsCheckbox.checked;

    signUpButton.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && doPasswordsMatch && isTermsAccepted);
}

// Prevent form submission (for testing purposes)
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
});