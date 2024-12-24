document.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const districtInput = document.getElementById('district');
    const postalCodeInput = document.getElementById('postal-code');
    const paymentMethodSelect = document.getElementById('payment-method');
    const cvvInput = document.getElementById('cvv');
    const expDateInput = document.getElementById('exp-date');

    const errors = {
        firstNameError: document.getElementById('first-name-error'),
        lastNameError: document.getElementById('last-name-error'),
        emailError: document.getElementById('email-error'),
        phoneError: document.getElementById('phone-error'),
        addressError: document.getElementById('address-error'),
        cityError: document.getElementById('city-error'),
        districtError: document.getElementById('district-error'),
        postalCodeError: document.getElementById('postal-code-error'),
        paymentMethodError: document.getElementById('payment-method-error'),
        cvvError: document.getElementById('cvv-error'),
        expDateError: document.getElementById('exp-date-error')
    };

    const errorMessages = {
        required: 'Bu alan zorunludur.',
        invalidName: 'Sadece harf içermelidir.',
        invalidEmail: 'Geçerli bir e-posta adresi girin.',
        invalidPhone: 'Telefon numarası 10 haneli olmalıdır.',
        invalidPostalCode: 'Posta kodu 5 haneli bir sayı olmalıdır.',
        invalidCVV: 'CVV 3 veya 4 haneli olmalıdır.',
        invalidExpDate: 'Son kullanma tarihi MM/YY formatında olmalıdır.',
        invalidPaymentMethod: 'Ödeme yöntemi seçilmelidir.'
    };

    firstNameInput.addEventListener('input', () => validateName(firstNameInput, errors.firstNameError));
    lastNameInput.addEventListener('input', () => validateName(lastNameInput, errors.lastNameError));
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    addressInput.addEventListener('input', () => validateField(addressInput, errors.addressError));
    cityInput.addEventListener('input', () => validateField(cityInput, errors.cityError));
    districtInput.addEventListener('input', () => validateField(districtInput, errors.districtError));
    postalCodeInput.addEventListener('input', () => validatePostalCode(postalCodeInput, errors.postalCodeError));
    paymentMethodSelect.addEventListener('change', validatePaymentMethod);
    cvvInput.addEventListener('input', validateCVV);
    expDateInput.addEventListener('input', validateExpDate);

    function setError(input, errorElement, message) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }

    function clearError(input, errorElement) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        errorElement.textContent = '';
        errorElement.classList.remove('active');
    }

    function validateName(input, errorElement) {
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/;
        if (input.value === '') {
            setError(input, errorElement, errorMessages.required);
        } else if (!regex.test(input.value)) {
            setError(input, errorElement, errorMessages.invalidName);
        } else {
            clearError(input, errorElement);
        }
    }

    function validateEmail() {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(emailInput.value)) {
            setError(emailInput, errors.emailError, errorMessages.invalidEmail);
        } else {
            clearError(emailInput, errors.emailError);
        }
    }

    function validatePhone() {
        const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Sadece rakamlar
        const regex = /^\d{10}$/; // Telefon numarası 10 haneli olmalı

        if (phoneNumber === '') {
            setError(phoneInput, errors.phoneError, errorMessages.required);
        } else if (!regex.test(phoneNumber)) {
            setError(phoneInput, errors.phoneError, errorMessages.invalidPhone);
        } else {
            clearError(phoneInput, errors.phoneError);
        }

        // Formatlama
        phoneInput.value = formatPhoneNumber(phoneNumber);
    }

    function formatPhoneNumber(phoneNumber) {
        if (phoneNumber.length <= 3) {
            return `(${phoneNumber}`;
        }
        if (phoneNumber.length <= 6) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8)}`;
    }

    function validateField(input, errorElement) {
        if (input.value === '') {
            setError(input, errorElement, errorMessages.required);
        } else {
            clearError(input, errorElement);
        }
    }

    function validatePostalCode(input, errorElement) {
        const regex = /^\d{5}$/;
        if (!regex.test(input.value)) {
            setError(input, errorElement, errorMessages.invalidPostalCode);
        } else {
            clearError(input, errorElement);
        }
    }

    function validatePaymentMethod() {
        if (paymentMethodSelect.value === '') {
            setError(paymentMethodSelect, errors.paymentMethodError, errorMessages.invalidPaymentMethod);
        } else {
            clearError(paymentMethodSelect, errors.paymentMethodError);
        }
    }

    function validateCVV() {
        const regex = /^\d{3,4}$/;
        if (!regex.test(cvvInput.value)) {
            setError(cvvInput, errors.cvvError, errorMessages.invalidCVV);
        } else {
            clearError(cvvInput, errors.cvvError);
        }
    }

    function validateExpDate() {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!regex.test(expDateInput.value)) {
            setError(expDateInput, errors.expDateError, errorMessages.invalidExpDate);
        } else {
            clearError(expDateInput, errors.expDateError);
        }
    }

    const form = document.getElementById('purchase-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        validateName(firstNameInput, errors.firstNameError);
        validateName(lastNameInput, errors.lastNameError);
        validateEmail();
        validatePhone();
        validateField(addressInput, errors.addressError);
        validateField(cityInput, errors.cityError);
        validateField(districtInput, errors.districtError);
        validatePostalCode(postalCodeInput, errors.postalCodeError);
        validatePaymentMethod();
        validateCVV();
        validateExpDate();
    }
});
