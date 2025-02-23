$(document).ready(function() {  

    // 메인 Section class on
    var scrollTop = $(this).scrollTop();
    if (scrollTop == 0) 
        $("section.box:first-child").addClass("on");
    $(window).on('scroll', function() {
        var winHeight = $(this).height();
        var scrollTop = $(this).scrollTop();
        var winS = Math.round($(window).scrollTop());
        

        $("section.box").each(function(index) {             
            var elementNTop = null;
            var elementTop = $(this).position().top - 250; 
            if($(this).next().length) {
                elementNTop = $(this).next().position().top - 250; 
            } else {
                elementTop = $(this).position().top - 250;
                elementNTop = $(document).height() - $(window).height();
            }   
            if (elementTop <= scrollTop && scrollTop <= elementNTop)
               $("section.box").eq(index).addClass("on");
            else 
               $("section.box").eq(index).removeClass("on");

            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height() || Math.round($(window).scrollTop()) == $(document).height() - $(window).height() || Math.floor($(window).scrollTop()) == $(document).height() - $(window).height() || $(window).scrollTop() == $(document).height() - $(window).height() + 1) {
                $("section.box").removeClass("on");
                $('section.box:last-child').addClass("on");
            }
        });
    });
    // 메인 Section 부드러운 스크롤  
    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.stopPropagation();
        var active = $('section.box.on');
        var activeLast = $('section.box:last-child');
        var activeFirst = $('section.box:first-child');
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;
        
        if (delta < 0) {
            next = active.next();
            if (next.length) {
                moveTop = next.offset().top - 110;
            } else {
                return true;
            }
        } else {
            prev = active.prev();
            if (prev.length) {
                moveTop = prev.offset().top - 110;
            }
            else if (!activeFirst.hasClass('on')) {
                moveTop = activeLast.offset().top - 110;
            } else {
                return true;
            }
        }
        $("html,body").stop().animate({
            scrollTop: moveTop  + 'px'
        }, {
            duration: 800, complete: function () {
            }
        });
    });

});