'use strict'

import { preloader } from './components/preloader.js';

// Components
import { nav } from './components/nav.js';
import { introCtaLine } from './components/introCtaLine.js';
import { calculator } from './components/calculator.js';
import { productVideoStory } from './components/productVideoStory.js';
import { sectionTransitions } from './components/sectionTransitions.js';
import { termsSection } from './components/termsSection.js';
import { product } from './components/product.js';
import { formGeneral } from './components/formGeneral.js';
import { modals } from './components/modals.js';
import { smoothScroll } from './components/smoothScroll.js';
import { emailSender } from './components/emailSender.js';
import { setHostNameInText } from './components/setHostNameInText.js';

preloader()
window.onload = function(){
	setHostNameInText();
	smoothScroll();
	$("body").children().each(function() { $(this).html($(this).html().replace(/&#8232;/g," ")); });
	introCtaLine();
	nav();
	calculator();
	sectionTransitions();
	termsSection();
	product();
	formGeneral();
	modals();
	emailSender();
	document.getElementById('video').onloadeddata = function(){
    productVideoStory();
  };
}