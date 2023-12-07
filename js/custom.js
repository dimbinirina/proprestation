$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() >= 700){
            $(".kl-navbar-menu").addClass('kl-fixed');
            $(".navbar-brand").addClass('kl-logo-scroll');
            $(".kl-menu").addClass('kl-menu-scroll');
        }else{
            $(".kl-fixed").removeClass('kl-fixed');
            $(".navbar-brand").removeClass('kl-logo-scroll');
            $(".kl-menu").removeClass('kl-menu-scroll');
        }
        return false;
    });
});
