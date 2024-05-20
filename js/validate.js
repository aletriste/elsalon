const formContacto = document.getElementById('form-contacto');

let emailValido = false;
let numeroValido = false;

formContacto.addEventListener('submit', (event) => {
	event.preventDefault();
	validateEmailInput();
	validateNumeroInput();

	if (numeroValido && emailValido) {
		datosValidos();
	}
});

function validateEmailInput() {
	const emailInput = document.getElementById('email').value;
	const errorEmail = document.getElementById('error-email');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (emailRegex.test(emailInput)) {
		errorEmail.textContent = ''; // Email es valido
		emailValido = true;
	} else {
		errorEmail.textContent = 'Por favor ingresa una direction de correo válida';
	}
}

function validateNumeroInput() {
	const numeroInput = document.getElementById('telefono').value;
	const errorNumero = document.getElementById('error-numero');
	const numeroRegex =
		/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/; //este regex necesita mejorar
	if (numeroRegex.test(numeroInput)) {
		errorNumero.textContent = ''; // numero es valido;
		numeroValido = true;
	} else {
		errorNumero.textContent = 'Por favor ingresa un número válido.';
	}
}

function datosValidos() {
	const datosValidos = document.getElementById('datos-validos');
	datosValidos.textContent = 'Los datos han sido enviados correctamente.';
	formContacto.reset();
}
