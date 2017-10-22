$(function(){

 	//鼠标滚动导航的固定与消失
 	  
 	var navOffset=$("header").offset().top;  
	    $(window).scroll(function(){  
	        var scrollPos=$(window).scrollTop();  
	        if(scrollPos >navOffset){
	            $("header").addClass("fixed");  
	        }else{  
	            $("header").removeClass("fixed");
	        }  
    });

    var navOffset1=$(".head").offset().top;
    $(window).scroll(function(){
        var scrollPos=$(window).scrollTop();
        if(scrollPos>navOffset){
            $(".head").addClass("fixed");
        }else{
            $(".head").removeClass("fixed");
        }
    });



    //侧导航
	$(".iconfont1").click(function() {
		$('.main-nav').toggleClass('active');
		$(".aside").toggleClass('active');
	});
	
	
	


	//banner图轮播
 	function rollOne(){
        let imgw1=$('.big-img').find('img').width();
	    $(".big-img >ul").animate({marginLeft:`-${imgw1}px`},2000,"linear",function(){
	        $(this).css({marginLeft:"0px"});  
	        $(this).children("li").first().remove().clone(true).appendTo(".big-img >ul");
	    });  
    }  
	    var startRollOne=setInterval(rollOne,2000);  
	    $(".big-img >ul").hover(function () {
	        clearInterval(startRollOne);  
	    }, function () {  
	        startRollOne=setInterval(rollOne,2000);  
	    });

	//商城--> 花、自动轮播

	function rolltwo(){
        let imgw=$('.products').find('img').width();
    $(".hualist-u2").animate({marginLeft:`-${imgw}px`},2000,"linear",function(){
        $(this).css({marginLeft:"0px"});
			$(this).children("li").first().remove().clone(true).appendTo(".hualist-u2");
    });
	}
	var startRolltwo=setInterval(rolltwo,2000);
	$(".hualist-ul").hover(function () {
		clearInterval(startRolltwo);
	}, function () {
		startRolltwo=setInterval(rolltwo,2000);
	});


	//花语  鼠标移入遮罩消失
	let imgs=$('.xqa');
	console.log(imgs)
	imgs.each(function(index,element) {
		$(this).mouseenter(function(){
			$('.zhezhao').eq(index).css({display:'block'}).animate({right:0,top:0})
		})
  	});
	
  	imgs.each(function(index,element) {
		$(this).mouseleave(function(){
			$('.zhezhao').eq(index).animate({right:'-100%',top:'-100%'});
		})
  	});
//最新优惠
	let lis=$(".products");
	let zhezhaos=$(".zhezhao");

	for(let i=0;i<lis.length;i++){
		lis.eq(i).mousemove(function(){
		zhezhaos.eq(i).css("display","block");

	});
		lis.eq(i).mouseout(function(){
			zhezhaos.eq(i).css("display","none");
		})
	}
	
//商品详情


});