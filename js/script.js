var feed = new Instafeed({
    get: 'user',
    accessToken: '416569799.1677ed0.1e2bf2e066ae43068d5157a7014033b2',
    clientId: '76c3279c838349e98d799054919aa2df',
    userId: '2040104098',
    limit: 10,
    resolution: 'standard_resolution'
});

var currentTime = new Date();
var year = currentTime.getFullYear();

feed.run();

$(function() {
	$('span.year').text(year);
	$('.main-gallery').flickity({
	  contain: true,
	  wrapAround: true,
	  pageDots: false
	});
	smoothScroll.init();
});