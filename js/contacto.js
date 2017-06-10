
document.querySelector('#form-contact').addEventListener('submit', function(e){
	var nombre = document.querySelector('#nombre').value;
	var email = document.querySelector('#email').value;
	var phone = document.querySelector('#phone').value;
	var respuesta = document.getElementById('#resp-env');

	$.ajax({
		url: 'https://cursos-kimvex.herokuapp.com/envio',
		method: 'POST',
		data: {
			nombre: nombre,
			email: email,
			phone: phone
		},
		success: function(data){
			if(data.dato){
				respuesta.innerHTML = 'Se han enviado los datos de pago a tu correo.';
			}else{
				respuesta.innerHTML = 'Ha sucedido un error, intentalo de nuevo.';
			}
		}
	});

	e.preventDefault();
});