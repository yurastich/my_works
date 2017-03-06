$(document).ready(function () {
  $('#fullpage').fullpage();
  $(".fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic'
  });
  $(".lightSlider").lightSlider({
    autoWidth: true,
    slideMargin: 0,
    pager: false
  });
  var slider_diploma = $(".diploma").lightSlider({
    autoWidth: true,
    slideMargin: 0,
    pager: false,
    auto: true,
    loop: true
  });
  $('.diploma').parent().on('mouseenter', function () {
    slider_diploma.pause();
  });
  $('.diploma').parent().on('mouseleave', function () {
    slider_diploma.play();
  });
  $(".js-photo").lightSlider({
    autoWidth: true,
    slideMargin: 0,
    pager: false,
    prevHtml: "",
    nextHtml: ""
  });
  YMaps.jQuery(function () {
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    map.setCenter(new YMaps.GeoPoint(30.456401, 59.91945), 10);
    map.setZoom(16);
    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "./img/yan.png";
    s.iconContent = "asadsdas";
    s.iconStyle.size = new YMaps.Point(23, 23);
    s.iconStyle.offset = new YMaps.Point(-9, -29);
    var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
    placemark.name = "улица Джона Рида, 3к1";
    map.addOverlay(placemark);
  });
  $(".left-menu a").click(function () {
    $("#st-container").removeClass("st-menu-open st-effect-1");
    $(".cmn-toggle-switch").removeClass("active");
    $('.test').css("display", "none");
  });
});