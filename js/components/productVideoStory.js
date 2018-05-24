import ScrollMagic from "scrollmagic";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export const productVideoStory = function() {
    const productVideoStoryController = new ScrollMagic.Controller(),
          section = document.getElementById("product-video-story-component"),
          testerSec = document.getElementById('tester-component'),
          vid = document.getElementById('video'),
          frameNumber = 0,
          playbackConst = 500,
          containerHeight = ((Math.floor(vid.duration + 1) * playbackConst )-500) + "px";
    let firstFrame = 0;
    section.style.height = containerHeight;

    const productVideoStoryTop = new ScrollMagic.Scene({
      triggerElement: section,
      duration: containerHeight
    })
    .on('enter top', function(e){
      $('.background-blue').stop().animate({opacity: 0}, 300, function() {
        $(vid).stop().animate({opacity: 1}, 300)
        $('#nav-desktop').addClass('blackText');
      })
      $(vid).fadeToggle("400");
      firstFrame = !firstFrame ? window.pageYOffset : firstFrame;
      window.addEventListener( 'scroll', function(e) {
        const nextFrame = ( window.pageYOffset - firstFrame ) / playbackConst
        vid.currentTime = nextFrame
      })
    })
    .on('leave', function(e){
      $(vid).stop().animate({opacity: 0}, 300, function() {
        $('#nav-desktop').removeClass('blackText');
        $('.background-blue').stop().animate({opacity: 1}, 300);
      })
    })
    //.addIndicators({ name: 'videoStory', offset: '200' })
    .addTo(productVideoStoryController);


    const step0Title = document.getElementById('PVS__frame0') ;
    const step0TitleScene = new ScrollMagic.Scene({
      triggerElement: step0Title,
      duration: "50%"
    })
    .setTween(step0Title, {opacity: "1", ease: Linear.easeNone})
    .addTo(productVideoStoryController);


    if ($(window).width() >= 768) {
      const stepsSpans = document.querySelectorAll("span.step");
      for (var i=0; i<stepsSpans.length; i++) {
        const step1Scene = new ScrollMagic.Scene({
          triggerHook: 1,
          triggerElement: stepsSpans[i],
          duration: containerHeight
        })
        .setTween(stepsSpans[i], {y: "200%", ease: Linear.easeNone})
        .addTo(productVideoStoryController);
      }
    }
}