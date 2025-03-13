// Shipping Information Form Elements
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const addressInput = document.getElementById("address");
const address2Input = document.getElementById("address2");
const cityInput = document.getElementById("city");
const provinceInput = document.getElementById("province");
const zipInput = document.getElementById("zip");

const firstNameError = document.getElementById("firstNameValidation");
const lastNameError = document.getElementById("lastNameValidation");
const addressError = document.getElementById("addressValidation");
const cityError = document.getElementById("cityValidation");
const provinceError = document.getElementById("provinceValidation");
const zipError = document.getElementById("zipValidation");

const checkoutBtn = document.querySelector("#checkoutBtn");

// Checkout Form Modal and Elements
const checkoutModal = new bootstrap.Modal(
    document.getElementById("checkoutModal")
);

const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNumber");
const cardExpiration = document.querySelector("#cardExpiration");
const cardCVV = document.querySelector("#cardCVV");

const nameError = document.querySelector("#nameValidation");
const numberError = document.querySelector("#numberValidation");
const expirationError = document.querySelector("#expirationValidation");
const CVVError = document.querySelector("#cvvValidation");

const payButton = document.querySelector("#payBtn");

// Payment confirmation modal
const checkoutConfirmationModal = new bootstrap.Modal(document.querySelector("#checkoutConfirmation"));

/**
 * DOCU: Handles checkout button click event and validates shipping form. If valid, opens the checkout modal.
 * @param {Event} event - Prevents default form submission.
 */
checkoutBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateShippingInfoForm()) {
        checkoutModal.show();
    }
});

/**
 * DOCU: Handles payment button click event and validates checkout form.
 * If valid, closes the checkout modal, clears cart, shipping info, order summary, and update cart button counter and opens confirmation modal.
 * @param {Event} event - Prevents default form submission.
 */
payButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateCheckoutForm()) {
        checkoutModal.hide();
        clearCartContainer();
        clearShippingInfoForm();
        clearOrderSummary();
        updateCartCount();
        checkoutConfirmationModal.show();
    }
});

/**
 * DOCU: Validates the shipping information form fields.
 * @return {boolean} - Returns true if all fields are valid, otherwise false.
 */
function validateShippingInfoForm() {
    let isValid = true;

    if (!firstNameInput.value.trim()) {
        showError(firstNameError, "First name is required.");
        isValid = false;
    } else {
        hideError(firstNameError);
    }

    if (!lastNameInput.value.trim()) {
        showError(lastNameError, "Last name is required.");
        isValid = false;
    } else {
        hideError(lastNameError);
    }

    if (!addressInput.value.trim()) {
        showError(addressError, "Address is required.");
        isValid = false;
    } else {
        hideError(addressError);
    }

    if (!cityInput.value.trim()) {
        showError(cityError, "City is required.");
        isValid = false;
    } else {
        hideError(cityError);
    }

    if (!provinceInput.value.trim()) {
        showError(provinceError, "Province is required.");
        isValid = false;
    } else {
        hideError(provinceError);
    }

    // At least 4 digits
    const zipPattern = /^\d{4,}$/;
    if (!zipInput.value.trim()) {
        showError(zipError, "Zip code is required.");
        isValid = false;
    } else if (!zipPattern.test(zip.value.trim())) {
        showError(zipError, "Invalid zip code. Must be at least 4 digits.");
        isValid = false;
    } else {
        hideError(zipError);
    }

    return isValid;
}

/**
 * DOCU: Validates payment details in the checkout form.
 * @return {boolean} - Returns true if all fields are valid, otherwise false.
 */
function validateCheckoutForm() {
    let isValid = true;

    if (!cardName.value.trim()) {
        showError(nameError, "Name is required.");
        isValid = false;
    } else {
        hideError(nameError);
    }

    // Accepts 16 digits
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumber.value.trim()) {
        showError(numberError, "Card number is required.");
        isValid = false;
    } else if (!cardNumberPattern.test(cardNumber.value.trim())) {
        showError(numberError, "Invalid card number. Must be 16 digits.");
        isValid = false;
    } else {
        hideError(numberError);
    }

    // MM/YY format
    const expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!cardExpiration.value.trim()) {
        showError(expirationError, "Expiration date is required.");
        isValid = false;
    } else if (!expirationPattern.test(cardExpiration.value.trim())) {
        showError(expirationError, "Invalid format. Use MM/YY.");
        isValid = false;
    } else {
        hideError(expirationError);
    }

    // 3 or 4 digits
    const cvvPattern = /^\d{3,4}$/;
    if (!cardCVV.value.trim()) {
        showError(CVVError, "CVV is required.");
        isValid = false;
    } else if (!cvvPattern.test(cardCVV.value.trim())) {
        showError(CVVError, "Invalid CVV. Must be 3 or 4 digits.");
        isValid = false;
    } else {
        hideError(CVVError);
    }

    return isValid;
}

/**
 * DOCU: Displays an error message for a specific form field.
 * @param {HTMLElement} errorElement - The validation message element.
 * @param {string} message - The error message to display.
 */
function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.remove("d-none");
}

/**
 * DOCU: Hides the error message for a specific form field.
 * @param {HTMLElement} errorElement - The validation message element.
 */
function hideError(errorElement) {
    errorElement.classList.add("d-none");
}

/** DOCU: Clears all input fields in the shipping form after successful payment.*/
function clearShippingInfoForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    addressInput.value = "";
    address2Input.value = "";
    cityInput.value = "";
    provinceInput.value = "";
    zipInput.value = "";
}

/** DOCU: Clears the order summary by resetting the displayed values for item total, shipping fee, and total amount to "₱0.00". */
function clearOrderSummary() {
    document.querySelector("#itemsTotal").textContent = "₱0.00";
    document.querySelector("#shippingFee").textContent = "₱0.00";
    document.querySelector("#totalAmount").textContent = "₱0.00";
}

/** DOCU: Clears the cart container by removing all items from local storage and updating the UI to display a "cart empty" message. */
function clearCartContainer() {
    // Remove all items from localStorage
    localStorage.removeItem("cart");

    // Select the cart container and update the UI
    const cartContainer = document.querySelector(".cart");
    if (cartContainer) {
        cartContainer.innerHTML = `
            <li class="list-group-item text-center p-5 shadow rounded-4">
                <h6 class="mb-3">There are no items in this cart.</h6>
                <a href="/index.html" class="btn btn-outline-purple">Continue Shopping</a>
            </li>
        `;
    }
}
