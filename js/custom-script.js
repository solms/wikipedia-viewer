$(document).ready(function(){
	var URL_endpoint = 'https://en.wikipedia.org/w/api.php?';
	// React to changes in the search box
	$('#search-box').on('input', function(){
		var URL = URL_endpoint+'action=query&titles='+$(this).val();
		console.log(URL);
	});
});