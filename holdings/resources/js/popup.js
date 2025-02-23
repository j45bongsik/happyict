/* 팝업 */

$(function() {

	var appendthis = ("<div class='modal_overlay js-modal_close'></div>");

	// ON LOAD

	$(window).on('load', function() {

		cookiedata = document.cookie;

		if(cookiedata.indexOf("close=Y") < 0) {
			$('body,html').animate({ scrollTop: 0 }, 1000);
			$("body").append(appendthis);
			$(".modal_overlay").fadeTo(500, 0.6);
			$(".modal_overlay").css("height",$(document).height());

			$("#hold_popup").fadeIn($(this).data());
		}

	});

});

function getCookie(cname) {

	var name = cname + "=";
	var ca = document.cookie.split(';');

	for (var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}

	return "";

}

function setCookie(cname, cvalue, exdays) {

	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));

	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;

}

function popupClose() {

	if ($("input[name='chkbox']").is(":checked") == true) {
		setCookie("close","Y",1);
	}

	$(".modal_box, .modal_overlay").fadeOut(700, function() {
		$(".modal_overlay").remove();
	});

}