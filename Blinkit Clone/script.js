const products = [
    {
        id: 1,
        title: "Product 1",
        price: 10.99,
        capacity:"100ml"
    }
]


const productContainer = document.getElementById('product-array');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `

                <img src="./lassi.avif" alt="Product" width="100%" height="100%">
                <div class="content">
                <p>8 mins</p>
                <h2>${product.title}</h2>
                <p>${product.capacity}</p>
                <div class="add-to-cart">
                    <p>Price</p>
                    <button class="add">Add</button>
                </div>
            </div>

    `;

    productContainer.appendChild(productCard);
});