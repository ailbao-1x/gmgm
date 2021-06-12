$(function  () {
	var obj={
		jsMoneyTypes:0,
		jsMoneyMores:0
	}
	
	$("#jsMoneyTypes").on('click','button',function  (e) {
		$(this).addClass('on').siblings('button').removeClass('on');
		var val=$(this).data('val');
		if(val==""){
			$('#tm').show().focus()
			obj.jsMoneyTypes=0
		}else {
			$('#tm').hide()
			obj.jsMoneyTypes=+val;
		}
		JsMoneyMoresResult(obj)
		result(obj)
	})
	
	$("#jsMoneyMores").on('click','button',function  (e) {
		$(this).addClass('on').siblings('button').removeClass('on')
		var val=$(this).data('val');
		if (val) {
			obj.jsMoneyMores=+val;
		}
		result(obj)
	})
	
	$("#tm").on("keyup",checkNum()); 
	
	function checkNum(){
	    let timer=null; 
	    return function (){ 
	        clearTimeout(timer); 
	        timer=setTimeout(function(){ 
	        	var val= parseInt($('#tm').val());
	        	switch (val){
	        		case value:
	        			break;
	        		default:
	        			break;
	        	}
	        	obj.jsMoneyTypes=val
	        	JsMoneyMoresResult(obj)
	        },500); 
	    } 
	}	
		
	function JsMoneyMoresResult(obj){
		$('#jsMoneyMores button').each(function  (i,e) {
			$(this).find('.total-num').text(obj.jsMoneyTypes*$(this).data('val')+'元')
		})
	}
	
	function result (obj) {
		console.log(obj)
	}
	
	$(".on").click();
})
