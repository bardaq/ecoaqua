export default function antiLsep() {
	$("body").children().each(function() { $(this).html($(this).html().replace(/&#8232;/g," ")); });
}
