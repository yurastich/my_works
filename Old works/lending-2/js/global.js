$(document).ready(function () {


  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'swing');
      event.preventDefault();
    });
  });


  screenWidth = $(window).width();
  screenHeight = $(window).height();

  var blockInCenter = function (container, element) {
    var elementWidth = element.outerWidth(),
      elementHeight = element.outerHeight(),
      containerWidth = container.outerWidth(),
      containerHeight = container.outerHeight(),
      positionLeft = (containerWidth - elementWidth) / 2,
      positionTop = (containerHeight - elementHeight) / 2;
    if (elementWidth > containerWidth) {
      element.css("left", positionLeft)
    } else {
      element.css("left", positionLeft * (-1))
    }

    if (elementHeight > containerHeight) {
      element.css("top", positionTop);
    } else {
      element.css("top", positionTop * (-1));
    }
  };


  var firstSlide = function () {
    $(".b-slider-first .b-img-bg").css("height", screenHeight);
  };

  var beforeCenter = function () {
    $(".b-before-block").each(function () {
      var subtitleWidth = $(this).width(),
        before = $(this).find(".e-before-block-line"),
        beforeWidth = before.width(),
        beforeLeft = (subtitleWidth - beforeWidth) / 2;
      before.css("left", beforeLeft);
    });

    $(".b-border-page").each(function () {
      var subtitleWidth = $(this).outerWidth(),
        before = $(this).find(".e-border-page-line"),
        beforeWidth = before.outerWidth(),
        beforeLeft = (subtitleWidth - beforeWidth) / 2;
      before.css("left", beforeLeft);
    });
  };

  var imageCenter = function () {
    $(".b-clients-list .e-clients-item-img-container").each(function () {

      var cont = $(this),
        elem = $(this).find('.e-clients-item-img');
      blockInCenter(cont, elem);
    });

  };

  var imageToBg = function () {
    $(".b-img-bg").each(function () {
      var src = $(this).find(".e-img-bg-image").attr("src");
      $(this).css("background-image", "url('" + src + "')")
    });
  };

// Clock
  var size = "md";
  if (screenWidth >= 1600) {
    size = "lg"
  }
  if (screenWidth <= 750) {
    size = "xs"
  }
  $('.e-clock').flipcountdown({
    size: size,
    beforeDateTime: '12/10/2015 00:00:01'
  });
  /*   00:00:01 не обязательно задавать
   *
   *     Размеры:
   lg-large
   md-middle, default
   sm-small
   xs-Extra small

   Включение, выключение минут, часов, дней
   showHour:false,
   showMinute:false,
   showSecond:true
   *
   *
   * */

// end Clock


// Clients

  $(".b-clients-list .e-clients-item").click(function () {
    var num = $(this).index(),
      comment = $(".b-clients-comment .e-client-comment-item");
    $(".b-clients-list .e-clients-item").removeClass("active");
    $(this).addClass("active");
    $(".b-clients-comment").slideDown();
    comment.removeClass("active").eq(num).addClass("active");
  });
  $(".e-button-close-comment").click(function () {
    $(".b-clients-list .e-clients-item").removeClass("active");
    $(".b-clients-comment").slideUp();
  });
  $(".b-clients-list .e-clients-item:first-child").click();
  var clientsBefore = function () {
    $(".e-clients-item-before").each(function () {
      var cont = $(this).closest(".e-clients-item"),
        contWidth = cont.outerWidth(),
        elemWidth = $(this).width(),
        posLeft = (contWidth - elemWidth) / 2;
      $(this).css("left", posLeft - 20);
    });
  };


// end Clients

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
  imageToBg();
  firstSlide();
  clientsBefore();

//ending Document ready


  $(window).resize(function () {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    beforeCenter();
    imageCenter();
    circleCenter();
    firstSlide();
    clientsBefore();
  });

  $(window).load(function () {
    circleCenter();
    beforeCenter();
    imageCenter();
  });

});