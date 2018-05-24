/*******************************************
*
*
*   Email sender
*   –––––––––––––
*
*********************************************/

export function emailSender() {
	$('.purchase__submit a.btn').on('click', function(e){
		e.preventDefault();
		const
				model = $('.tab-pills__item').data('js'),
				setup = $('#purchase #checkbox').attr('checked'),
				city = $('#purchase #city select').val(),
				adress = $('#purchase #adress').val(),
				name = $('#purchase #name').val(),
				email = $('#purchase #email').val(),
				phone = $('#purchase #phone').val(),
				summaryAmount = $('#purchase #summary-amount').html();
		//console.log('22 model: ' + model, 'setup: ' + setup, 'city: ' + city, 'adress: ' + adress, 'name: ' + name, 'email: ' + email, 'phone: ' + phone, 'summaryAmount: '+ summaryAmount);

		if( city === 'Ваш город' ){ addErrorClass( $('#city') ) }
		if( adress.length < 6 ){ addErrorClass( $('#adress') ) }
		if( name.length < 4 ){ addErrorClass( $('#name') ) }
		if( email.length < 4 || !email.includes('@') ){ addErrorClass( $('#email') ) }
		if( phone.length < 6 ){ addErrorClass( $('#phone') ) }

		//reset
		$('#city, #adress, #name, #email, #phone').on('click', function(){
			if( $(this).hasClass('hasError') ){
				$(this).removeClass('hasError')
			}
		})

		function addErrorClass(el){
			if( !$(el).hasClass('hasError') ) {
				$(el).addClass('hasError')
			}
		}

		if( $('#purchase .hasError').length === 0 ){
			$('.purchase__submit a.btn').html('Загрузка');
			$.ajax({
				type: 'POST',
				url: 'http://' + window.location.hostname + ":3000/mailMe",
				//dataType: "jsonp",
				data:`model=${model}&setup=${setup}&city=${city}&adress=${adress}&name=${name}&email=${email}&phone=${phone}&summaryAmount=${summaryAmount}`,
				success:function(result){
					//console.log('result: ' + result);
					window.location = 'thankYouPage.html?user-email=' + email;
				},
				error:function(){
					$('.purchase__submit a.btn').html('Получить реквизиты')
				}
			});
		}
	})

}