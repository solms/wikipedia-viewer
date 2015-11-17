var first = true;
$(document).ready(function(){
	var URL_endpoint = 'https://en.wikipedia.org/w/api.php?';
	// React to changes in the search box
	$('#search').on('input', function(){
		if(first){
			$("#search-div").animate({
		        'height': '35px'
		    }, 1000);
		    $("#search").animate({
		        'margin-top' : '0px'
		    }, 1000);
		    first = false;
		}
		else if($('#search').val() == ''){
			$("#search-div").animate({
		        'height': '100%'
		    }, 1000);
		    $("#search").animate({
		        'margin-top' : '20%'
		    }, 1000);

		    first = true;
		}

		if($('#search').val() !== ''){
			var keywords = encodeURI($('#search').val());
			var URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&srlimit=50&srsearch='+keywords+'&format=json&callback=?';
			$.getJSON(URL, function(data){
				var search_results = data.query.search;
				var results = [];
				var link = 'https://en.wikipedia.org/wiki/';
				for(var i=0; i<search_results.length; i++){
					results.push({
						title	: search_results[i].title,
						snippet	: search_results[i].snippet,
						link	: link+(search_results[i].title).replace(/\s/g, '_')
					});
				}
				updateResults(results);
			});
		}		
	});
});

function updateResults(results){
	var html = '';
	for(var i=0; i<results.length; i++)
		html += '<a target="_blank" href="'+results[i].link+'"><div class="result"><b>'
				+results[i].title+'</b><br><i>'+results[i].snippet+')</i></div></a>';
	$('#results-div').html(html);
}