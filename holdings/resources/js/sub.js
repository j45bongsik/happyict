
$(document).ready(function() {
	 
    $('table.scroll').each(function() {
        var scrollEX = '<div class="scroll_ex">' +
                           '<div class="ico">' +
                                '<span>모바일용 가로스크롤</span>' +
                            '</div>' +
                            '<p>좌우로 스크롤 하시면<br />내용을 확인하실 수 있습니다.</p>' +
                        '</div>'
        $(this).children('tbody').after(scrollEX);
    });
    
    scrollSub();
    scrollX();
    
    // 말줄임표
    $('.ellipsis').ellipsis({responsive: true});
    
     $(window).on('scroll', function() {
         scrollSub(); 
    });
   
    //공시정보관리규정 탭 
    $(".tab_contents_wrap").find("[id^='tab']").hide(); 
    $(".tabs li:first").attr("class","on"); 
    $(".tab_contents_wrap #tab1").fadeIn();

    $('.tabs a').click(function(e) {
        e.preventDefault();
        if ($(this).closest("li").attr("class") == "on"){
            return;
        } else {
        $(".tab_contents_wrap").find("[id^='tab']").hide();
            $(".tabs li").attr("class",""); 
            $(this).parent().attr("class","on"); 
            $('#' + $(this).attr('name')).fadeIn(); 
        }

    });
});

function scrollSub() {
    var scroll = $(window).scrollTop();
    if (scroll >= 242) {
        $('.location, .sub_contents').addClass('on');
    } else {
        $('.location, .sub_contents').removeClass('on');
    }
}

// 모바일용 가로스크롤 공지
function scrollX() {
    if ($(window).width() <= 640) {
        $('.scroll_ex').addClass('on');
        $('.scroll_ex').each(function() {
            $(this).on('click touchend', function() {
                $(this).addClass('click_on');
            });
        });
    } else {
        $('.scroll_ex').removeClass('on');
    }
}

// 미디어센터
$(function () {
	$('.media_list ul li a .detail p.ellipsis').each(function() {
		if( $(this).text().length === 0 ) {
			$(this).css('display', 'none');
		}
	});
});