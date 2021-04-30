$(function  () {
	//友情链接展开
	$('.hide-btn').on('click',function(){
		var autoHeight = $(this).parents('.footer-links').find('ul').css('height', 'auto').height();
		if($(this).find('i').hasClass('i-arrow-up1')){
		    $('.hide-btn').html('隐藏<i class="icons i-arrow-down1"></i>');
            $(this).parents('.footer-links').animate({
            	height: autoHeight
            });
        }else{
            $(this).html('展开<i class="icons i-arrow-up1"></i>');
            $(this).parents('.footer-links').animate({
            	height:'20px'
            });;
        }
	});
	
})