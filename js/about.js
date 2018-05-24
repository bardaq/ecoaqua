import { nav } from './components/nav.js';
$(document).ready( function ()  {
	nav();
})


var map;
function initialize() {
	var mapOptions = {
		zoom: 4.7,
		center: new google.maps.LatLng(55.7850186,30.5204329),
		styles: [{"stylers":[{"hue":"#007fff"},{"saturation":89}]},{"featureType":"water","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]}],
		disableDefaultUI: true
	};
	map = new google.maps.Map(document.getElementById('map'),mapOptions);
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(55.848249, 37.569830),
		map: map,
		title: 'Технический офис. Москва, Стационарная 52'
	});
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(52.22038,20.9627579),
		map: map,
		title: 'Главный офис: Warszawa, Jana Kazimierza 30'
	});
	var marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(48.448398, 35.073244),
		map: map,
		title: 'Технический офис: Днепр, Набережна Перемоги, 30'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);