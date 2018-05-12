// Libs
import ScrollMagic from "scrollmagic";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export const sectionTransitions = function() {
	const url = window.location.pathname;
	if( url === '/' || url.includes('index.html') || url === '' ){
	const introSec = document.getElementById('intro-component'),
				calcSec = document.getElementById('calculator-component'),
				productVideoSec = document.getElementById('product-video-story-component'),
				vid = document.getElementById('video'),
				testerSec = document.getElementById('tester-component'),
				termsSec = document.getElementById('terms-component'),
				productSec = document.getElementById('product-component'),
				sectionTransitionsController = new ScrollMagic.Controller()
	function toggleBG(){
		$(introSec).toggleClass('greyBg');
		$(calcSec).toggleClass('greyBg');
		$(productVideoSec).toggleClass('greyBg');
		$(testerSec).toggleClass('greyBg');
		$(termsSec).toggleClass('greyBg');
		$(productSec).toggleClass('greyBg');
		$('#nav-desktop').toggleClass('dark');
	}

// INTRO => PRODUCT STORY
	const productVideoBgScene = new ScrollMagic.Scene({ triggerElement: productVideoSec, })
	.on('enter leave', function() { toggleBG() })
	.addTo(sectionTransitionsController)
//PRODUCT STORY => TESTER
	const testerBackgroundScene = new ScrollMagic.Scene({ triggerElement: testerSec })
	.on('enter leave', function() { toggleBG() })
	.addTo(sectionTransitionsController)
//TESTER => TERMS
	const termsBackgroundScene = new ScrollMagic.Scene({ triggerElement: termsSec })
	.on('enter leave', function() { toggleBG() })
	.addTo(sectionTransitionsController)
//TERMS => PRODUCT
	const productBackgroundScene = new ScrollMagic.Scene({ triggerElement: productSec })
	.on('enter leave', function() { toggleBG() })
	.addTo(sectionTransitionsController)
}
}