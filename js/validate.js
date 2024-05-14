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

function validateNumeroInput(){
    const numeroInput = document.getElementById('telefono').value;
    const errorNumero = document.getElementById('error-numero');
    const numeroRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; //este regex necesita mejorar
    if (numeroRegex.test(numeroInput)) {
        errorNumero.textContent = "" // numero is valid;
    } else {
        errorNumero.textContent = "Please enter a valid telephone number."; 
    };
}