$(document).ready(function () {

  screenWidth = $(window).width();


// Parallax
  $(".b-wrap>div").each(function () {
    var hasAttr = $(this).attr("data-parallax");
    if (hasAttr == "scroll") {
      var imagePath = $(this).find(".e-img-bg-image").attr("src");
      $(this).parallax({
        imageSrc: imagePath
      });
    }
  });
// ending Parallax



  var imageCenter = function () {

    $(".b-image-center").each(function () {

      var elem = $(this).find(".e-image-center-img"),
        elemWidth = elem.width(),
        elemHeight = elem.height(),
        contWidth = $(this).width(),
        contHeight = $(this).height(),
        posLeft = (contWidth - elemWidth) / 2,
        posTop = (contHeight - elemHeight) / 2;
      if (elemWidth > contWidth) {
        elem.css("left", posLeft);
      } else {
        elem.css("left", posLeft * (-1));
      }
      if (elemHeight > contHeight) {
        elem.css("top", posTop);
      } else {
        elem.css("top", posTop * (-1));
      }
    });

  };


// Document ready
  beforeCenter();
  imageCenter();
  circleCenter();
  youtube();
  attention();
//ending Document ready

  $(window).resize(function () {
    screenWidth = $(window).width();
    beforeCenter();
    imageCenter();
    circleCenter();
    youtube();
    attention();
  });

  $(window).load(function () {
    circleCenter();
    imageCenter();
    youtube();
    attention();
  });

});