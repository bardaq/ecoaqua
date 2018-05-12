import { counter } from './counter';

export const calculator = function () {
	$('.calculator input').keyup( e => {
		if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode <= 9  ) {
			const res = $('#calculator__peoples').val() * $('#calculator__liters').val() * $('#calculator__price').val() * 365;
			counter($('#calculator__result-counter'), res.toString());
		}
	});
}
