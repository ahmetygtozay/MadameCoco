let cartCount = 0;

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const cartCountElement = document.getElementById('cart-count');
const productCountElement = document.getElementById('product-count');

// Sepet sayısını güncelleyen fonksiyon
function updateCartCount() {
    if (cartCount > 0) {
        cartCountElement.textContent = cartCount; // Sepet sayısını güncelle
        cartCountElement.style.display = 'block'; // Sayıyı göster
    } else {
        cartCountElement.style.display = 'none'; // Sayıyı gizle
    }

    productCountElement.textContent = cartCount; // Ürün miktarını göster
}

// `+` butonuna tıklanma işlemi
increaseButton.addEventListener('click', () => {
    cartCount++;
    updateCartCount(); // Sayıyı güncelle
});

// `-` butonuna tıklanma işlemi
decreaseButton.addEventListener('click', () => {
    if (cartCount > 0) {
        cartCount--;
        updateCartCount(); // Sayıyı güncelle
    }
});
