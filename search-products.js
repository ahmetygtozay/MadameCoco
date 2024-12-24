document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');

    const products = [
        { id: 1, name: 'Banyo Seti', image: 'images/product1.jpg' },
        { id: 2, name: 'Yastık', image: 'images/product2.jpg' },
        { id: 3, name: 'Havlu', image: 'images/product3.jpg' },
        { id: 4, name: 'Lamba', image: 'images/product4.jpg' },
        { id: 5, name: 'Kahve Seti', image: 'images/product5.jpg' }
    ];

    // Ürünleri render etme
    function renderProducts(products) {
        productList.innerHTML = ''; // Önceki ürünleri temizle
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
            `;
            productList.appendChild(productItem);
        });
    }

    // Ürünleri filtreleme
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    }

    // İlk ürünleri render et
    renderProducts(products);

    // Arama kutusuna her yazıldığında filtreleme işlemi
    searchInput.addEventListener('input', filterProducts);
});
