$(document).ready(function () {

  screenWidth = $(window).width();

// GoogleMaps
  function initializeMap() {
    var myLatlng = new google.maps.LatLng(50.4021368, 30.2525035);
    var myOptions = {
      zoom: 10,
      center: myLatlng,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
  }

  var mapCenter = function () {

    var elem = $(".b-map").find(".e-map-form"),
      elemWidth = elem.outerWidth(),
      elemHeight = elem.outerHeight(),
      contWidth = $(".b-map").width(),
      contHeight = $(".b-map").height(),
      posLeft = (contWidth - elemWidth) / 2,
      posTop = (contHeight - elemHeight) / 2;
    elem.css({"left": posLeft, "top": posTop});
  };
// ending GoogleMaps

// Days
  $(window).scroll(function () {
    var scroll = $(window).scrollTop(),
      listTop = $(".b-days-list").offset().top,
      listHeight = $(".b-days-list").outerHeight();

    $(".b-days-list").attr("data-top", listTop);
    if (scroll >= listTop - 400 && scroll <= listTop + listHeight - 400) {
      $(".e-days-list-line").css("height", scroll - listTop + 400);
    }
    $(".e-days-item").each(function () {
      var posSet = $(this).attr("data-top", $(this).offset().top),
        posGet = $(this).attr("data-top");
      if (scroll >= posGet - 300) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
// ending Days

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

////////////     MOBILE

  var mobile = function () {
// Email
    var emailFunc = function () {
      $(".js-circle").each(function () {
        var elemWidth = $(this).width(),
          cont = $(this).closest(".b-container, .e-map-form"),
          contWidth = cont.outerWidth(),
          posLeft = (contWidth - elemWidth) / 2;
        $(this).css("left", posLeft);
      });
    };
// ending Email

// Person
    var person = function () {
      var elem = $(".e-person-img-container").width(),
        cont = $(".b-person .e-person-list").width(),
        posLeft = (cont - elem) / 2;
      $(".e-person-img-container").css("left", posLeft)
    };
// ending Person

// Days
    var daysFunc = function () {

      var item = $(".e-days-item"),
        itemWidth = item.outerWidth(),
        listWidth = $(".b-days-list").outerWidth(),
        lineWidth = $(".b-days-list .e-days-list-line").width(),
        leftLine = (listWidth - lineWidth) / 2;

      $(".b-days-list .b-circle").each(function () {
        var elemWidth = $(this).outerWidth(),
          posLeft = (itemWidth - elemWidth) / 2;
        $(this).css("left", posLeft);
      });
      $(".b-days-list .e-days-list-day").each(function () {
        var elemWidth = $(this).width(),
          posLeft = (itemWidth - elemWidth) / 2;
        $(this).css("left", posLeft);
      });

      $(".b-days-list .e-days-list-line").css("left", leftLine);
    };
// ending Days

    if (screenWidth <= 850) {
      emailFunc();
      person();
      daysFunc();
    }
  };

///////////////////  ending MOBILE

  var beforeCenter = function () {
    $(".b-subtitle").each(function () {
      var subtitleWidth = $(this).width(),
        before = $(this).find(".e-subtitle-before"),
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
  initializeMap();

  beforeCenter();
  imageCenter();
  circleCenter();
  mapCenter();
  mobile();
//ending Document ready

  $(window).resize(function () {
    screenWidth = $(window).width();
    beforeCenter();
    imageCenter();
    circleCenter();
    mapCenter();
    mobile();
  });

  $(window).load(function () {
    circleCenter();
    imageCenter();
    mapCenter();
    mobile();
  });

});