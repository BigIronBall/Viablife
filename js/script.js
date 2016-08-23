// Window Scroll
var windowScroll = function () {
    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();

        if ($(window).scrollTop() > 70 && !$('.site-header').hasClass("site-header-nav-scrolled")) {
            $('.site-header').addClass('site-header-nav-scrolled');
        } 
        // else {
        //     $('.site-header').removeClass('site-header-nav-scrolled');
        // }
    });
};

$( document ).ready(function() {
    windowScroll();



    $(".glyphicon-search").click(function(){
    	
    	 // $(".site-header-nav").hide();
    		// $(".search-box").removeClass("hidden").find("input[type=text]").focus();
    	
    	// $(".site-header-nav").addClass("fadein").removeClass("fadeout");
    	// $(".search-box").removeClass("hidden").removeClass("fadein").addClass("fadeout").find("input[type=text]").focus();
    });

    $(".glyphicon-remove").click(function(){
    	// $(".search-box").addClass("hidden");
    	// $(".site-header-nav").show();
    	 
    	// $(".search-box").removeClass("fadeout").addClass("hidden");
    	// $(".site-header-nav").removeClass("hidden").removeClass("fadein").addClass("fadeout");

    	// $(".site-header-nav").show();
    });
    

    $(".search-box input[type=text]").on("keyup",function(e){
    	if (e.keyCode === 13) {
    		$(".search-box input[type=submit]").trigger("click");
    		return false;
    	}
    })
});