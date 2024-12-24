// Şifre değişim formunu göster
function showPasswordChangeForm() {
    document.getElementById("password-change-form").classList.toggle("hidden");
}

// Profil verilerini düzenlemeye başla
function enableEdit(field) {
    const inputField = document.getElementById(field);
    inputField.readOnly = !inputField.readOnly;
}

// Cinsiyet seçim fonksiyonu
function selectGender(gender) {
    const genderButtons = document.querySelectorAll(".gender-btn");
    genderButtons.forEach(btn => {
        btn.classList.remove("selected");
    });
    const selectedButton = document.querySelector(`.gender-btn[onclick="selectGender('${gender}')"]`);
    selectedButton.classList.add("selected");
}
