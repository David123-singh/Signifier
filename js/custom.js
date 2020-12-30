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

var mobile_btn = document.querySelector(".mobile-close-btn");
var menu_sec = document.querySelector(".navWrapper");
var bg_scroll = document.querySelector("body");
mobile_btn.addEventListener("click", function(){
    mobile_btn.classList.toggle("open-menu"); 
    menu_sec.classList.toggle("nav-open");
    bg_scroll.classList.toggle("scroll-hide")
});