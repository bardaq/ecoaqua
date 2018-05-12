export const counter = function( el, val ) {
	function hideChars() {
			$(el.children('.counter-chars-splitted')[countLetterAnim]).animate({
				top: '20px', opacity: '0' }, 40, () => {
				if (el.text().length !== countLetterAnim + 1) {
					countLetterAnim++;
					hideChars()
				} else {
					countLetterAnim = 0;
					el.html(output);
					showChars()
				}
			})
		};

		function showChars() {
			$(el.children('.counter-chars-splitted')[countLetterAnim]).animate({ top: '0', opacity: '1' }, 40, () => {
				if (el.text().length != countLetterAnim) {
					countLetterAnim++;
					showChars()
				}
			})
		}

		let output = '', countLetterAnim = 0;
		for (var i = 0; i < val.length; i++) {
			val.charAt(i) != ' '
			? output += '<span class="counter-chars-splitted" style="position: relative; opacity: 0; top: -20px">' + val.charAt(i) + '</span>' : output += ' ';
		}
		hideChars();

}