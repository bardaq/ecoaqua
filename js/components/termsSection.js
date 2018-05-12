import ScrollMagic from "scrollmagic";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export const termsSection = function() {
	if ($(window).width() > 768) {
			const url = window.location.pathname;
			if( url === '/' || url.includes('index.html') || url === '' ){
				const termsController = new ScrollMagic.Controller(),
							termsImages = document.querySelectorAll(".terms-item__img");

				// GARANTY
				new ScrollMagic.Scene({
					triggerHook: 1,
					triggerElement: termsImages[0],
					duration: "300%"
				})
				.setTween(
					new TimelineLite()
						.to(termsImages[0], 1, { transform: 'rotate(-20deg)', ease: Linear.easeInOut }, 0)
						.to(termsImages[0], 1, { y: '-100%', ease: Linear.easeInOut }, 0)
						.to(termsImages[0], 1, { x: '10%', ease: Linear.easeInOut }, 0)
				)
				.addTo(termsController);

				//CARD
				new ScrollMagic.Scene({
					triggerHook: 1,
					triggerElement: termsImages[1],
					duration: "300%"
				})
				.setTween(
					new TimelineLite()
						.to(termsImages[1], 1, { transform: 'rotate(35deg)', ease: Linear.easeNone }, 0)
						.to(termsImages[1], 1, { y: '-30%', ease: Linear.easeNone }, 0)
						.to(termsImages[1], 1, { x: '10%', ease: Linear.easeNone }, 0)
				)
				.addTo(termsController);

				//PARCEL
				new ScrollMagic.Scene({
					triggerHook: 1,
					triggerElement: termsImages[2],
					duration: "200%"
				})
				.setTween(
					new TimelineLite()
						.to(termsImages[2], 1, { transform: 'rotate(-20deg)', ease: Linear.easeNone }, 0)
						.to(termsImages[2], 1, { y: '-60%', ease: Linear.easeNone }, 0)
						.to(termsImages[2], 1, { x: '-10%', ease: Linear.easeNone }, 0)
				)
				.addTo(termsController);

				//FILTER
				new ScrollMagic.Scene({
					triggerHook: 1,
					triggerElement: termsImages[3],
					duration: "200%"
				})
				.setTween(
					new TimelineLite()
						.to(termsImages[3], 1, { transform: 'rotate(35deg)', ease: Linear.easeNone }, 0)
						.to(termsImages[3], 1, { y: '-10%', ease: Linear.easeNone }, 0)
						.to(termsImages[3], 1, { x: '-20%', ease: Linear.easeNone }, 0)
				)
				.addTo(termsController);
			}
	}
}