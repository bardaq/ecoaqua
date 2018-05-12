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
import { modals } from './components/modals.js';
import { smoothScroll } from './components/smoothScroll.js';
import { emailSender } from './components/emailSender.js';
import { setHostNameInText } from './components/setHostNameInText.js';
import { antiLsep } from './components/antiLsep.js';

window.onload = function(){
	preloader()
	setHostNameInText();
	smoothScroll();
	introCtaLine();
	nav();
	calculator();
	productVideoStory();
	sectionTransitions();
	termsSection();
	product();
	modals();
	emailSender();
	antiLsep();
}