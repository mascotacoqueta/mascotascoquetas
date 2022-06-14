$(function () {
    "use strict";
    // Play Part Veno box
    $(document).ready(function () {
        $('.veno_video').venobox();
    });

    // About Page Slider

    $('.play_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // Counter Down Starts
    $('#getting-started').countdown('2022/04/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('#getting-started2').countdown('2022/04/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('#getting-started3').countdown('2022/04/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    // Nice Scroll
    $(".scroll").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
    });

});