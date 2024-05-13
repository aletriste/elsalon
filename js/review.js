const divReview = document.querySelector('#review');

const reviews = [
	'¡Excelente servicio! Siempre salgo sintiéndome renovada.',
	'El personal es muy amable y profesional. ¡Volveré pronto!',
	'Me encanta cómo quedó mi cabello, ¡gracias por el increíble trabajo!',
	'El ambiente del salón es relajante y acogedor. Perfecto para desconectar un rato.',
	'¡Mis uñas lucen fabulosas! Definitivamente recomendaré este lugar a mis amigas.',
	'El masaje fue increíblemente relajante. ¡5 estrellas!',
	'¡Mi experiencia en este salón fue fantástica! No puedo esperar para volver.',
	'Los productos que utilizan son de alta calidad. Se nota en los resultados.',
	'El equipo de estilistas es talentoso y atento a mis necesidades.',
	'¡Qué maravilla de tratamiento facial! Mi piel luce radiante. Gracias.',
];

const generateUser = (index) => {
	let user = {};
	fetch('https://randomuser.me/api/')
		.then((results) => {
			return results.json();
		})
		.then((data) => {
			user = data.results[0];
			agregarHTML(user, index);
		});
};

function agregarHTML(user, index) {
	console.log(user);

	divReview.insertAdjacentHTML(
		'beforeend',
		`
		<div class="review_user">
			<h3>${user.name.first} ${user.name.last}</h3>
			<img src=${user.picture.large} alt=${user.name} />

			<p> <b>Reseña:</b> ${reviews[index]}</p>
		</div>
	`
	);
}

for (let index = 0; index < 4; index++) {
	generateUser(index);
}
