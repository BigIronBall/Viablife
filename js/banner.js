jQuery.fn.LoadImage=function(scaling,obj){
	var n = obj.length;
	return this.each(function(){
		var $t = $(this);
		var src = $(this).attr("data-img");
		var img = new Image();
		img.src = src;
		//处理ff下会自动读取缓存图片
		if(img.complete || img.width){
			n -- ;
			if(n == 0){
				banner();
			}
		    return;
		}
		$(img).load(function(){
			$t.attr("style","background:url("+src+") no-repeat center");
			n -- ;
			if(n == 0){
				banner();
			}
		});
	});
}
function banner(){
	//初始化banner样式
	$(".i-ban").removeClass("load-bg");
	var listN = $(".i-ban .list li").length;
	$(".i-ban .list li").eq(0).fadeIn(1000);

	for(i=0;i<listN;i++){
		$(".i-ban .btn").append('<span class="span'+i+' fl"></span>');
	}
	$(".i-ban .btn").css("margin-left",-$(".btn").width()/2);
	$(".i-ban .btn span").eq(0).addClass("cur");

	//执行效果
	var sw = 1,
		bl = true;
	$(".i-ban .btn span").mouseover(function(){
		sw = $(".i-ban .btn span").index(this);
		myShow(sw);
	});
	$(".i-ban .prev").click(function(){
		sw --;
		if(sw < 0){
			sw = listN
		}
		myShow(sw)
	})
	$(".i-ban .next").click(function(){
		sw ++;
		if(sw == listN){
			sw = 0
		}
		myShow(sw)
	})
	function myShow(i){
		if(!bl){
			return
		}
		bl = false
		$(".i-ban .btn span").eq(i).addClass("cur").siblings("span").removeClass("cur");
		$(".i-ban .list li").eq(i).stop(true,true).fadeIn(1000, "linear").siblings().stop(true,true).fadeOut(1000, "linear", function(){
			bl = true
		});
	}
	//滑入停止动画，滑出开始动画
	$(".i-ban").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		clearInterval(myTime);
		myTime = setInterval(function(){
		  myShow(sw);
		  sw++;
		  if(sw==listN){sw=0;}
		} , 5000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw);
	   sw++;
	   if(sw==listN){sw=0;}
	} , 5000);
}

$(function(){
	$(".i-ban li").LoadImage(true,$(".i-ban .list li"));
})

function _PreLoadImg(b,e){var c=0,a={},d=0;for(src in b){d++}for(src in b){a[src]=new Image();a[src].onload=function(){if(++c>=d){e(a)}};a[src].src=b[src]}}