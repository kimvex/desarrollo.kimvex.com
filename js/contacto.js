
document.querySelector('#form-contact').addEventListener('submit', function(e){
	var nombre = document.querySelector('#nombre').value;
	var email = document.querySelector('#email').value;
	var phone = document.querySelector('#phone').value;

	$.ajax({
		url: 'https://cursos-kimvex.herokuapp.com/envio',
		method: 'POST',
		data: JSON.stringify({
			nombre: nombre,
			email: email,
			phone: phone
		})
	});

	e.preventDefault();
});