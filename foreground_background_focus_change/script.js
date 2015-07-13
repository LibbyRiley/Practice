$(document).ready(function(){
	//  On double click, change blur to give the illusion of depth of field
	var $fg = $('.background');
	var $bg = $('.foreground');

	$bg.dblclick(function(){
		$bg.toggleClass('blur');
		$fg.toggleClass('blur');
	});
	$fg.dblclick(function() {
		$bg.toggleClass('blur');
		$fg.toggleClass('blur');
	});
});