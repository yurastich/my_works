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


// Youtube
  var youtube = function () {
    $(".b-youtube").each(function () {
      var player = $(this).find(".e-youtube-player"),
        contWidth = $(this).width(),
        contHeight = $(this).height();
      player.attr("width", contWidth);
      player.attr("height", contHeight);
    });
  };
// ending Youtube


// Attention list
  var attention = function () {
    $(".b-attention .e-attention-item").each(function () {
      var elem = $(this).find(".e-attention-item-num"),
        elemHeight = elem.outerHeight(),
        contHeight = $(this).height(),
        posTop = (contHeight - elemHeight) / 2;
      elem.css("top", posTop);
    });
  };
// end Attention list

  var beforeCenter = function () {
    $(".b-before").each(function () {
      var subtitleWidth = $(this).width(),
        before = $(this).find(".e-before-line"),
        beforeWidth = before.width(),
        beforeLeft = (subtitleWidth - beforeWidth) / 2;
      before.css("left", beforeLeft);
    });
  };

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

  var circleCenter = function () {
    $(".b-circle").each(function () {
      var contWidth = $(this).width(),
        elem = $(this).find(".e-circle-container-img"),
        elemHeight = elem.height(),
        elemWidth = elem.width(),
        posTop = (contWidth - elemHeight) / 2,
        posLeft = (contWidth - elemWidth) / 2;
      $(this).css("height", contWidth);
      elem.css({"left": posLeft, "top": posTop});
    })
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