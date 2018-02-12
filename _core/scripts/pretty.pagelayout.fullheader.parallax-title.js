if ($(window).width() > 767){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        $('.fx-prlx').css({
            'transform' : 'translate(0px, '+ wScroll /4 +'%)',
            'opacity' : 1 - (wScroll/600)
        });
    });
}