$(function() {

	// INIT
	$.fn.device();
	$.fn.gnbSize();

	//smooth_scroll();
	scroll_flag();
	navi();
	sticky();
	small_nav();
	family_site();
	select_style();
	title_motion();

	// ON LOAD
	$(window).on('load', function () {

		$('body').addClass('load');

	});


	// ON RESIZE
	$(window).resize(function() {
		

		$.fn.device();
		$.fn.gnbSize();

	});


	// SmoothScroll
	/*function smooth_scroll() {

		   var $window = $(window);
		   var scrollTime = 1;
		   var scrollDistance = $window.height() / 2.5;


		   if (window.addEventListener){
				   // IE9, Chrome, Safari, Opera
				   window.addEventListener("mousewheel", MouseWheelHandler, {
						  capture: false,
						  passive: false
				   });

				   //파이어폭스 DOMMouseScroll
		   }
		   else{
				   // IE 6/7/8
				   window.attachEvent("onmousewheel", MouseWheelHandler);
		   }

		   function MouseWheelHandler(event){
				   event.preventDefault ? event.preventDefault() : event.returnValue = false;

				   var delta = event.wheelDelta/120 || -event.detail/3;
				   var scrollTop = $window.scrollTop();
				   var finalScroll = scrollTop - parseInt(delta*scrollDistance);

				   TweenMax.to($window, scrollTime, {

						  scrollTo : { y: finalScroll, autoKill:true },
						  ease: Power1.easeOut,
						  overwrite: 5

				   });
			   return false;
		   }

        }*/


	// TOP 플로팅
	function scroll_flag() {

		var btnTopFlag = false;

		$(window).scroll( function() {

			if($(window).scrollTop() > 100) {

				if(!btnTopFlag) {
					$('.btn_top').stop(true).fadeIn(300);
				}
				btnTopFlag = true;

			} else {

				if(btnTopFlag) {
					$('.btn_top').stop(true).fadeOut(300);
				}
				btnTopFlag = false;
			}

		});

	}


	// GNB PC
	function navi() {

		$("#gnb").on("mouseenter", "> .box > ul > li > p", function() {
			if($("body").data("device") != "mobile") {
				$this = $(this).parent("li");
				$this
				.css("height","255px")
				.siblings()
				.css("height","auto");
				$this.parents(".h_group").addClass('menu_hover');
				$this.parents(".h_group").css("background","url(../../resources/img/common/menu_bg.png)");
				$("#gnb > .box > ul > li > a").css("color","#333");
				$this.parents(".h_group").stop().animate({"height":"290px"}, 300);
				$("#gnb .sub_menu").hide();
				// depth
				$this.find(".sub_menu").show();
			}
		});

		$(".h_group").on("mouseleave" , function() {
			if($("body").data("device") != "mobile") {
				$("#gnb > .box > ul > li").css("height","auto");
				$("#gnb > .box > ul > li").parents(".h_group").stop().animate({"height":"80px"}, 300, function() {
					$(this).removeClass('menu_hover');
					$("#gnb > .box > ul > li").siblings().children(".sub_menu").hide();

					if($(".h_group").hasClass('affix')) {
						$(this).css("background","url(../../resources/img/common/menu_bg.png)");
						$("#gnb > .box > ul > li > a").css("color","#333");
					} else {
						if(!$(".h_group").hasClass('sub')) {
							$(this).css("background","#fff");
						}
						$("#gnb > .box > ul > li > a").css("color","#333");
					}

				});
			}
		});

		// GNB 키보드 접근
		$("#gnb").on("focusin", "> .box > ul > li > p", function() {
			if($("body").data("device") != "mobile") {
				if($(".h_group").hasClass("on") == false) {
					// $(this).css("height","332px");
					$(this).parents(".h_group").addClass('menu_hover');
					$(this).parents(".h_group").css("background","url(../../resources/img/common/menu_bg.png)");
					$("#gnb > .box > ul > li > a").css("color","#333");
					$(this).parents(".h_group").stop().animate({"height":"290px"}, 300);
					$("#gnb").find(".sub_menu").hide();
					$(this).next(".sub_menu").show();
				}
			}
		});

		//gnb color on & off
		$('#gnb .gnb_m > li').bind("mouseenter focusin",function(){
			var index = $('#gnb .gnb_m > li').index($(this));
			$('#gnb .gnb_m').find(' > li:eq(' + index + ') a').addClass("on");	
			
		}).bind("mouseleave focusout",function(){
			var index = $('#gnb .gnb_m > li').index($(this));
			 $('#gnb .gnb_m').find(' > li:eq(' + index + ') a').removeClass("on");
			
		});

		// h_group 조정
		$(".util_menu_pc").on("focusin", "a", function() {
			$(".h_group").stop().animate({"height":"80px"}, 300);
			$("#gnb").find(".sub_menu").hide();
		});

		$(document).on('focus', '.h_group h1 a, .lnb-nav li a, .slick-prev', function() {
			if($("body").data("device") != "mobile") {
				$("#gnb > .box > ul > li").parents(".h_group").stop().animate({"height":"80px"}, 300, function() {
					$("#gnb > .box > ul > li").siblings().children(".sub_menu").hide();
				});
			}
		});

	}


	// Sticky
	function sticky() {

		var fixed_offset = $('#header').offset();

		// alert(fixed_offset.top);

		$(window).on('scroll', $.throttle(1000 / 15, function() {

			if ( $(document).scrollTop() > fixed_offset.top ) {
				$('.h_group').addClass('affix');
				$('.h_group').css("background","url(../../resources/img/common/menu_bg.png)");
				$("#gnb > .box > ul > li > a").css("color","#333");
			} else {
				$('.h_group').removeClass('affix');
				if(!$(".h_group").hasClass('sub')) {
					$('.h_group').css("background","#fff");
				}
				$("#gnb > .box > ul > li > a").css("color","#333");
			}

		}));

	}


	// GNB MOBILE
	function small_nav() {
		if($("body").data("device") == "mobile") {
			$("#gnb > .box").css('display', 'none');
		}
		$(".btn_menu").on("click", function() {
			var overflowChk = $("body").css("overflow");
			var deviceHeight = $(window).height();

			if(overflowChk == "hidden") {
				$("body").css({
					"overflow":"visible",
					"height":"auto"
				});
			} else {
				$("body").css({
					"overflow":"hidden",
					"height":deviceHeight
				});
			}		

			$("#gnb > .box").css("display","block").addClass("active");
			$(this).next().stop().animate({"right":"0%"}, 500);
			$("#gnb > .dim").fadeIn();

			$("#gnb .btn_menu").fadeOut();
			$("#gnb .btn_close").focus();			
				
			$('.container *, .container + section').on("focusin", function() {
				$("#gnb .btn_close").focus();
			});
			
		});	
		
		// 모바일 GNB
		$(".gnb_m > li > .depth_1").on("click", function() {
			if (document.body.clientWidth < 1300) {
				$(this).parent("li").stop().toggleClass("current");
				// 3depth
				$(".gnb_m").find(".depth_2 > li").stop().removeClass("current");
				$(".gnb_m .depth_3").stop().slideUp();

				$(".gnb_m > li > .depth_1").not(this).parent("li").stop().removeClass("current");
				$(this).next(".sub_menu").find(".depth_2").stop().slideToggle();
				$(".gnb_m > li > .depth_1").not(this).next(".sub_menu").find(".depth_2").stop().slideUp();
			}
		});

		$(".gnb_m").find(".depth_2 > li > a").on("click", function() {
			if (document.body.clientWidth < 1300) {
				if ($(this).next("ul").hasClass("depth_3")) {
					$(".gnb_m").find(".depth_2 > li").stop().removeClass("current");
					$(this).parent("li").stop().toggleClass("current");
					$(this).next(".depth_3").stop().slideToggle();
					$(".gnb_m").find(".depth_2 > li > a").not(this).next(".depth_3").stop().slideUp();
				}
			}
		});

		$("#gnb").on("click", "> .dim, > .box > .btn_close", function() {
			if (document.body.clientWidth < 1300) {
				$("body").css("overflow","visible");
				$("#gnb > .dim").hide();
				$("#gnb > .box").stop().animate({"right":"-100%"}, 600, function() {
					$("#gnb > .box").css("display","none").removeClass("active");
				});
				$("#gnb .btn_menu").fadeIn();
				$("#gnb .btn_menu").focus();
				// 모바일 메뉴 초기화
				$(".gnb_m > li").removeClass("current");
				$(".gnb_m > [class^='depth_']").slideUp();
			}

		});

	}


	// HOME (메인 페이지에서만 작동)
	if( $('body').hasClass('home') ) {

		// MainBanner
		$('.visual').on('init', function(event, slick) {
			$(".slick-slide").eq(0).addClass("active-item");
		});

		$('.visual').on('afterChange', function(event, slick, currentSlide){
			$(".slick-slide").removeClass("active-item");
			$(this).find(".slick-slide").eq(currentSlide).addClass("active-item")
		});

		$('.visual').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000
		});

		$('.visual_btn .btn_play').on('click', function(){
			var $pauseBtn = $(this);
			if ($pauseBtn.hasClass('on')){
				$(".visual").slick('slickPlay');
				$(this).text("정지");
				$pauseBtn.removeClass('on');
			} else {
				$(".visual").slick('slickPause');
				$(this).text("재생");
				$pauseBtn.addClass('on');
			}
		});

		$('.visual_btn .btn_play_eng').on('click', function(){
			var $pauseBtn = $(this);
			if ($pauseBtn.hasClass('on')){
				$(".visual").slick('slickPlay');
				$(this).text("Stop");
				$pauseBtn.removeClass('on');
			} else {
				$(".visual").slick('slickPause');
				$(this).text("Play");
				$pauseBtn.addClass('on');
			}
		});

		// MoreBtn
		$('.floating').on('click', function(){
			var nextSec = $(".more_btn_img").offset().top - 30;
			var wHeight = $(window).height();

			$('html, body').animate({
				scrollTop : nextSec
				}, 800
			);
		});

		// Img-slide
		// $('.img-slide').slick({
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows: false,
		// 	dots: true,
		// 	infinite: true,
		// 	autoplay: true,
		// 	centerMode: false,
		// 	variableWidth: false,
		// });

		// Img-slide-web
		$('.img-slide-web').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: false,
			autoplay: true,
			centerMode: false,
			variableWidth: false,

			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			  }
			}
		  ]

		});

		$('.news_btn .news_btn_play').on('click', function(){
			var $pauseBtn = $(this);
			if ($pauseBtn.hasClass('on')){
				$(".img-slide-web").slick('slickPlay');
				$(this).text("정지");
				$pauseBtn.removeClass('on');
			} else {
				$(".img-slide-web").slick('slickPause');
				$(this).text("재생");
				$pauseBtn.addClass('on');
			}
		});

	}

	// Family_Site
	function family_site() {

		$(".btn_familyView").click(function(){
			if($(this).next().css("display") == "none") {
				$(".btn_familyView").removeClass("open");
				$(".list_family").slideUp(150);
				$(this).addClass("open");
				$(this).find(".txt").text("닫기");				
				$(this).find(".txt_eng").text("Close");
				$(this).find("._down3").attr('class', 'ico _up3');
				$(this).next().slideDown(150);
			} else {
				$(".btn_familyView").removeClass("open");
				$(".list_family").slideUp(150);
				$(this).find(".txt").text("열림");
				$(this).find(".txt_eng").text("Open");
				$(this).find("._up3").attr('class', 'ico _down3');
			}
			return false;
		});

	}

	// select_style
	function select_style() {

		$(".btn_selectUi").click(function(){
			if($(this).next().css("display") == "none") {
				$(".btn_selectUi").removeClass("open");
				$(".selectUi_List").slideUp(150);
				$(this).addClass("open");
				$(this).find(".txt").text("닫기");
				$(this).find("._down3").attr('class', 'ico _up3');
				$(this).next().slideDown(150);
			} else {
				$(".btn_selectUi").removeClass("open");
				$(".selectUi_List").slideUp(150);
				$(this).find(".txt").text("열림");
				$(this).find("._up3").attr('class', 'ico _down3');
			}
			return false;
		});

	}


	// Title_Motion
	function title_motion() {

		if( !$('body').hasClass('home') ) {

			var tl = new TimelineLite({delay:0.5});

			if($('.sub_banner .inner p').length > 0 ) {
				var title = new SplitText($('.sub_banner .inner p'), {type:"chars"});
				var title_chars = title.chars;

				tl.staggerFrom(title_chars, 1.2, motion({force3D:true, autoAlpha:0, y:10, ease:Back.easeOut,onComplete:function() {
						$('.sub_banner .inner p').addClass('completed');
					}
				}), 0.02, "+=0")
			}

		}

	}

});


