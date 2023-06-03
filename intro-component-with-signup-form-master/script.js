// Selecting elements based on data attribute
const firstNameInput = document.querySelector('input[data-input="first__name"]');
const lastNameInput = document.querySelector('input[data-input="last__name"]');
const emailInput = document.querySelector('input[data-input="email"]');
const passwordInput = document.querySelector('input[data-input="password"]');
const submitButton = document.querySelector('button[data-input="button"]');
const form = document.querySelector('.main__form');

// Selecting warning elements by their id
const firstNameWarning = document.getElementById('firstNameWarning');
const lastNameWarning = document.getElementById('lastNameWarning');
const emailWarning = document.getElementById('emailWarning');
const passwordWarning = document.getElementById('passwordWarning');

// Function to handle input validity
const handleValidity = (inputElement, warningElement) => {
  if (inputElement.validity.valid) {
    inputElement.classList.remove('invalid');
    warningElement.style.display = 'none';
  } else {
    inputElement.classList.add('invalid');
    warningElement.style.display = 'block';
  }
};

// Email input event listener
emailInput.addEventListener("input", () => {
  handleValidity(emailInput, emailWarning);
});

// First name input event listener
firstNameInput.addEventListener("input", () => {
  handleValidity(firstNameInput, firstNameWarning);
});

// Last name input event listener
lastNameInput.addEventListener("input", () => {
  handleValidity(lastNameInput, lastNameWarning);
});

// Password input event listener
passwordInput.addEventListener("input", () => {
  handleValidity(passwordInput, passwordWarning);
});

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    console.log("Form is valid");
  }
};

// Adding form submit event listener
submitButton.addEventListener("click", handleSubmit);
