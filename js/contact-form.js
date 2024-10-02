function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
    var googleFormUrl = 'https://script.google.com/macros/s/AKfycbyDJuWfeSSENytZxOwfg_T3R7e71tfkhj1mdaNJVqnTQnmzQPZgKj2Vdngyum4ICLsovw/exec';

    var formData = new FormData();
    formData.append('entry.1439917167', name);
    formData.append('entry.5816732', email);
    formData.append('entry.2054302966', message);

    fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully:', response);

            // Clear the form values after successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

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
