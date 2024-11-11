// jQuery Click Scroll
// By Syamsul'isul' Arifin

$(document).ready(function() {
    var sectionArray = [1, 2, 3, 4, 5, 6];

    // Initialize the first nav link as active
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active').removeClass('inactive');

    // Scroll event
    $(document).scroll(function() {
        var docScroll = $(document).scrollTop() + 1; // Adding 1 to avoid issues with equality
        $.each(sectionArray, function(index, value) {
            var offsetSection = $('#section_' + value).offset().top - 83;

            if (docScroll >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active').removeClass('inactive');
            }
        });
    });

    // Click event for scrolling
    $('.click-scroll').click(function(e) {
        e.preventDefault();
        var targetSection = $(this).data('target'); // Assuming you have data-target attributes
        var offsetClick = $('#' + targetSection).offset().top - 83;

        $('html, body').animate({
            scrollTop: offsetClick
        }, 300);
    });
});
