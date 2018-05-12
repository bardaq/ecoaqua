import ScrollMagic from "scrollmagic";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export const productVideoStory = function() {
	const url = window.location.pathname;
	if( url === '/' || url.includes('index.html') || url === '' ){
		const productVideoStoryController = new ScrollMagic.Controller(),
					testerSec = document.getElementById('tester-component'),
					vidContainer = document.getElementById('video-container'),
					vid = document.getElementById('video'),
					frameNumber = 0,
					playbackConst = 500,
					setHeight = document.getElementById("video-container"),
					containerHeight = Math.floor(vid.duration + 3) * playbackConst + "px";
		let firstFrame = 0;
		document.getElementById("product-video-story-component").style.height = containerHeight;

		const productVideoStoryTop = new ScrollMagic.Scene({
			triggerHook: 0,
			triggerElement: vidContainer,
			duration: containerHeight
		})
		.setPin(vidContainer)
		.on('enter', function(e){
			e.scrollDirection === 'FORWARD' ? $(vid).addClass('showVideo') : null;
			$(vid).play;
			firstFrame = !firstFrame ? window.pageYOffset : firstFrame;
			window.addEventListener( 'scroll', function(e) {
				const nextFrame = ( window.pageYOffset - firstFrame ) / playbackConst
				vid.currentTime = nextFrame
			})
		})
		.on('leave', function(e){
			e.scrollDirection === 'REVERSE' ? $(vid).removeClass('showVideo') : null;
		})
		//.addIndicators({ name: 'videoStory', offset: '200' })
		.addTo(productVideoStoryController);



		const endProductVideoStoryScene = new ScrollMagic.Scene({
			triggerHook: 1,
			triggerElement: testerSec
		})
		//.addIndicators({ name: 'end Product Story' })
		.on('enter leave', function(){
			$(vid).toggleClass('showVideo');
		})
		.addTo(productVideoStoryController);


		const step0Title = document.getElementById('PVS__frame0') ;
		const step0TitleScene = new ScrollMagic.Scene({
			triggerElement: step0Title,
			duration: "50%"
		})
		.setTween(step0Title, {opacity: "1", ease: Linear.easeNone})
		.addTo(productVideoStoryController);


		if ($(window).width() > 768) {
			const stepsSpans = document.querySelectorAll("span.step");
			for (var i=0; i<stepsSpans.length; i++) {
				const step1Scene = new ScrollMagic.Scene({
					triggerHook: 1,
					triggerElement: stepsSpans[i],
					duration: "200%"
				})
				.setTween(stepsSpans[i], {y: "80%", ease: Linear.easeNone})
				.addTo(productVideoStoryController);
			}
		}
	}
}