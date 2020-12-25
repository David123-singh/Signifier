// fixed header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".header").addClass("whiteBg");
    }
    else{
        $(".header").removeClass("whiteBg");
    }
})
