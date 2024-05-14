function validateEmailInput() {
    const emailInput = document.getElementById('email').value;
    const errorEmail = document.getElementById('error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      errorEmail.textContent = ""; // Email is valid
    } else {
      errorEmail.textContent = "Please enter a valid email address.";
    }
};