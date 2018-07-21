$(document).ready(function(){
	for(var i = 1; i <= 6; i++){
		var img = '<img src="assets/img/anuncio.png" class="img_instagram">';
		$("#anuncio-instragram").append(img);
	}

	for(var x = 1; x <=2; x++) {
		var destaques = '<img src="assets/img/coluna_1.png" style="cursor: pointer;">';
		$('.destaques').append(destaques);
	}

	/* Validação Newletter */
	$("#newsletter").validate({
		errorLabelContainer: "#error_msg",
		wrapper: "div",
		rules: {
			newsletter_inp: {
				required: true
			}
		},
		messages: {
			newsletter_inp: "Infome seu E-mail"
		}
	})
})