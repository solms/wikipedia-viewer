var first = true;
$(document).ready(function(){
	var URL_endpoint = 'https://en.wikipedia.org/w/api.php?';
	// React to changes in the search box
	$('#search').on('input', function(){
		if(first){
			$("#search-div").animate({
		        height: '35px'
		    }, 1000);
		    $("#search").animate({
		        'margin-top' : '0px'
		    }, 1000);
		    first = false;
		}
		else if($('#search').val() == ''){
			$("#search-div").animate({
		        height: '100%'
		    }, 1000);
		    $("#search").animate({
		        'margin-top' : '20%'
		    }, 1000);

		    first = true;
		}

		if($('#search').val() !== ''){
			var URL = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json'; //URL_endpoint+'action=query&titles='+$(this).val()+'&format=jsonfm';
			$.getJSON(URL, function(data){
				console.log(data);
			});
		}		
	});
});