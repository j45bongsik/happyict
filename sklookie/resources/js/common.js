$(document).ready(function(){
	InputFileEvt(".wrap_fileSearch .btn1-s-slight", ".wrap_fileSearch input[type='file']", ".wrap_fileSearch .delete");
});

$(document).ready(function () {	
	lnbHeightCalc_m();
	$(window).resize(function(){
		lnbHeightCalc_m();
	});
	
	/* 모바일 메뉴 높이*/
	function lnbHeightCalc_m(){
		var win_h = window.innerHeight;
		var win_w = window.innerWidth;
		
		if(win_w < 1025)
		{
			var lnbMain_h = win_h - 300;
			$(".lnb").css("min-height",lnbMain_h);
			
		}else{
			$(".lnb").removeAttr("style");
		}
	}
});

   

/* mobile 체크 */
var isMobile = false; 
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

$(document).ready(function () {
	/* resize event */
	$(window).resize(function(){
		var win_w = $(window).width();
		
		if(win_w < 1025)
		{
			$(".pop-global, .pop-sitemap").hide();
			$(".dim-pop").detach();
			$(".lay-fix").css("height", window.innerHeight);
		}else
		{
			closeLnbM();
		}
	});

	/* scroll event */
	$(window).scroll(function(e){
		pageTopEvt();
	});

	/* LNB 애니 */
	$(document).on("click", ".lnb .d-1 > a", function(){
		lnbClickEvt_m($(this));
	});

	$(document).on("mouseover focusin", ".lnb", function(){
		lnbOverEvt($(this));
	});

	$(document).on("mouseleave focusout", ".header", function(){
		lnbOutEvt();
	});

	$(".util-menu a, #contents").bind("keyup", function(){
		lnbOutEvt();
	});
	
	$(".btn-menu-m").click(function(){
		$("html, body").addClass("lay-fix").css("height", window.innerHeight);
		$(".header").addClass("open_m");
		$(".dim-menu-m").addClass("show");
	});

	$(".btn-menuClose-m, .dim-menu-m").click(function(){
		closeLnbM();
	});
	
	function closeLnbM()
	{
		$("html, body").removeClass("lay-fix").removeAttr("style");
		$(".header").removeClass("open_m");
		$(".dim-menu-m").removeClass("show");
	}
	
	/* PC LNB */
	function lnbOverEvt(param)
	{
		var window_w = window.innerWidth;
		
		if(window_w > 1024)
		{
			$(".lnb .innerLnb").removeClass("open");
			$(".lnb .innerLnb").addClass("open");
			$(".lnb .innerLnb").stop().animate({height : 310}, 300); 
			$(".header").addClass("open");
		}
	}

	function lnbOutEvt()
	{
		$(".lnb .innerLnb").removeClass("open");	
		$(".lnb .innerLnb").stop().animate({height: 87}, 300);
		$(".lnb .d-1").removeClass("on");	
		$(".header").removeClass("open");
	}

	/* 모바일 LNB */
	var openedIdx = -1;
	function lnbClickEvt_m(param)
	{
		var window_w = window.innerWidth;
		var mnIdx = $(param).attr("data-focusMnIdx");
		var mnCurObj = $(".lnb .d-1 > a[data-focusMnIdx="+mnIdx+"]").parent();
		if(window_w < 1025)
		{
			var _sameClick = openedIdx > -1 && openedIdx == mnIdx;
			
			$(".lnb .d-1").removeClass("open_m");

			if (_sameClick == false)
			{
				$(mnCurObj).addClass("open_m");
				openedIdx = mnIdx;
			}
			else
				openedIdx = -1;
		}
	}

	/* breadcrumb */
	$(".breadcrumb .d_sub > a").click(function(){
		$(this).parent().toggleClass("open")
	});
	
	/* 페이지 최상단으로 이동 */
	function pageTopEvt()
	{
		var scrollTopPos = $(window).scrollTop();
		if(scrollTopPos > 1)
		{
			$(".wrap-pageTop").addClass("show");
		}
		else{
			$(".wrap-pageTop").removeClass("show");
		}
	}

	/* SNS 공유 */
	$("#sns-wrap .btn-snsClose").click(function(){
		mask(false);
		$("#sns-wrap").hide();
		$(".sns .btn-sns").focus();
		$(".dim-pop").attr("data-target", "");
		setTimeout(function(){
			$(window).scrollTop(0);
			$("#btn-sns a").focus();
		});
		return false;
	});

	$(".sns .btn-sns").click(function(){
		mask(true);
		$("#sns-wrap").show();
		$(".dim-pop").attr("data-target", "#sns-wrap");
		$("#sns-wrap").focus();
		return false;
	});

	/* 루키 동아리 보기 */
	$(".btn_clubView").click(function(){		
		if($(this).parent().next().css("display") == "none") {
			$(".btn_clubView").removeClass("open");
			$(".box-club").slideUp(150);
			$(this).addClass("open");
			$(this).find(".txt").text("닫기");
			$(this).find("._down2").attr('class', 'ico _up2');
			$(this).parent().next().slideDown(150);
		} else {
			$(".btn_clubView").removeClass("open");
			$(".box-club").slideUp(150);
			$(this).find(".txt").text("열기");
			$(this).find("._up2").attr('class', 'ico _down2');
		}
		return false;
	});

	/* FAQ */
	$(".q .link").click(function(){		
		if($(this).parent().next().css("display") == "none") {
			$(".q").removeClass("open");
			$(".a").slideUp(150);
			$(this).parent().addClass("open");
			$(this).parent().next().slideDown(150);
		} else {
			$(".q").removeClass("open");
			$(".a").slideUp(150);
		}
		return false;
	});

	/*  패밀리 사이트 */
	$(".btn_familyView").click(function(){		
		if($(this).next().css("display") == "none") {
			$(".btn_familyView").removeClass("open");
			$(".list_family").slideUp(150);
			$(this).addClass("open");
			$(this).find(".txt").text("닫기");
			$(this).find("._down3").attr('class', 'ico _up3');
			$(this).next().slideDown(150);
		} else {
			$(".btn_familyView").removeClass("open");
			$(".list_family").slideUp(150);
			$(this).find(".txt").text("열기");
			$(this).find("._up3").attr('class', 'ico _down3');
		}
		return false;
	});



	/* 개인정보 처리방침 */
	$(".link_scroll").click(function(event){		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top -150}, 500);
		$($(this).attr("href")).focus();
	}); 
	
});

