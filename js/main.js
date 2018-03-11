$(function() {
    $(".rslides").responsiveSlides({
        auto: true,
        speed: 1000,
        maxwidth: 500,
        timeout: 3000
    });
});
$(document).ready(function() {
    $("#sticker").sticky({
        topSpacing: 0
    });

    $("#sticker").on("sticky-start", function() {
        $("#sticker").css("background-color", "black");
    });

    $("#sticker").on("sticky-end", function() {
        $("#sticker").css("background-color", "transparent");
    });
});
