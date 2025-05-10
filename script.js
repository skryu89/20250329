$(function(){
    $("#drawer_toggle").click(function(){
        $(this).toggleClass("open");
        $("#global__nav").fadeToggle();
    });

    $(".slider").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
});

