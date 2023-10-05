const ratingButtons = document.querySelectorAll('.rating_btns button');
const submitButton = document.querySelector('.submit_btn');
const ratingContainer = document.getElementById('ratingContainer');
const thankYouMessage = document.getElementById('thankYouMessage');
const selectedRatingElement = document.getElementById('selectedRating');

// Add click event listeners to toggle the 'active' class
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'active' class from all buttons
    ratingButtons.forEach(btn => btn.classList.remove('active'));

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    const selectedRating = button.textContent;
    selectedRatingElement.textContent = selectedRating;
  });
});


  // Add click event listener to the submit button
  submitButton.addEventListener('click', () => {
    // Check if any of the rating buttons is active
    const isActive = [...ratingButtons].some(button => button.classList.contains('active'));

    if (isActive) {
      // Hide the container
      ratingContainer.style.display = 'none';

      // Display the "Thank you" message
      thankYouMessage.style.display = 'block';
    } else {
      // Handle the case where none of the buttons is active
      alert('Please select a rating before submitting.');
    }
  });