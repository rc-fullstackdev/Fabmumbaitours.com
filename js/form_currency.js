document.addEventListener("DOMContentLoaded", function () {
  var numberOfPeopleSelect = document.getElementById("numberOfPeople");
  var tourPackageInput = document.getElementById("tourPackage");
  var totalCostInput = document.getElementById("totalCost");

  numberOfPeopleSelect.addEventListener("change", function () {
    var selectedValue = numberOfPeopleSelect.value;

    switch (selectedValue) {
      case "1":
        tourPackageInput.value = "11500.00";
        break;
      case "2":
        tourPackageInput.value = "7200.00";
        break;
      case "3":
        tourPackageInput.value = "6500.00";
        break;
      case "4":
        tourPackageInput.value = "5800.00";
        break;
      case "5":
        tourPackageInput.value = "5095.00";
        break;
      default:
        tourPackageInput.value = "";
    }

    // Calculate total cost based on the selected number of people
    var totalCost = selectedValue * parseFloat(tourPackageInput.value);
    totalCostInput.value = totalCost.toFixed(2); // Display total cost with 2 decimal places
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var numberOfPeopleSelect = document.getElementById("numberOfPeople");
  var tourPackageInput = document.getElementById("tourPackage");
  var totalCostInput = document.getElementById("totalCost");
  var currencyDropdown = document.querySelector('.dropdown-menu');

  var conversionRates = {
      "INR": 1,    // Default currency
      "USD": 0.014, // Example conversion rate (1 INR = 0.014 USD)
      "EUR": 0.012 , // Example conversion rate (1 INR = 0.012 EUR)
      "GBP": 0.011  // Example conversion rate (1 INR = 0.012 EUR)
      // You should replace these values with actual conversion rates
  };

  var originalTourPackagePriceInINR;
  var originalTotalCostInINR;

  currencyDropdown.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default click behavior
      if (event.target.tagName === 'A') {
          var selectedCurrency = event.target.id;
          convertCurrency(selectedCurrency);
      }
  });

  function convertCurrency(selectedCurrency) {
      // Convert the original values from INR to the selected currency
      var convertedTourPackagePrice = originalTourPackagePriceInINR * conversionRates[selectedCurrency];
      var convertedTotalCost = originalTotalCostInINR * conversionRates[selectedCurrency];

      // Update the input values with the converted values
      tourPackageInput.value = convertedTourPackagePrice.toFixed(2);
      totalCostInput.value = convertedTotalCost.toFixed(2);
  }

  numberOfPeopleSelect.addEventListener("change", function () {
      // ... (your existing code for updating tour package price and total cost)

      // Store the original values in INR
      originalTourPackagePriceInINR = parseFloat(tourPackageInput.value);
      originalTotalCostInINR = parseFloat(totalCostInput.value);
  });
});








