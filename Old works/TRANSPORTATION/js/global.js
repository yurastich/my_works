$(document).ready(function () {
  var headerHeight = $(".b-header").height();
  $(".grid").css("padding-top", headerHeight + "px");
  YMaps.jQuery(function () {
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    map.setCenter(new YMaps.GeoPoint(30.388614, 59.903516), 10);
    map.setZoom(16);
    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "./img/yan.png";
    s.iconStyle.size = new YMaps.Point(23, 23);
    var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
    placemark.name = "Седова 5";
    map.addOverlay(placemark);
  });

  $("body").mousemove(function (event) {
    $(".e-first-plane").css("top", event.pageY / 6 * (-1) +100 + "px");
    $(".e-first-plane").css("left", event.pageX / 6 * (-1) + 300 + "px");
  });


});