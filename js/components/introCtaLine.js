// Libs
import ScrollMagic from "scrollmagic";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TweenMax, Power2, Power1, Elastic, TimelineMax } from "gsap";

export const introCtaLine = function() {
	const url = window.location.pathname;
	if( url === '/' || url.includes('index.html') || url === '' ){
		let offset = 0, screenWidth = $(window).width(), screenHeight = $(window).height();
		if(screenWidth < 600) offset = screenHeight / 2 - (screenHeight * .3);

		const line = $('#intro__cta-line'),
				lineController = new ScrollMagic.Controller(),
				tl = new TimelineMax({repeat:-1}),
				calcLineScene = new ScrollMagic.Scene({
					offset: offset,
					triggerHook: 1,
					triggerElement: '#intro__cta-line'
				})
				.on("enter", () => {
					tl.clear().repeat(0).to( '#intro__cta-line', 2.5, { ease: Power2.easeInOut, height: '97%' });
				})
				.on('end', () => {
					lineController.destroy()
				})
				.addTo(lineController);


		tl.to( '#intro__cta-line', 1, { ease: Elastic.easeOut.config(1, 0.4), height: '20%'})
			.to( '#intro__cta-line', 1, { ease: Power1.easeIn, height: '10%' });
	}
}