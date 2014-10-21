jQuery(document).ready(function() {

	var hashtag = 'RMNP';
	var url = 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?client_id=27d8b2c4b73f474ba5dbbc934ad67ef9&count=2';

	var getimage = function(url) {
		jQuery.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(results) {
				if (results.meta.code == 200) {
					url = results.pagination.next_url;

					for (var x = 0; x < results.data.length; x++) {
						$('body').append('<img class="newImage" src="' + results.data[x].images.standard_resolution.url + '"/><h3>' + results.data[x].caption.text + '</h3>');
					}
				} else {
					$('body').append('<h1>' + results.meta.error_message + '</h1>');
				}
			}
		});
	}

	getimage(url);

});