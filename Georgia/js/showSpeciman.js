

$(document).ready(function() {
	$('aside').on('click', 'button', function(){
		$.get('speciman.html', function(response){
				$('button').hide();
				$('#imgContainer').html(response).hide().fadeIn(800);
				
			}
		)
	});
});