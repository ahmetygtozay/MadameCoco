document.getElementById("new-password").addEventListener("input", function() {
    var newPassword = this.value;

    // Şifre gereksinimlerini kontrol et
    checkPasswordRequirements(newPassword);
});

document.getElementById("confirm-password").addEventListener("input", function() {
    var confirmPassword = this.value;
    var newPassword = document.getElementById("new-password").value;

    // Yeni şifre ile doğrulama şifresinin eşleşip eşleşmediğini kontrol et
    if (confirmPassword === newPassword) {
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
});

function checkPasswordRequirements(password) {
    var lengthCheck = document.getElementById("length");
    var uppercaseCheck = document.getElementById("uppercase");
    var specialCheck = document.getElementById("special");

    // En az 8 karakter
    if (password.length >= 8) {
        lengthCheck.classList.remove("invalid");
        lengthCheck.classList.add("valid");
    } else {
        lengthCheck.classList.remove("valid");
        lengthCheck.classList.add("invalid");
    }

    // En az bir büyük harf
    if (/[A-Z]/.test(password)) {
        uppercaseCheck.classList.remove("invalid");
        uppercaseCheck.classList.add("valid");
    } else {
        uppercaseCheck.classList.remove("valid");
        uppercaseCheck.classList.add("invalid");
    }

    // En az bir özel karakter
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        specialCheck.classList.remove("invalid");
        specialCheck.classList.add("valid");
    } else {
        specialCheck.classList.remove("valid");
        specialCheck.classList.add("invalid");
    }
    
}

document.getElementById("change-password-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engelle

    // Modal popup'ı göster
    const modal = document.getElementById("success-modal");
    modal.style.display = "flex";

    // Modal kapatma butonu
    document.getElementById("close-modal").addEventListener("click", function () {
        modal.style.display = "none";
    });
});
