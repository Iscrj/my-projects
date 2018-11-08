
/*===================================================================================*/
/*	OWL CAROUSEL
/*===================================================================================*/

$(document).ready(function () {
	
	var dragging = true;
	var owlElementID = "#owl-main";
	
	function fadeInReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
		}
	}
	
	function fadeInDownReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
		}
	}
	
	function fadeInUpReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
		}
	}
	
	function fadeInLeftReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
		}
	}
	
	function fadeInRightReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
		}
	}
	
	function fadeIn() {
		$(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInDown() {
		$(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInUp() {
		$(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInLeft() {
		$(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInRight() {
		$(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	$(owlElementID).owlCarousel({
		
		autoPlay: 5000,
		stopOnHover: true,
        navigation: true,
		pagination: true,
		singleItem: true,
		addClassActive: true,
        transitionStyle: "fade",
        navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
			
    	afterInit: function() {
        	fadeIn();
        	fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	afterMove: function() {
        	fadeIn();
			fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	afterUpdate: function() {
        	fadeIn();
			fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	startDragging: function() {
			dragging = true;
    	},
		
    	afterAction: function() {
        	fadeInReset();
			fadeInDownReset();
			fadeInUpReset();
        	fadeInLeftReset();
        	fadeInRightReset();
			dragging = false;
    	}
		
    });
	
	if ($(owlElementID).hasClass("owl-one-item")) {
		$(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
	}
	
	$(owlElementID + ".owl-one-item").owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: false
	});
	
	$('#transitionType li a').click(function () {
		
		$('#transitionType li a').removeClass('active');
		$(this).addClass('active');
		
		var newValue = $(this).attr('data-transition-type');
		
		$(owlElementID).data("owlCarousel").transitionTypes(newValue);
		$(owlElementID).trigger("owl.next");
		
		return false;
		
	});
	
	$("#owl-testimonials").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		singleItem: true,
		addClassActive: true,
		autoHeight: true,
		transitionStyle: "fadeInAfterOut",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-projects").owlCarousel({
		navigation: false,
		autoHeight: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		rewindNav: false,
		singleItem: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-latest-works").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 4,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-videos").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 5,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-audio").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 5,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-popular-posts").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 5,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-related-posts").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 2,
		itemsDesktopSmall: [1199, 2],
		itemsTablet: [977, 2],
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-featured-works").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		transitionStyle: "goDown",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-work-samples").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 3,
		itemsDesktopSmall: [1199, 3],
		itemsTablet: [977, 2],
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-work-samples-big").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		transitionStyle: "fadeUp",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-work").owlCarousel({
		autoPlay: 5000,
		slideSpeed: 200,
		paginationSpeed: 600,
		rewindSpeed: 800,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		autoHeight: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-office").owlCarousel({
		autoPlay: 5000,
		slideSpeed: 200,
		paginationSpeed: 600,
		rewindSpeed: 800,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		autoHeight: true,
		transitionStyle: "fade",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-clients").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		rewindNav: true,
		items: 4,
		itemsDesktopSmall: [1199, 4],
		itemsTablet: [977, 3],
		navigation: true,
		pagination: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$(".slider-next").click(function () {
		owl.trigger('owl.next');
	})
	
	$(".slider-prev").click(function () {
		owl.trigger('owl.prev');
	})
	
});


/*  */
$(function () {
    $('a.folio').fancybox();
    $('#portfolio').mixitup();

    $('.nav-tabs a').click(function (e) {
        // e.preventDefault();
        $(this).tab('show');
    })
    $('.navbar-nav a').click(function (e) {
        // e.preventDefault();
        $(this).parent('li').toggleClass('active');
        $(this).parent('li').siblings('.active').removeClass('active');
    })

    $('.header .navbar-nav a').smoothScroll();

    $('#jump2top').css('bottom', '-100px');
    $(window).scroll(function () {
        var btn = $('#jump2top');
        if ($(this).scrollTop() > 100) {
            btn.stop().animate({ 'bottom': '0' }, 200);
        } else {
            btn.stop().animate({ 'bottom': '-100px' }, 200);
        }
    });

    $('#jump2top').smoothScroll();

    //setup email here
    $('#button-send').click(function (event) {
        $('#button-send').html('Sending E-Mail...');
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'send_form_email.php',
            data: $('#contact_form').serialize(),
            success: function (html) {
                if (html.success == '1') {
                    $('#button-send').html('Send E-Mail');
                    $('#success').show();
                }
                else {
                    $('#button-send').html('Send E-Mail');
                    $('#error').show();
                }
            },
            error: function () {
                $('#button-send').html('Send E-Mail');
                $('#error').show();
            }
        });

    });

});

function scrollTo(elem) {
    $('body,html').animate({
        scrollTop: elem.offset().top
    }, 500);
}

function valemail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// 产品中心特效
$(document).ready(function(){
    $(".product-img1").mouseenter(function(){
        $(".product-img1 .product1").animate({top:'0px'},500);
    })
    $(".product-img1").mouseleave(function(){
        $(".product-img1 .product1").animate({top:'275px'},500);
    })

    $(".product-img2").mouseenter(function(){
        $(".product-img2 .product2").animate({top:'0px'},500);
    })
    $(".product-img2").mouseleave(function(){
        $(".product-img2 .product2").animate({top:'275px'},500);
    })

    $(".product-img3").mouseenter(function(){
        $(".product-img3 .product3").animate({top:'0px'},500);
    })
    $(".product-img3").mouseleave(function(){
        $(".product-img3 .product3").animate({top:'275px'},500);
    })  

    $(".product-img4").mouseenter(function(){
        $(".product-img4 .product4").animate({top:'0px'},500);
    })
    $(".product-img4").mouseleave(function(){
        $(".product-img4 .product4").animate({top:'275px'},500);
    })          
});

//图标切换
$(document).ready(function(){

	// 主页公司简介图标
	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img1").mouseenter(function(){
    var src = "img/icon/pp1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img1").mouseleave(function(){
    var src = "img/icon/pp.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img2").mouseenter(function(){
    var src = "img/icon/jy1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img2").mouseleave(function(){
    var src = "img/icon/jy.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img3").mouseenter(function(){
    var src = "img/icon/zz1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img3").mouseleave(function(){
    var src = "img/icon/zz.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img4").mouseenter(function(){
    var src = "img/icon/zy1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img4").mouseleave(function(){
    var src = "img/icon/zy.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img5").mouseenter(function(){
    var src = "img/icon/jz1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".sectionB0 .container .section-headlines .section-intro .icon-header .img5").mouseleave(function(){
    var src = "img/icon/jz.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	// 新闻中心more图标
	$(".section .container .row .news-right>a").mouseenter(function(){
    var src = "img/news/right1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#e2b33f");
	});
	$(".section .container .row .news-right>a").mouseleave(function(){
    var src = "img/news/right.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#666");
	});

	// 主页新闻中心小图标
	$(".section .container .more-news>a").mouseenter(function(){
    var src = "img/news/right1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#e2b33f");
	});
	$(".section .container .more-news>a").mouseleave(function(){
    var src = "img/news/right.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#666");
	});

	// 联系我们页面
	$(".section .container1 .company-row .phone-style1").mouseenter(function(){
    var src = "img/contract_us/phone1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container1 .company-row .phone-style1").mouseleave(function(){
    var src = "img/contract_us/phone.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".section .container1 .company-row .phone-style2").mouseenter(function(){
    var src = "img/contract_us/fax1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container1 .company-row .phone-style2").mouseleave(function(){
    var src = "img/contract_us/fax.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	
	// 商品购买图标
	$(".section .container1 .row .aside-goods .buy-style").mouseenter(function(){
    var src = "img/product1/buy1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#e2b33f");

	});
	$(".section .container1 .row .aside-goods .buy-style").mouseleave(function(){
    var src = "img/product1/buy.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#666");
	});

	// 页尾分享图标
	$(".section .container .row .footer-content3 .content3-img1").mouseenter(function(){
    var src = "img/news/icon3-1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container .row .footer-content3 .content3-img1").mouseleave(function(){
    var src = "img/news/icon3.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".section .container .row .footer-content3 .content3-img2").mouseenter(function(){
    var src = "img/news/icon1-2.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container .row .footer-content3 .content3-img2").mouseleave(function(){
    var src = "img/news/icon1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".section .container .row .footer-content3 .content3-img3").mouseenter(function(){
    var src = "img/news/icon2-1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container .row .footer-content3 .content3-img3").mouseleave(function(){
    var src = "img/news/icon2.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});


	// 新闻细节分享图标
	$(".section .container .row .news-img .img1").mouseenter(function(){
    var src = "img/news/icon3-3.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container .row .news-img .img1").mouseleave(function(){
    var src = "img/news/icon3.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".section .container .row .news-img .img2").mouseenter(function(){
    var src = "img/news/icon1-1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container .row .news-img .img2").mouseleave(function(){
    var src = "img/news/icon1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".section .container .row .news-img .img3").mouseenter(function(){
    var src = "img/news/icon2-2.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});
	$(".section .container .row .news-img .img3").mouseleave(function(){
    var src = "img/news/icon2.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
	});

	$(".section .container .news-detail .news-content6").mouseenter(function(){
    var src = "img/news/icon5-1.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#e2b33f");
	});
	$(".section .container .news-detail .news-content6").mouseleave(function(){
    var src = "img/news/icon5.png";    //新图片地址
    $(this).find("img").attr("src",src);    //更换图片地址
    $(this).find("span").css("color","#666");
	});
})










