export const preloader = function(){
	const url = window.location.pathname;
	if( url === '/' || url.includes('index.html') || url === '' ){
		document.getElementById('body').classList.add('stop-scroll');
		var width = 100,
				perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
				EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
				time = parseInt((EstimatedTime/1000)%60)*100;

		var PercentageID = $("#preloader__counter"),
				start = 0,
				end = 100,
				durataion = time;
				animateValue(PercentageID, start, end, durataion);

		function animateValue(id, start, end, duration) {
			var range = end - start,
					current = start,
					increment = end > start? 1 : -1,
					stepTime = Math.abs(Math.floor(duration / range)),
					obj = $(id);

			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current + "%");
				if (current == end) clearInterval(timer);
			}, stepTime);
		}

		// Fading Out Loadbar on Finised
		setTimeout(function(){
			document.getElementById('preloader').classList.add('doneCollapseLeft');
			document.getElementById('preloader__container').classList.add('doneContainer');
			document.getElementById('body').classList.remove('stop-scroll');
		}, time);
	}

}