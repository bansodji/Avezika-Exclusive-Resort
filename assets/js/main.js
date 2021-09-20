// sticky navbar
$(document).ready(function(){
    $("#navbar").addClass("nav-padding");
    $("#mobile-navbar").addClass("nav-padding");
    $("#icon-menu").click(function(){
        $("#mobile-navbar").addClass("is-sticky");
    });
});
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("#navbar").addClass("is-sticky");
        $("#navbar").removeClass("nav-padding");
        $("#navbar").css({ "transition": "300ms" });
        $("#mobile-navbar").addClass("is-sticky");
        $("#mobile-navbar").removeClass("nav-padding");
    }
    else {
        $("#navbar").removeClass("is-sticky");
        $("#navbar").addClass("nav-padding");
        $("#navbar").css({ "transition": "300ms" });
        $("#mobile-navbar").removeClass("is-sticky");
        $("#mobile-navbar").addClass("nav-padding");
    }
});

// Owl carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
})
