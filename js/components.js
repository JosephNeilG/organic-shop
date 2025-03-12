/**
 * DOCU: Loads an external HTML component into the specified element.
 * @param {string} id - The ID of the target element where the component will be loaded.
 * @param {string} file - The path to the external HTML file.
 */
/** DOCU: Adds event listeners for signup, login, and logout actions in the navbar. */
function setupNavbarEventListeners() {
    const authButtons = document.querySelector(".btn-container");
    const profileContainer = document.querySelector(".profile-container");

    const signupForm = document.querySelector("#signupModal form");
    const loginForm = document.querySelector("#loginModal form");
    const logoutButton = document.querySelector(".profile-container .dropdown-item.text-danger");

    if (signupForm && loginForm && authButtons && profileContainer) {
        /**
         * DOCU: Handles user authentication by showing the profile and hiding auth buttons.
         * @param {Event} event - The event object from form submission.
         */
        function showProfile(event) {
            event.preventDefault();
            authButtons.classList.add("d-none");
            profileContainer.classList.remove("d-none");

            // Close modal after form submission.
            const modal = bootstrap.Modal.getInstance(event.target.closest(".modal"));
            if (modal) modal.hide();
        }

        /** DOCU: Logs out the user by resetting forms and toggling UI elements.*/
        function logout() {
            authButtons.classList.remove("d-none");
            profileContainer.classList.add("d-none");

            signupForm.reset();
            loginForm.reset();
        }

        logoutButton.addEventListener("click", logout);

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            if (validateSignupForm()) {
                showProfile(event);
            }
        });

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            if (validateLoginForm()) {
                showProfile(event);
            }
        });
    }
}

/**
 * DOCU: Validates the signup form inputs.
 * @return {boolean} - Returns true if the form is valid, otherwise false.
 */
function validateSignupForm() {
    let isValid = true;

    const firstName = document.querySelector("#signupFirstName");
    const lastName = document.querySelector("#signupLastName");
    const email = document.querySelector("#signupEmail");
    const password = document.querySelector("#signupPassword");
    const confirmPassword = document.querySelector("#signupConfirmPassword");

    const firstNameError = document.querySelector("#firstNameValidation");
    const lastNameError = document.querySelector("#lastNameValidation");
    const emailError = document.querySelector("#emailValidation");
    const passwordError = document.querySelector("#passwordValidation");
    const confirmPasswordError = document.querySelector("#confirmPasswordValidation");

    if (!firstName.value.trim()) {
        showError(firstNameError, "First name is required.");
        isValid = false;
    } else {
        hideError(firstNameError);
    }

    if (!lastName.value.trim()) {
        showError(lastNameError, "Last name is required.");
        isValid = false;

    } else {
        hideError(lastNameError);
    }

    if (!email.value.trim()) {
        showError(emailError, "Email is required.");
        isValid = false;

    } else if (!isValidEmail(email.value.trim())) {
        showError(emailError, "Invalid email format.");
        isValid = false;
    } else {
        hideError(emailError);
    }

    if (!password.value.trim()) {
        showError(passwordError, "Password is required.");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(passwordError, "Password must be at least 6 characters.");
        isValid = false;
    } else {
        hideError(passwordError);
    }

    if (!confirmPassword.value.trim()) {
        showError(confirmPasswordError, "Please confirm your password.");
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPasswordError, "Passwords do not match.");
        isValid = false;
    } else {
        hideError(confirmPasswordError);
    }

    return isValid;
}

/**
 * DOCU: Validates the login form inputs.
 * @return {boolean} - Returns true if the form is valid, otherwise false.
 */
function validateLoginForm() {
    let isValid = true;

    const email = document.querySelector("#loginEmail");
    const password = document.querySelector("#loginPassword");

    const emailError = document.querySelector("#emailValidationLogin");
    const passwordError = document.querySelector("#passwordValidationLogin");

    if (!email.value.trim()) {
        showError(emailError, "Email is required.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(emailError, "Invalid email format.");
        isValid = false;
    } else {
        hideError(emailError);
    }

    if (!password.value.trim()) {
        showError(passwordError, "Password is required.");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(passwordError, "Password must be at least 6 characters.");
        isValid = false;
    } else {
        hideError(passwordError);
    }

    return isValid;
}

/**
 * DOCU: Validates an email format using a regular expression.
 * @param {string} email - The email address to validate.
 * @return {boolean} - Returns true if the email format is valid, otherwise false.
 */
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

/**
 * DOCU: Displays an error message for form validation.
 * @param {HTMLElement} errorElement - The element where the error message is displayed.
 * @param {string} message - The validation error message.
 */
function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.remove("d-none");
}

/**
 * DOCU: Hides the error message for a given form field.
 * @param {HTMLElement} errorElement - The element to hide.
 */
function hideError(errorElement) {
    errorElement.classList.add("d-none");
}