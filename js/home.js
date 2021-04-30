$(function  () {
	//banner
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    autoplay : {
	    delay:3000
	 },
//	grabCursor : true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
	//新闻scroll
	new Swiper ('.scroll-container', {
	    loop: true,
	    direction: 'vertical',
	    autoplay : {
		    delay:2000
		 },
		autoHeight:true,
	  })
	
	$('.news-tab li').each(function(i, e) {
		$(this).click(function() {
			var _this = $(this);
			_this.addClass('selected').siblings().removeClass('selected');
			$('.JS-newslist').eq(i).removeClass('dn').siblings().addClass('dn');
		})
	});
})
