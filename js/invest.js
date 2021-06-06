$(function  () {
	var obj={
		jsMoneyTypes:0,
		jsMoneyMores:0
	}
	
	$("#jsMoneyTypes").on('click','button',function  (e) {
		$(this).addClass('on').siblings('button').removeClass('on');
		var val=$(this).data('val');
		if (val) {
			obj.jsMoneyTypes=+val;
			console.log(obj)
		}
		$('#jsMoneyMores button').each(function  (i,e) {
			$(this).find('.total-num').text(val*$(this).data('val')+'元')
		})
		result(obj)
	})
	$("#jsMoneyMores").on('click','button',function  (e) {
		$(this).addClass('on').siblings('button').removeClass('on')
		var val=$(this).data('val');
		if (val) {
			obj.jsMoneyMores=+val;
			console.log(obj)
		}
		result(obj)
	})
	
	function result (obj) {
		console.log(obj)
	}
	
	$(".on").click();
})
