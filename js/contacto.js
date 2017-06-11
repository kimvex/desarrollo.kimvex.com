
document.querySelector('#form-contact').addEventListener('submit', function(e){
	var nombre = document.querySelector('#nombre').value;
	var email = document.querySelector('#email').value;
	var phone = document.querySelector('#phone').value;
	var respuesta = document.getElementById('resp-env');

	var nombreLimpio = document.getElementById('nombre');
	var emailLimpio = document.getElementById('email');
	var phoneLimpio = document.getElementById('phone');

	respuesta.innerHTML = 'Espere un momento';
	

	$.ajax({
		url: 'https://cursos-kimvex.herokuapp.com/envio',
		method: 'POST',
		data: {
			nombre: nombre,
			email: email,
			phone: phone
		},
		success: function(data){
			
			if(data.data){
				respuesta.className = 'respuesta-envio';
				respuesta.innerHTML = 'Se han enviado los datos de pago a tu correo.';
				
				nombreLimpio.value = '';
				emailLimpio.value = '';
				phoneLimpio.value = '';

			}else{
				respuesta.className = 'respuesta-envio-error';
				respuesta.innerHTML = 'Ha sucedido un error, intentalo de nuevo.';
			}
		}
	});

	e.preventDefault();
});