let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;



//   // Auto play after 3 seconds
  setTimeout(function () {
    plusSlides(1);
  }, 3000);
}




//form

function calculateCost() {
  var numberOfPeople = parseFloat(document.getElementById('numberOfPeople').value);
  var tourPackage;

  switch (numberOfPeople) {
      case 1:
          tourPackage = 11500; // Set tour package amount for 1 person
          break;
      case 2:
          tourPackage = 7200; // Set tour package amount for 2 people
          break;
      case 3:
          tourPackage = 6500; // Set tour package amount for 3 people
          break;
      
      case 4:
          tourPackage = 5800; // Set tour package amount for 3 people
          break;
      
      case 5:
          tourPackage = 5095; // Set tour package amount for 3 people
          break;
      
      default:
          tourPackage = 0; // Default to 0 if none selected
  }

  document.getElementById('tourPackage').value = tourPackage.toFixed(2);

  var totalAmount = tourPackage * numberOfPeople;
  document.getElementById('totalCost').value = totalAmount.toFixed(2);
}

function validateForm() {
  // Add your validation logic here
  var tourPackage = document.getElementById("tourPackage").value;
  var numberOfPeople = document.getElementById("numberOfPeople").value;
  var startDate = document.getElementById("startDate").value;

  if (!tourPackage || !numberOfPeople || !startDate) {
      alert("Please fill in all required fields.");
      return false;
  }

  return true;
}

function registerTour() {
  // Validate the form
  if (!validateForm()) {
      return;
  }

  // Get form data
  var tourPackage = document.getElementById("tourPackage").value;
  var numberOfPeople = document.getElementById("numberOfPeople").value;
  var startDate = document.getElementById("startDate").value;
  var preferredTime = document.getElementById("preferredTime").value;
  var discountCode = document.getElementById("discountCode").value;
  var totalCost = document.getElementById("totalCost").value;

  // Construct the WhatsApp message
  var messageText = `
  Tour Package Amount: ${tourPackage}
  Number of People: ${numberOfPeople}
  Start Date: ${startDate}
  Preferred Time: ${preferredTime}
  Discount Code: ${discountCode}
  Total Cost: ${totalCost}`;

  // Construct the WhatsApp message URL
  var phoneNumber = "+918265025800";
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(messageText);

  // Open WhatsApp window
  window.open(url, "_blank").focus();
}

  // Construct the WhatsApp message URL
  var phoneNumber = "+918265025800";
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(messageText);

  // Open WhatsApp window
  window.open(url, "_blank").focus();


// whats-app button

// Open the WhatsApp contact panel
function openPanel() {
  document.getElementById('whatsapp-panel').style.display = 'block';
}

// Close the WhatsApp contact panel
function closePanel() {
  document.getElementById('whatsapp-panel').style.display = 'none';
}

// Open WhatsApp for chat
function openWhatsApp(phoneNumber) {
  var text = `
  Tour Package:`;
  var whatsappLink = 'https://wa.me/' + phoneNumber + "?text" + encodeURIComponent(text);;
  window.open(whatsappLink, '_blank');
}

// Attach click event to the WhatsApp button
document.getElementById('whatsapp-button').addEventListener('click', openPanel);



// // Set the minimum date to today
// document.addEventListener("DOMContentLoaded", function () {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
//   var yyyy = today.getFullYear();

//   today = yyyy + '-' + mm + '-' + dd;
//   document.getElementById('startDate').min = today;
// });

