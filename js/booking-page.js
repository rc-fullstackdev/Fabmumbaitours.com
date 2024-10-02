function registerTour(event) {
    event.preventDefault();  // Prevent the default form submission
    
    var tourPackage    = document.getElementById('tourPackage').value;
    var numberOfPeople = document.getElementById('numberOfPeople').value;
    var startDate      = document.getElementById('startDate').value;
    var preferredTime  = document.getElementById('preferredTime').value;
    var discountCode   = document.getElementById('discountCode').value;
    var totalCost      = document.getElementById('totalCost').value;
   
    // Replace 'APP_SCRIPT_URL' with your actual App Script URL
    var googleFormUrl = 'https://script.google.com/macros/s/AKfycbxqYW7ShI9JTTl1xfR_QYvlW8BvMSox9OsBb1bfeZp_Iychv90NON2PtAap6OxJmaGnrA/exec';

    var formData = new FormData();
    formData.append('entry.101712364', tourPackage);
    formData.append('entry.626323194', numberOfPeople);
    formData.append('entry.1180521769_day, entry.1180521769_month, entry.1180521769_year', startDate);
    formData.append('entry.236059718', preferredTime)
    formData.append('entry.831696633',discountCode)
    formData.append('entry.1768228878', totalCost)

    fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully:', response);

            // Clear the form values after successful submission
            document.getElementById('tourPackage').value = '';
            document.getElementById('numberOfPeople').value = '';
            document.getElementById('startDate').value = '';
            document.getElementById('preferredTime').value = '';
            document.getElementById('discountCode').value = '';
            document.getElementById('totalCost').value = '';

            // Display success message on the page
            alert('Form submitted successfully! Thank you.');
        } else {
            console.error('Error submitting form. Server responded with:', response.status);
            alert('Error submitting form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again later.');
    });
}
