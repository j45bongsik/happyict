$(document).ready(function() {

	/* 메인 슬라이더 실행 */

	var slider = $('.main-slider').bxSlider({
		'speed':1000,
		'auto': true,
		'autoControls': true,
		'autoControlsCombine': true,
		'pause': 4000,
		'mode': 'fade',
		// 'adaptiveHeight': true,
		'responsive': true,
		'pager': true,
		'controls': false,
		'oneToOneTouch': true
	});

	var visual = $('.main_visual');

	if (visual.length == 1) {

		$(".bx-controls").css("display","none");

	};

	$(document).on('click','.bx-next, .bx-prev, .bx-pager-link', function(){
		slider.startAuto();
		slider.stopAuto();

		$('.bx-start').css('display','block');
		$('.bx-stop').css('display','none');
	});

	/* LOOKIE 동영상 */

	$("#popVideo01 .btn-snsClose").click(function(){
		mask(false);
		$("#popVideo01").hide();
		$(".btn-video01").focus();
		$(".dim-pop").attr("data-target", "");
		setTimeout(function(){
			$("#btn-sns a").focus();
		});
		return false;
	});

	$(".btn-video01").click(function(){
		mask(true);
		$("#popVideo01").show();
		$(".dim-pop").attr("data-target", "#popVideo01");
		$("#popVideo01").focus();
		return false;
	});

	$("#popVideo02 .btn-snsClose").click(function(){
		mask(false);
		$("#popVideo02").hide();
		$(".btn-video02").focus();
		$(".dim-pop").attr("data-target", "");
		setTimeout(function(){
			$("#btn-sns a").focus();
		});
		return false;
	});

	$(".btn-video02").click(function(){
		mask(true);
		$("#popVideo02").show();
		$(".dim-pop").attr("data-target", "#popVideo02");
		$("#popVideo02").focus();
		return false;
	});

});
