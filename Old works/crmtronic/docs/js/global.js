$(document).ready(function () {

  $(".js-drop").click(function () {
    var par = $(this).closest(".e-item-property"),
      el = par.find(".e-item-property-text-container"),
      elActive = $(this).hasClass("active");
    $(".e-item-property-text-container").slideUp();
    $(".e-item-property-button-drop").removeClass("active");

    if (!elActive) {
      el.slideDown();
      $(this).addClass("active");
    }

  });

  $(".js-title-click").click(function () {
    var par = $(this).closest(".b-title-block"),
      el = par.find(".b-list-property"),
      elActive = par.hasClass("active");
    $(".b-list-property").slideUp();
    $(".b-title-block").removeClass("active");

    if (!elActive) {
      el.slideDown();
      par.addClass("active");
    }

  });

  $(".js-color-code").each(function () {
    var colorBlock = $(this).closest("tr").find(".js-color-bg"),
      color = $(this).text();

    colorBlock.css("background", color);
  });

  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'swing');
      event.preventDefault();
    });
  });


});