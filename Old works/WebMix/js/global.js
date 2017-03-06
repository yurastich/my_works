$(document).ready(function () {

  var slider = $("#lightSlider").lightSlider({
    autoWidth: true,
    slideMargin: 40,
    pager: false,
    controls: true,
    prevHtml: "",
    nextHtml: ""
  });
  $('.goToPrevSlide').click(function () {
    slider.goToPrevSlide();
  });
  $('.goToNextSlide').click(function () {
    slider.goToNextSlide();
  });
  $(".fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic'
  });
  var header = $("header").height();
  $(".modal").click(function (e) {
    e.preventDefault();
    $(this).closest("section").find(".b-question").css("display", "block");
    $(this).closest("footer").find(".b-question").css("display", "block");
    $(".b-modal-window").css("display", "block");
  });
  $(".h-question-bottom-button").click(function (e) {
    e.preventDefault();
    $(".h-question-bottom").css("display", "block");
  });
  $(".e-close-question").click(function (e) {
    $(".b-question").css("display", "none");
    $(".b-modal-window").css("display", "none");
    $(".e-question-title-ok").text("");
    e.preventDefault();
  });

  YMaps.jQuery(function () {
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    map.setCenter(new YMaps.GeoPoint(37.370868, 54.90189), 10);
    map.setZoom(16);
    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "./img/yan.png";
    s.iconStyle.size = new YMaps.Point(30, 34);
    s.iconStyle.offset = new YMaps.Point(10, -30);
    var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
    placemark.name = "г.Серпухов,пос. Большевик ул.Ленина 112 оф.38";
    map.addOverlay(placemark);
  });

  jQuery(function($){
    $(".phone").mask("+7(999) 999-99-99");
  });

  // scrolls for menu /////////////////////////

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

$(document).ready(function(){
    $("#main-application, #order-call, #write-us").on('submit',function(event) { //устанавливаем событие отправки для формы с id=form
        event.preventDefault();
        form = $(this);
        var form_data = new FormData($(this)[0]);
        //var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
        type: "POST", //Метод отправки
        processData: false,
        contentType: false,
        url: "/WebMix/ajax/send_main_application.php", //путь до php фаила отправителя
        data: form_data,
            success: function(data) {
                //код в этом блоке выполняется при успешной отправке сообщения
                form.find('.e-question-title-ok').text(data);
                form[0].reset();
            }
        });
    return false;
    });

    $("#form-question").on('submit',function(event) {
      event.preventDefault();
      form = $(this);
      var form_data = new FormData($(this)[0]);
      $.ajax({
      type: "POST", //Метод отправки
      processData: false,
      contentType: false,
      url: "ajax/send_formquestion.php", //путь до php фаила отправителя
      data: form_data,
          success: function(data) {
              //код в этом блоке выполняется при успешной отправке сообщения
              form[0].reset();
          }
      });
    return false;
    });
});