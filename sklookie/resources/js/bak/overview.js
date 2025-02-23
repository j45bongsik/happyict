$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	
	var win_w = $(window).width();
//	if(win_w > 1024){
		var scene1 = new ScrollMagic.Scene({triggerElement: ".sect_2"}).setTween(".sect_2", 0.7, {x: 0, opacity: 1}).addTo(controller);
		var scene2 = new ScrollMagic.Scene({triggerElement: ".sect_3"}).setTween(".sect_3", 0.7, {x: 0, opacity: 1}).addTo(controller);
		var scene3 = new ScrollMagic.Scene({triggerElement: ".sect_3"}).setTween(".sect_4", 0.7, {y: 0, opacity: 1}).addTo(controller);
//	}else{
//		TweenMax.to($(".sect_2 .inner-cont"), 0.7, {x: 0, opacity: 1, });
//		TweenMax.to($(".sect_3"), 0.7, {x: 0, opacity: 1});
//		TweenMax.to($(".sect_4"), 0.7, {y: 0, opacity: 1});
//	}
	
	
	//var time_1 = new TimelineMax();

	TweenMax.to($(".dia-overview .line_group"),2,{rotation:360,ease:Expo.easeOut});
	TweenMax.to($(".dia-overview .tit_dia"),1,{scale:1,opacity:1,ease:Expo.easeInOut, delay:0.2});
	TweenMax.to($(".dia-overview .dia_circle_2"),1.2,{scale:1,opacity:1,ease:Expo.easeInOut, delay:0.6});
	TweenMax.to($(".dia-overview .dia_circle_1"),1.6,{scale:1,opacity:1,ease:Expo.easeInOut, delay:1});
	TweenMax.to($(".dia-overview .li_1"),1,{y:0,force3D:true,opacity:1,ease:Quad.easeOut, delay:2.3});
	TweenMax.to($(".dia-overview .li_2"),1,{y:0,force3D:true,opacity:1,ease:Quad.easeOut, delay:2.6});
	TweenMax.to($(".dia-overview .li_3"),1,{y:0,force3D:true,opacity:1,ease:Quad.easeOut, delay:2.9});

	//setTimeout(function(){
		//time_1.to($(".dia-overview"),2,{y:20,repeatDelay:0, repeat:-1, ease:Expo.ease, yoyo:true});
		//time_1.play();
	//},3600)

	/* 원 애니메이션*/
	var SLICE_LINE_LEN = 60;
	var GUIDE_DOTS_LEN = 10;
	var radius = 175;
	var lineLen = 60;
	var margin = {top:0+radius, left:0+radius};

	 for(var i = 0; i < SLICE_LINE_LEN; ++i){
                var dw = 10/SLICE_LINE_LEN;
				var posx = margin.left+radius * Math.sin(2*i*Math.PI/lineLen);
                var posy = margin.top+radius * Math.cos(2*i*Math.PI/lineLen);
                var rotate = i/lineLen*360;
                TweenMax.to($(".line_dot").eq(i), 0, { x:posx, y:posy, width:10, height:1, alpha:0, rotation:-rotate, ease:Expo.easeInOut});
      }

	 

            for(var i = 0; i < lineLen; ++i){
				var time = i/17;
                var posx = margin.left+radius * Math.sin(2*i*Math.PI/lineLen);
                var posy = margin.top+radius * Math.cos(2*i*Math.PI/lineLen);
                var rotate = i/lineLen*360;

                TweenMax.to($(".line_dot").eq(i), time, { x:posx, y:posy, width:10, height:1, alpha:1, rotation:-rotate, ease:Expo.easeInOut});
            }
	
	setTimeout(function(){
		$(".lines").addClass("ani");
	},0)
});