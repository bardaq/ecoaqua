// purchase-modal

export const modals = function() {
	$( document ).ready(() => {


		/*******************************************
		*
		*
		*   Purchase modal
		*   –––––––––––––––––––
		*
		*********************************************/
		$('.openPurchaseModal').on('click',(function(event) {
			$('#product-component, footer').css({ 'transform': 'scale(1.1)', 'filter': 'blur(15px)' });
			$('body, html').toggleClass('stop-scroll');
			$('#nav-component').css({ 'opacity': '0' });
			$('#purchase-modal.modal').css({ 'display': 'flex', 'opacity': '1' });
			if ( typeof $('#checkbox').attr('checked') === typeof undefined ||  $('#checkbox').attr('checked') === false ) {
				setPrice()
			} else { setUpSalePrice() }
		}));

		// Checkbox
		$('#checkbox-label').on('click', function(event) {
			if ( typeof $('#checkbox').attr('checked') === typeof undefined ||  $('#checkbox').attr('checked') === false ) {
				$('#checkbox').attr('checked', 'true')
				setUpSalePrice()
			} else {
				$('#checkbox').removeAttr('checked');
				setPrice()
			}
		})

		function setPrice(){
			return $('#purchase-modal #summary-amount').html( parseInt($('#filter-price').html(), 10) )
		}
		function setUpSalePrice(){
			return $('#purchase-modal #summary-amount').html( parseInt($('#filter-price').html(), 10) + parseInt($('#delivey-and-setup-price').html(), 10) )
		}


		/*******************************************
		*
		*
		*   Specification modal
		*   –––––––––––––––––––
		*
		*********************************************/
		$('.openSpecificationModal').on('click',(function(event) {
			$('#product-component, footer').css({ 'transform': 'scale(1.1)', 'filter': 'blur(15px)' });
			$('body, html').toggleClass('stop-scroll');
			$('#nav-component').css({ 'opacity': '0' });
			$('#specification-modal.modal').css({ 'display': 'flex', 'opacity': '1' });
		}));





		/*******************************************
		*
		*
		*   Minirals modal
		*   –––––––––––––––––––
		*
		*********************************************/
		$('#openMiniralsModal').on('click', function(event) {
			$('#product-video-story-component').css({ 'filter': 'blur(15px)' });
			$('body, html').toggleClass('stop-scroll');
			$('#nav-component').css({ 'opacity': '0' });
			$('#minirals-modal.modal').css({ 'display': 'flex', 'opacity': '1' });
		});





		/*******************************************
		*
		*
		*   Close all modal
		*   –––––––––––––––––––
		*
		*********************************************/
		$('.closePurchaseModal, .closeSpecificationModal').on('click',(function(event) {
			$('#product-component, footer').css({ 'transform': 'scale(1)', 'filter': 'blur(0)' });
			$('body, html').toggleClass('stop-scroll');
			$('#purchase-modal, #specification-modal').css({ 'display': 'none', 'opacity': '0' });
			$('#nav-component').css({ 'opacity': '1' });
		}));
		$(' .closeMiniralsModal').on('click',(function(event) {
			$('#product-video-story-component').css({ 'filter': 'blur(0)' });
			$('body, html').toggleClass('stop-scroll');
			$('#minirals-modal').css({ 'display': 'none', 'opacity': '0' });
			$('#nav-component').css({ 'opacity': '1' });
		}));

	})
}