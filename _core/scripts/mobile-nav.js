$("#side-bar .side-bar-box").clone().find("li").appendTo(".sidebar-links-parent .sidebar-links");
$('.sidebar-links li:first-of-type').clone().appendTo('.sidebar-links .mobile-nav-headers');
$(".drop-down-plates .drop-down-plates:nth-of-type(2) .plates ul").clone().appendTo(".clonner .main-nav").removeClass('drop-down-link-headers');

$(document).ready(function () {
    "use strict";
    $(document).on('click', "#mobile-nav .mobile-nav-headers", function () {
        $(".main-nav, .sidebar-links li").slideToggle();
    });
});
$(document).ready(function () {
    "use strict";
    $(".drop-down-plates  ul li:first-child").addClass('drop-down-link-headers');
    $("#nav-bar > ul li:not(':nth-of-type(1)')").addClass('hc');
    $("#search-box input").removeAttr('value').attr("placeholder", "What are you looking for?");
});
$(document).ready(function () {
    "use strict";
    $(".mobile-nav-close").hide();
    $(".mobile-nav-open").click(function () {
        $("#mobile-nav-plate").show();
        $("#mobile-nav, #mobile-nav-plate").stop().animate({
            right: "-3px"
        });
        $(".mobile-nav-open").hide();
        $(".mobile-nav-close").show();
    });

    $(".mobile-nav-close").click(function () {
        $("#mobile-nav, #mobile-nav-plate").stop().animate({
            right: "-230px"
        });
        $(".mobile-nav-open").show();
        $(".mobile-nav-close").hide();
    });

});
// Close Mobile nav when user clicks outside the Mobile Nav 
$(document).mouseup(function (e) {
    "use strict";
    var container = $("#mobile-nav");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.stop().animate({
            right: "-230px"
        });
        $("#mobile-nav-plate").animate({
            right: "-230px"
        });
        $(".mobile-nav-open").show();
        $(".mobile-nav-close").hide();
    }
});
$(document).ready(function () {
    $("#mobile-nav .main-nav:not(.sub-menu) > li").addClass('mobile-nav-parent-plus');
    $("#mobile-nav .sub-menu").hide();
    $("#mobile-nav .main-nav:not(.sub-menu) > li").click(function () {
        $("#mobile-nav .sub-menu:visible").slideUp();
        $("#mobile-nav .sub-menu").eq($(this).index()).delay(30).slideToggle().stop();
        $("#mobile-nav .main-nav:not(.sub-menu) > li").eq($(this).index()).toggleClass('mobile-nav-parent-plus, mobile-nav-parent-minus');
        $("#mobile-nav .main-nav:not(.sub-menu) > li").not($(this)).removeClass('mobile-nav-parent-minus').addClass('mobile-nav-parent-plus');
    });
});