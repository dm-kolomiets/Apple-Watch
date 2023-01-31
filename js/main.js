let winWidth;

jQuery(function ($) {

    "use strict";

    /* check browser */
    winWidth = $(window).width();

    //scroll animation
    $(window).on('scroll load', function () {
        if ($('.animate-item').length && ($(window).width() >= 1200)) {
            $('.animate-item').not('.animated').each(function () {
                var th = $(this);
                if ($(window).scrollTop() >= th.offset().top - ($(window).height() * 0.9)) {
                    th.addClass('animated');
                }
            });
        }
    });
});
