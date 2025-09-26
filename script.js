// Get references
const cardForm = document.getElementById("cardForm");
const formContainer = document.getElementById("formContainer");
const successState = document.getElementById("successState");
const continueBtn = document.getElementById("continueBtn");

// Inputs
const cardholderName = document.getElementById("cardholderName");
const cardNumber = document.getElementById("cardNumber");
const expiryMonth = document.getElementById("expiryMonth");
const expiryYear = document.getElementById("expiryYear");
const cvc = document.getElementById("cvc");

// Displays
const cardNameDisplay = document.getElementById("cardNameDisplay");
const cardNumberDisplay = document.getElementById("cardNumberDisplay");
const cardExpiryDisplay = document.getElementById("cardExpiryDisplay");
const cardCvcDisplay = document.getElementById("cardCvcDisplay");

// Error messages
const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const expiryError = document.getElementById("expiryError");
const cvcError = document.getElementById("cvcError");

// Real-time updates
cardholderName.addEventListener("input", () => {
  cardNameDisplay.textContent = cardholderName.value || "Jane Appleseed";
});

cardNumber.addEventListener("input", () => {
  let formatted = cardNumber.value.replace(/\D/g, "").substring(0, 16);
  formatted = formatted.replace(/(.{4})/g, "$1 ").trim();
  cardNumber.value = formatted;
  cardNumberDisplay.textContent = formatted || "0000 0000 0000 0000";
});

expiryMonth.addEventListener("input", () => {
  const mm = expiryMonth.value;
  const yy = expiryYear.value;
  cardExpiryDisplay.textContent = (mm || "00") + "/" + (yy || "00");
});

expiryYear.addEventListener("input", () => {
  const mm = expiryMonth.value;
  const yy = expiryYear.value;
  cardExpiryDisplay.textContent = (mm || "00") + "/" + (yy || "00");
});

cvc.addEventListener("input", () => {
  cardCvcDisplay.textContent = cvc.value || "000";
});

// Validation helper
function showError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = "block";
  input.classList.add("error");
}

function clearError(input, errorElement) {
  errorElement.style.display = "none";
  input.classList.remove("error");
}

// Validation
function validateForm() {
  let valid = true;

  // Name
  if (cardholderName.value.trim() === "") {
    showError(cardholderName, nameError, "Can't be blank");
    valid = false;
  } else {
    clearError(cardholderName, nameError);
  }

  // Card number
  const digitsOnly = cardNumber.value.replace(/\s/g, "");
  if (digitsOnly === "") {
    showError(cardNumber, numberError, "Can't be blank");
    valid = false;
  } else if (!/^\d{16}$/.test(digitsOnly)) {
    showError(cardNumber, numberError, "Wrong format, must be 16 digits");
    valid = false;
  } else {
    clearError(cardNumber, numberError);
  }

  // Expiry
  if (expiryMonth.value === "" || expiryYear.value === "") {
    showError(expiryMonth, expiryError, "Can't be blank");
    valid = false;
  } else if (
    !/^(0[1-9]|1[0-2])$/.test(expiryMonth.value) ||
    !/^\d{2}$/.test(expiryYear.value)
  ) {
    showError(expiryMonth, expiryError, "Wrong format");
    valid = false;
  } else {
    clearError(expiryMonth, expiryError);
  }

  // CVC
  if (cvc.value === "") {
    showError(cvc, cvcError, "Can't be blank");
    valid = false;
  } else if (!/^\d{3,4}$/.test(cvc.value)) {
    showError(cvc, cvcError, "Wrong format");
    valid = false;
  } else {
    clearError(cvc, cvcError);
  }

  return valid;
}

// Form submission
cardForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop reload

  if (validateForm()) {
    formContainer.style.display = "none";
    successState.style.display = "flex";
  }
});

// Continue button
continueBtn.addEventListener("click", () => {
  successState.style.display = "none";
  formContainer.style.display = "block";
  cardForm.reset();

  // Reset card display
  cardNameDisplay.textContent = "Jane Appleseed";
  cardNumberDisplay.textContent = "0000 0000 0000 0000";
  cardExpiryDisplay.textContent = "00/00";
  cardCvcDisplay.textContent = "000";
});
