'use strict'
import { preloader } from './components/preloader.js';
import { nav } from './components/nav.js';
import { calculator } from './components/calculator.js';
import { productVideoStory } from './components/productVideoStory.js';
import { sectionTransitions } from './components/sectionTransitions.js';
import { termsSection } from './components/termsSection.js';
import { product } from './components/product.js';
import { modals } from './components/modals.js';
import { smoothScroll } from './components/smoothScroll.js';
import { emailSender } from './components/emailSender.js';
import { setHostNameInText } from './components/setHostNameInText.js';
// import { antiLsep } from './components/antiLsep.js';


const url = window.location.pathname;
if( url === '/' || url.includes('index.html') || url === '' ){
	preloader()
}

window.onload = function(){
	setHostNameInText();
	// antiLsep();
	nav();
	//sectionTransitions();
	emailSender();
	if( url === '/' || url.includes('index.html') || url === '' ){
		product();
		modals();
		calculator();
		if ($(window).width() >= 768) {
			productVideoStory()
			//document.getElementById('video').onloadeddata = function(){  };
		}
		smoothScroll();
	}
}
