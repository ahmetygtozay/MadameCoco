document.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const countryCodeSelect = document.getElementById('country-code');

    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');

    firstNameInput.addEventListener('input', () => validateName(firstNameInput, firstNameError));
    lastNameInput.addEventListener('input', () => validateName(lastNameInput, lastNameError));
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    passwordInput.addEventListener('input', validatePassword);

    function validateName(input, errorElement) {
        const regex = /^[a-zA-Z]+$/;
        if (input.value === '') {
            errorElement.classList.remove('active');
            input.classList.remove('invalid');
            input.classList.remove('valid');
        } else if (!regex.test(input.value)) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.classList.add('active');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorElement.classList.remove('active');
        }
    }

    function validateEmail() {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value === '') {
            emailError.classList.remove('active');
            emailInput.classList.remove('invalid');
            emailInput.classList.remove('valid');
        } else if (!regex.test(emailInput.value)) {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.classList.add('active');
        } else {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailError.classList.remove('active');
        }
    }

    function validatePhone() {
        const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Only digits
        const regex = /^\d{10}$/; // Phone number should be 10 digits long

        if (phoneNumber === '') {
            phoneError.classList.remove('active');
            phoneInput.classList.remove('invalid');
            phoneInput.classList.remove('valid');
        } else if (!regex.test(phoneNumber)) {
            phoneInput.classList.add('invalid');
            phoneInput.classList.remove('valid');
            phoneError.classList.add('active');
        } else {
            phoneInput.classList.remove('invalid');
            phoneInput.classList.add('valid');
            phoneError.classList.remove('active');
        }

        // Apply formatting (e.g., (534) 69-48 564)
        const formattedPhone = formatPhoneNumber(phoneNumber);
        phoneInput.value = formattedPhone;
    }

    function formatPhoneNumber(phoneNumber) {
        // Make sure the phone number is 10 digits long
        if (phoneNumber.length <= 3) {
            return `(${phoneNumber}`;
        }
        if (phoneNumber.length <= 6) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
    }

    function validatePassword() {
        const password = passwordInput.value;
        const regex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (passwordInput.value === '') {
            passwordError.classList.remove('active');
            passwordInput.classList.remove('invalid');
            passwordInput.classList.remove('valid');
        } else if (!regex.test(password)) {
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.classList.add('active');
        } else {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            passwordError.classList.remove('active');
        }
    }

    

const lengthRule = document.getElementById('length-rule');
const uppercaseRule = document.getElementById('uppercase-rule');
const specialCharRule = document.getElementById('special-char-rule');

passwordInput.addEventListener('input', function() {
    const passwordValue = passwordInput.value;

    // 1. En az 8 karakter
    if (passwordValue.length >= 8) {
        lengthRule.classList.remove('red');
        lengthRule.classList.add('green');
    } else {
        lengthRule.classList.remove('green');
        lengthRule.classList.add('red');
    }

    // 2. En az bir büyük harf
    if (/[A-Z]/.test(passwordValue)) {
        uppercaseRule.classList.remove('red');
        uppercaseRule.classList.add('green');
    } else {
        uppercaseRule.classList.remove('green');
        uppercaseRule.classList.add('red');
    }

    // 3. En az bir özel karakter
    if (/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
        specialCharRule.classList.remove('red');
        specialCharRule.classList.add('green');
    } else {
        specialCharRule.classList.remove('green');
        specialCharRule.classList.add('red');
    }
});


    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        validateName(firstNameInput, firstNameError);
        validateName(lastNameInput, lastNameError);
        validateEmail();
        validatePhone();
        validatePassword();
       
})})

document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun otomatik submit olmasını engeller
    const popup = document.getElementById("success-popup");
    popup.classList.remove("hidden"); // Popup'u gösterir
});

document.getElementById("close-popup").addEventListener("click", function () {
    const popup = document.getElementById("success-popup");
    popup.classList.add("hidden"); // Popup'u gizler
});

