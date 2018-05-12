export function product(){
	$( document ).ready(() => {
		const filterParametrsMin = ['EcoAqua F-91', 9000, 4999, 45, 0.9, 12000, 'есть', 'есть', 'есть', '123х123х32'],
					filterParametrsMid = ['EcoAqua F-92', 15000, 9999, 30, 1, 16000, 'есть', 'есть', 'есть', '123х123х32'],
					filterParametrsMax = ['EcoAqua F-92', 19000, 14999, 15, 1.5, 21000, 'есть', 'есть', 'есть', '123х123х32']

		$('.tab-pills__item').on('click', function(){
			if(! $(this).hasClass('active')){
				$('.tab-pills__item.active').removeClass('active');
				$(this).addClass('active');

				const filterParametrs = $('.filter-parametr');
				let output = '', countLetterAnim = 0;

				if( $(this).data("js") === 1 ){
					filterParametrs.each(function(index, el) { $(el).text(filterParametrsMin[index]) });
				} else if ( $(this).data("js") === 2 ){
					filterParametrs.each(function(index, el) { $(el).text(filterParametrsMid[index]) });
				} else {
					filterParametrs.each(function(index, el) { $(el).text(filterParametrsMax[index]) });
				}
			}
		})
	})
}