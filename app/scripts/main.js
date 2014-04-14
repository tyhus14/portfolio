$(".nav-items").bind("click", function(e) {

    e.preventDefault();
    var location = $(this).attr("href")

    $('html, body').animate({
        scrollTop: $(location).offset().top
    }, 1500);

});