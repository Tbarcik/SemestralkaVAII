document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'CPU.JPG', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'CPU.JPG', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'CPU.JPG', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'CPU.JPG', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'product1.jpg', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'product1.jpg', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'product1.jpg', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'product1.jpg', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'product1.jpg', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },
        { name: 'Product 1', price: 25.99, description: 'Description for Product 1', image: 'product1.jpg', details: 'Details for Product 1: Ahoj, ako sa máš?' },
        { name: 'Product 2', price: 2, description: 'Description for Product 2', image: 'product2.jpg', details: 'Details for Product 2: Ahoj, ako sa máš?' },
        { name: 'Product 3', price: 28, description: 'Description for Product 3', image: 'product3.jpg', details: 'Details for Product 3: Ahoj, ako sa máš?' },


    ];

    const productContainer = document.getElementById('productGrid');
    const pageContainer = document.getElementById('pageContainer');
    const filterPriceInput = document.getElementById('filterPrice');
    const filterNameInput = document.getElementById('filterName');

    let currentPage = 1;
    const productsPerPage = 20;

    function applyFilters() {
        const maxPrice = parseFloat(filterPriceInput.value) || Infinity;
        const searchTerm = filterNameInput.value.toLowerCase();

        const filteredProducts = products.filter(product =>
            product.price <= maxPrice && product.name.toLowerCase().includes(searchTerm)
        );

        currentPage = 1;
        renderProducts(filteredProducts);
    }

    function renderProducts(products) {
        const paginatedProducts = paginateProducts(products, currentPage);

        productContainer.innerHTML = '';
        paginatedProducts.forEach(product => {
            const productBox = document.createElement('div');
            productBox.classList.add('product-box');
            productBox.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="view-details-btn" data-name="${product.name}" data-details="${product.details}" data-image="${product.image}" data-description="${product.description}">View Details</button>
            `;
            productContainer.appendChild(productBox);
        });

        renderPagination(products);
        assignViewDetailsEvent();
    }

    function paginateProducts(products, page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return products.slice(startIndex, endIndex);
    }

    function renderPagination(products) {
        const totalPages = Math.ceil(products.length / productsPerPage);

        pageContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => {
                currentPage = i;
                renderProducts(products);
            });
            pageContainer.appendChild(button);
        }
    }

    function assignViewDetailsEvent() {
        const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function () {
                const name = button.dataset.name;
                const details = button.dataset.details;
                const image = button.dataset.image;
                const description = button.dataset.description;
                openModal(name, details, image, description);
            });
        });
    }

    function openModal(name, details, image, description) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="closeModal()">&times;</span>
                <h2>${name}</h2>
                <img src="${image}" alt="${name}">
                <p>${details}</p>
                <p>Description: ${description}</p>
                <button id="closeModalBtn">Close</button>
            </div>
        `;
        document.body.appendChild(modal);


        const closeModalBtn = document.getElementById('closeModalBtn');
        closeModalBtn.addEventListener('click', closeModal);
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.remove();
        }
    }


    renderProducts(products);


    document.getElementById('applyFiltersBtn').addEventListener('click', applyFilters);
});
