/*
*
*
* Navigation.
*
*/

export function nav(){

	const toggle = document.querySelectorAll(".toggle")[0],
				nav = document.querySelectorAll("#nav-component #nav-mobile")[0],
				toggle_open_text = 'Меню',
				toggle_close_text = 'X';

	toggle.addEventListener('click', function() {
		nav.classList.toggle('open');
		if (nav.classList.contains('open')) toggle.innerHTML = toggle_close_text;
		else toggle.innerHTML = toggle_open_text;
	}, false);

	setTimeout(function(){
			nav.classList.toggle('open');
	}, 800);

	const url = window.location.pathname;
	if( url !== '/' && !url.includes('index.html') && url !== '' ){
		$('a[href^="#"]').attr('href', function(i, href) {
			return '/index.html'+href;
		})
		$('#nav-about-us').html('Главная').attr('href', '/');
		$('#nav-desktop').addClass('dark');
	}

}

