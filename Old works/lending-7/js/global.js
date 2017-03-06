$(document).ready(function () {

  screenWidth = $(window).width();
  screenHeight = $(window).height();


// img on bg

  $(".bg-img").each(function () {
    var pathImg = $(this).find(".e-bg-img").attr("src");
    $(this).css("background-image", "url('" + pathImg + "')");
  });

// end img in bg

//Circle

  var circle = function () {
    $(".b-circle").each(function () {
      var image = $(this).find(".e-circle-img-container"),
        imageWidth = image.outerWidth(),
        imageHeight = image.outerHeight(),
        contWidth = $(this).width(),
        contHeight = $(this).height(),
        posLeft = (contWidth - imageWidth) / 2,
        posTop = (contHeight - imageHeight) / 2;

      image.css({
        "left": posLeft,
        "top": posTop
      })
    });
  };

  $(".b-circle").hover(function () {

    setTimeout(function () {
      circle();
    }, 200)
  }, function () {
    setTimeout(function () {
      circle();
    }, 200)
  });

//end Circle

// Youtube

  var youtube = function () {
    $(".b-video").each(function () {
      var contWidth = $(this).width(),
        contHeight = $(this).height(),
        player = $(this).find(".e-video-player");
      player.attr({
        "width": contWidth,
        "height": contHeight
      });
    });
  };

// end Youtube

// Slider

  var sliderWithClients = function () {

    if (resize == 1) {
      sliderClients.destroy();
      resize = 0;
    }

    var sliderClients = $('.b-clients-list').lightSlider({
      item: 1,
      autoWidth: false,
      slideMargin: 0,
      onAfterSlide: function (el) {
        sliderClientsChange();
      }
    });
    $('.js-button-slider-clients-left').click(function () {
      sliderClients.goToPrevSlide();
    });
    $('.js-button-slider-clients-right').click(function () {
      sliderClients.goToNextSlide();
    });

    var resize = 1;

    var sliderClientsChange = function () {
      var elemPager = $(".b-clients .lSPager li.active"),
        elemPagerIndex = elemPager.index();
      $(".e-control-panel-number-container").find(".num").text("").text(elemPagerIndex + 1);
    };
  };

  var sliderClientsFunc = function () {
    var quantitySlide = $(".b-clients-list .e-clients-item").length;
    $(".e-control-panel-number-container").find(".end").text(quantitySlide);
  };

// end Slider

// Steps and Slider

  var sliderAndStep = function () {

    if (resize == 1) {
      sliderStep.destroy();
      resize = 0;
    }

    var sliderStep = $('.b-slider-under-steps-list').lightSlider({
      item: 1,
      autoWidth: false,
      slideMargin: 0,
      onAfterSlide: function (el) {
        sliderStepChange();
      }
    });

    $('.js-button-step-left').click(function () {
      sliderStep.goToPrevSlide();
    });
    $('.js-button-step-right').click(function () {
      sliderStep.goToNextSlide();
    });
    $(".b-steps-line .e-steps-line-item").click(function(){
      var indexNew = $(this).index();
      $(".b-steps-line .e-steps-line-item").removeClass("active");
      $(this).addClass("active");
      sliderStep.goToSlide(indexNew);
    });

    var resize = 1;

    var sliderStepChange = function () {
      var elemPager = $(".b-steps .lSPager li.active"),
        elemPagerIndex = elemPager.index();
      $(".b-steps-line .e-steps-line-item").removeClass("active");
      $(".b-steps-line .e-steps-line-item").eq(elemPagerIndex).addClass("active");
    };
  };

// end Steps and Slider


// Document ready
  circle();
  youtube();
  sliderAndStep();
  sliderWithClients();
  sliderClientsFunc();
//ending Document ready

  $(window).resize(function () {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    circle();
    sliderAndStep();
    sliderWithClients();
    youtube();
  });

  $(window).load(function () {
    circle();
    sliderClientsFunc();
    youtube();

  });

});