// DEVICE CHK
$.fn.device = function() {

	var size = $(window).width() + 17; // 스크롤바 width 추가

	if(size <= 1300) {
		$("body").data("device","mobile");
	} else {
		$("body").data("device","pc");
	}

}

// GNB SETTING
$.fn.gnbSize = function() {

	var deviceWidth = $(window).width();
	var deviceHeight = $(window).height();

	if($("body").data("device") == "mobile") {

		$("body").css("overflow","visible");
		$("#gnb > .box").css({
			"height":deviceHeight,
			"background":"#fff"
		});
		$("#gnb .sub_menu").show();
		$("#gnb .sub_menu ul").hide();
		if($("#gnb > .dim").length == 0) {
			$("#gnb").append("<div class='dim' style='display:none;position:fixed;top:0px;left:0px;z-index:10;width:" + (deviceWidth + 17) + "px;height:" + deviceHeight + "px;background:#000;filter:alpha(opacity=50);opacity:0.5'></div>");
		}

	} else {

		$("body").css("overflow","visible");
		$("#header .h_group > div > h1 > a > img").css("display","block");

		$("#gnb > div.box").css({
			"display":"block",
			"height":"auto",
			"background":"none"
		});
		$("#gnb > div.box").css("right","-100%");
		$("#gnb > div.box > ul > li").removeClass("current");
		$("#gnb .sub_menu").hide();
		$("#gnb .sub_menu ul").show();
		$("#gnb .sub_menu > div .inner > ul").show();
		$("#gnb > .dim").remove();

	}

}