/* mask */
function mask(flag){
	if(flag){
		$("#wrap").append("<div class='dim-pop'></div>");
		setTimeout(function(){
			$(".dim-pop").addClass("show").click(function(){
				var target = $(this).attr("data-target");
				$(target).hide();
				mask(false);
				$(".header .util-menu a.on").removeClass("on");
			});
		}, 10);
	}
	else{
		$(".dim-pop").removeClass("show");
		setTimeout(function() {
			$(".dim-pop").remove();
		}, 300);
	}
}

dummyStyle = document.createElement('div').style;
vendor = (function () {
	var vendors = 't,webkitT,MozT,msT,OT'.split(','),
		t,
		i = 0,
		l = vendors.length;

	for ( ; i < l; i++ ) {
		t = vendors[i] + 'ransform';
		if ( t in dummyStyle ) {
			return vendors[i].substr(0, vendors[i].length - 1);
		}
	}
	return false;
})();

TRNEND_EV = (function () {
	if ( vendor === false ) return false;

	var transitionEnd = {
			''			: 'transitionend',
			'webkit'	: 'webkitTransitionEnd',
			'Moz'		: 'transitionend',
			'O'			: 'otransitionend',
			'ms'		: 'MSTransitionEnd'
		};

	return transitionEnd[vendor];
})();
ANI_EV = (function () {
	if ( vendor === false ) return false;

	var animationEnd = {
			''			: 'animationend',
			'webkit'	: 'webkitAnimationEnd',
			'Moz'		: 'AnimationEnd',
			'O'			: 'oAnimationEnd',
			'ms'		: 'MSAnimationEnd'
		};

	return animationEnd[vendor];
})();

(function ($) {
	$.fn.TRANSITION = function( callback ) {
		var ver = getIEVersion();
		if(ver > -1 && ver < 10){
			callback( $(this) );
			return;
		}
		if(TRNEND_EV != undefined){
			$(this).one(TRNEND_EV, function() {
				callback( $(this) );
			})
		}
		else{
			callback( $(this) );
		}
	}
})(jQuery);

(function ($) {
	$.fn.ANI = function( callback ) {
		if(ANI_EV != undefined){
			$(this).one(ANI_EV, function() {
				callback( this );
			})
		}
		else{
			callback( this );
		}
	}
})(jQuery);

function getIEVersion() {    
	 var rv = -1; // Return value assumes failure.    
	 if (navigator.appName == 'Microsoft Internet Explorer') {        
		  var ua = navigator.userAgent;        
		  var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		  if (re.exec(ua) != null)            
			  rv = parseFloat(RegExp.$1);    
		 }    
	 return rv; 
}

/* scroll ani */
$(window).on("scroll",function(e){
	var sc_postion = $(this).scrollTop();
		$(".breadcrumb").toggleClass("on", (sc_postion > 136));
})

/* skipnavi */
function skipnaviEvt(pram)
{
	$(pram).attr("tabindex", -1).focus();
}

/* 팝업 새창 오픈*/
function PopOpenEvt(url, w, h){
	winObject = window.open(url,'_blank','top=0,left=0,width='+w+',height='+h+',resizable=no,scrollbars=yes');
}

/* input[type="file"] 이벤트 */
function InputFileEvt(btnFile, inputFile, btnDelete)
{
	//파일첨부 링크 클릭 시
	$(btnFile).bind("click", function(){
		var fileId = $(this).attr("href");
		$(fileId).click();

		return false;
	});

	//파일 첨부 완료, 변경 시
	$(inputFile).change(function(e){
		var fileObj  = $(this).val(),
			Prt = $(this).parent(),
			pathHeader , pathMiddle, pathEnd, allFilename, fileName, extName;

		if (fileObj != "")
		{
			pathHeader = fileObj.lastIndexOf("\\");
			pathMiddle = fileObj.lastIndexOf(".");
			pathEnd = fileObj.length;
			fileName = fileObj.substring(pathHeader+1, pathMiddle);
			extName = fileObj.substring(pathMiddle+1, pathEnd);
			allFilename = fileName+"."+extName;

			$(this).parent().children(".fileName").html(allFilename);
			$(Prt).children(".btn1-s-slight").hide();
			$(Prt).children(".delete").detach();
			$(Prt).children(".fileName").after('<a href="#" class="ico _del delete">첨부된 ' + allFilename + ' 파일 삭제</a>');
			$(Prt).children(".delete").fadeIn();
		}

	});
	
	//파일 삭제 시
	$(document).delegate(btnDelete, "click", DeleteFileEvt);


	function DeleteFileEvt()
	{
		var _this = $(this);
		$(_this).parent().children("input[type='file']").val(null);
		$(_this).parent().children(".btn1-s-slight").show();
		$(_this).parent().children(".fileName").html("");
		$(_this).detach();
		return false;
	}
}