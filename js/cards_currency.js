// // Add event listener to the currency conversion button
// document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
//     // Toggle between INR and USD on button click
//     toggleCurrency();
    
//     // Recalculate and update the total cost after currency toggle
//     calculateCost();
// });

// // Function to toggle currency
// function toggleCurrency() {
//     // Define the fixed exchange rate
//     var exchangeRate = 83;

//     // Get all elements with the class 'convertible'
//     var convertibleElements = document.querySelectorAll('.convertible');

//     // Toggle the currency conversion
//     var currentCurrency = document.body.getAttribute('data-currency');

//     if (!currentCurrency || currentCurrency === 'INR') {
//         // Prices are currently in INR, convert to USD
//         convertibleElements.forEach(function (priceElement) {
//             var currentPrice = parseFloat(priceElement.getAttribute('data-original').replace('₹', '').replace(',', ''));
//             var convertedPrice = (currentPrice / exchangeRate).toFixed(2);
//             priceElement.innerText = '$' + convertedPrice;
//         });

//         document.body.setAttribute('data-currency', 'USD');
//         document.getElementById('convertCurrencyBtn').innerText = 'INR (₹)';
//     } else {
//         // Prices are currently in USD, convert to INR
//         convertibleElements.forEach(function (priceElement) {
//             var originalPrice = priceElement.getAttribute('data-original');
//             priceElement.innerText = originalPrice;
//         });

//         document.body.setAttribute('data-currency', 'INR');
//         document.getElementById('convertCurrencyBtn').innerText = 'USD ($)';
//     }
// }

// // Function to calculate and update the total cost
// function calculateCost() {
//     var tourPackageValue = document.getElementById('tourPackage').value;
//     var numberOfPeopleValue = document.getElementById('numberOfPeople').value;
//     var discountCodeValue = document.getElementById('discountCode').value;

//     // Replace this with your actual logic for calculating the total cost
//     var baseCost = parseFloat(tourPackageValue);
//     var discount = 0;
    
//     // Add discount logic based on the discount code (replace with your actual logic)
//     if (discountCodeValue === 'DISCOUNT10') {
//         discount = 0.1 * baseCost; // 10% discount
//     }

//     var totalCost = (baseCost * numberOfPeopleValue - discount).toFixed(2);

//     // Update the total cost input
//     var totalCostInput = document.getElementById('totalCost');
    
//     // Check the current currency and update accordingly
//     var currentCurrency = document.body.getAttribute('data-currency');
    
//     if (currentCurrency === 'INR') {
//         totalCostInput.value = totalCost;
//     } else {
//         // Convert the total cost to USD
//         var exchangeRate = 83;
//         var totalCostUSD = (totalCost / exchangeRate).toFixed(2);
//         totalCostInput.value = '$' + totalCostUSD;
//     }
// }

// // Save original prices to data attributes on page load
// document.addEventListener('DOMContentLoaded', function () {
//     var convertibleElements = document.querySelectorAll('.convertible');

//     convertibleElements.forEach(function (priceElement, index) {
//         var originalPrice = priceElement.innerText;
//         priceElement.setAttribute('data-original', originalPrice);
//     });
// });
// _____________________________________It is Working_____________________________________________________


// function changeCurrency(currency) {
//     // Get all elements with class 'price convertible'
//     var prices = document.querySelectorAll('.price.convertible');

//     // Check if original prices are stored in local storage
//     var originalPrices = JSON.parse(localStorage.getItem('originalPrices'));

//     // If original prices are not stored, store them
//     if (!originalPrices) {
//         originalPrices = [];
//         prices.forEach(function(price) {
//             originalPrices.push(price.textContent.trim());
//         });
//         localStorage.setItem('originalPrices', JSON.stringify(originalPrices));
//     }

//     // Iterate through each price element
//     prices.forEach(function(price, index) {
//         // Get the original price from the stored array
//         var originalPrice = originalPrices[index];

//         // Convert the original price to the selected currency
//         var convertedPrice = convertPrice(originalPrice, currency);

//         // Update the price text with the converted value
//         price.textContent = convertedPrice;
//     });

//     // Prevent default behavior of the <a> tag
//     event.preventDefault();
// }


// function convertPrice(originalPrice, currency) {
//     // Define your conversion rates here
//     var conversionRates = {
//         'INR': 1,   // 1 INR = 1 INR
//         'USD': 0.014,  // 1 INR = 0.014 USD (example conversion rate)
//         'EUR': 0.012,  // Example conversion rate
//         'GBP': 0.011   // Example conversion rate
//         // Add more conversion rates as needed
//     };

//     // Remove currency symbol and commas, convert to float
//     var amount = parseFloat(originalPrice.replace(/[^\d.]/g, ''));

//     // Perform conversion
//     var convertedAmount = amount * conversionRates[currency];

//     // Format the converted amount according to the currency
//     switch(currency) {
//         case 'INR':
//             return '₹' + convertedAmount.toFixed(2); // Format for INR
//         case 'USD':
//             return '$' + convertedAmount.toFixed(2); // Format for USD
//         case 'EUR':
//             return '€' + convertedAmount.toFixed(2); // Format for EUR
//         case 'GBP':
//             return '£' + convertedAmount.toFixed(2); // Format for GBP
//         default:
//             return originalPrice; // If currency not found, return original
//     }
// }

//___________________________________________IT IS WORKING FOR ONLY CARDS______________________________________________________________________

function changeCurrency(currency) {
    // Get all elements with class 'price convertible'
    var prices = document.querySelectorAll('.price.convertible');

    // Check if original prices are stored in local storage
    var originalPrices = JSON.parse(localStorage.getItem('originalPrices'));

    // If original prices are not stored, store them
    if (!originalPrices) {
        originalPrices = [];
        prices.forEach(function(price) {
            originalPrices.push(price.textContent.trim());
        });
        localStorage.setItem('originalPrices', JSON.stringify(originalPrices));
    }

    // Iterate through each price element
    prices.forEach(function(price, index) {
        // Get the original price from the stored array
        var originalPrice = originalPrices[index];

        // Convert the original price to the selected currency
        var convertedPrice = convertPrice(originalPrice, currency);

        // Update the price text with the converted value
        price.textContent = convertedPrice;
    });

    // Prevent default behavior of the <a> tag
    event.preventDefault();
}


function convertPrice(originalPrice, currency) {
    // Define your conversion rates here
    var conversionRates = {
        'INR': 1,   // 1 INR = 1 INR
        'USD': 0.014,  // 1 INR = 0.014 USD (example conversion rate)
        'EUR': 0.012,  // Example conversion rate
        'GBP': 0.011   // Example conversion rate
        // Add more conversion rates as needed
    };

    // Remove currency symbol and commas, convert to float
    var amount = parseFloat(originalPrice.replace(/[^\d.]/g, ''));

    // Perform conversion
    var convertedAmount = amount * conversionRates[currency];

    // Format the converted amount according to the currency
    switch(currency) {
        case 'INR':
            // Format INR with commas and two decimal places
            return '₹' + convertedAmount.toLocaleString('en-IN', {maximumFractionDigits: 2, minimumFractionDigits: 2}); 
        case 'USD':
            // Format for USD with two decimal places
            return '$' + convertedAmount.toFixed(2); 
        case 'EUR':
            // Format for EUR with two decimal places
            return '€' + convertedAmount.toFixed(2); 
        case 'GBP':
            // Format for GBP with two decimal places
            return '£' + convertedAmount.toFixed(2); 
        default:
            return originalPrice; // If currency not found, return original
    }
}

// ________________________________________________________________________________________________________________________

