//TopBtn
function scollTopStart() {

	 $('html,body').stop().animate({ scrollTop: 0 }, 600);

}

// GNB(SiteMap_접근성)
$(function(){
    $('.navbar_toggle').click(function(){
        $('.navbar_toggle').toggleClass('navbar_on');
        $('nav').stop().slideToggle('1000');
        $('nav').removeClass('nav_hide');

		if ($(".navbar_toggle").hasClass("eng")) {
			$(".navbar_toggle > a").contents()[0].textContent = "Open Whole Menu";
			$(".navbar_toggle > a > div.menu_bar").attr({'title' : 'Open Whole Menu'});
		} else {
			$(".navbar_toggle > a").contents()[0].textContent = "전체 메뉴 열기";
			$(".navbar_toggle > a > div.menu_bar").attr({'title' : '전체 메뉴 열기'});
		}
		if($(this).hasClass('navbar_on')) {
			$('.nav nav').css('overflow-y', 'hidden');

			if ($(".navbar_toggle").hasClass("eng")) {
				$(".navbar_toggle > a").contents()[0].textContent = "Close Whole Menu";
				$(".navbar_toggle > a > div.menu_bar").attr({'title' : 'Close Whole Menu'});
			} else {
				$(".navbar_toggle > a").contents()[0].textContent = "전체 메뉴 닫기";
				$(".navbar_toggle > a > div.menu_bar").attr({'title' : '전체 메뉴 닫기'});
			}
		}else{
			$('.nav nav').css('overflow-y', 'hidden');
		}
    });
});


$(function() {
    $(".container").on("click", function() {
        var that = $(this);
        if (that.hasClass("is-open")) {
            that.removeClass("is-open").addClass("is-closed");
        } else {
            that.removeClass("is-closed").addClass("is-open");
        }
    });
});


//SelectBox Link
$(function() {
	$(".select_area .btn_sel").on("click",function(){
	  var link = $(".select_area .select_link option:selected").val();
	  window.open(link, '_self');
	})
});


//Sub 본문바로가기
$(function() {
		$(".sub_contents").attr({
			"id" : "contents"
	 });  
});