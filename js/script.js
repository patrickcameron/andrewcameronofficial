var feed = new Instafeed({
    get: 'user',
    accessToken: '2040104098.1677ed0.45caa4d3a9e349a0897d70909fe0f5f7',
    clientId: '76c3279c838349e98d799054919aa2df',
    userId: '2040104098',
    limit: 10,
    resolution: 'standard_resolution',
    success: function() {
    	$('section.instagram').show();
    }
});

var currentTime = new Date();
var year = currentTime.getFullYear();

feed.run();

$(function() {
	$('span.year').text(year);

	$('.main-gallery').flickity({
	  contain: true,
	  wrapAround: true,
	  pageDots: false,
	  imagesLoaded: true
	});

	smoothScroll.init();

});