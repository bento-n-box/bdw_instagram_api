
jQuery(document).ready(function(){

	var url = 'https://api.instagram.com/v1/tags/sunset/media/recent?client_id=27d8b2c4b73f474ba5dbbc934ad67ef9&count=2';
	
	$('#nextPage').click(function(){
	
		$('body').append('<h1>NEW</h1>');
		getimage(url);

	});
	
	var getimage = function(url){
		console.log('in getimage');
		jQuery.ajax({
		url: url,
		dataType: 'jsonp',
		success: function(results){
			if (results.meta.code == 200){

				url = results.pagination.next_url;

				for (var x=0; x < results.data.length; x++){

					$('body').append('<img class="newImage" src="'+results.data[x].images.standard_resolution.url+'"/><h3>'+results.data[x].caption.text+'</h3>');

				}
			}
			else {
				console.log(results);
				$('body').append('<h1>'+results.meta.error_message+'</h1>');
			}	
		}

	});



	}

	getimage(url);

});