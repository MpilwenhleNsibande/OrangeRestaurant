// Select the form element
const form = document.getElementById("contact-form");

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission logic
    alert("Thank you for your message! We'll get back to you soon.");

    // Clear the form fields after each submission
    form.reset();
});

