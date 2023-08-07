// Get references to the input field and the get started link
const inputField = document.getElementById('email-header');
const getStartedLink = document.getElementById('getStartedLink');

// Add a click event listener to the get started link
getStartedLink.addEventListener('click', function() {
  // Check if the input value matches "stranger things"
  if (email-input.value.toLowerCase() === 'stranger things') {
    // If it does, redirect to another page
    window.location.href = 'index.html';
  }
});