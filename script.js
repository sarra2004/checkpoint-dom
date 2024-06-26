document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.card'); // Select all product cards

    products.forEach(product => {
        const plusBtn = product.querySelector('.fa-plus-circle');
        const minusBtn = product.querySelector('.fa-minus-circle');
        const trashBtn = product.querySelector('.fa-trash-alt');
        const heartBtn = product.querySelector('.fa-heart');
        const quantityElement = product.querySelector('.quantity');
        const unitPriceElement = product.querySelector('.unit-price');
        const totalPriceElement = document.querySelector('.total');

        let unitPrice = parseFloat(unitPriceElement.textContent.replace('$', '').trim());
        let quantity = parseInt(quantityElement.textContent);

        // Function to update total price
        function updateTotalPrice() {
            let total = 0;
            products.forEach(prod => {
                const prodQuantity = parseInt(prod.querySelector('.quantity').textContent);
                const prodUnitPrice = parseFloat(prod.querySelector('.unit-price').textContent.replace('$', '').trim());
                total += prodQuantity * prodUnitPrice;
            });
            totalPriceElement.textContent = total.toFixed(2) + ' $';
        }

        // Plus button click event
        plusBtn.addEventListener('click', function() {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        // Minus button click event
        minusBtn.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        // Trash button click event
        trashBtn.addEventListener('click', function() {
            product.remove(); 
            updateTotalPrice();
        });

        // Heart button click event (toggle class to change color)
        heartBtn.addEventListener('click', function() {
            heartBtn.classList.toggle('liked'); 
        });
       
    });
});