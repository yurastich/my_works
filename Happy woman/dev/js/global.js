$(document).ready(function () {

  widthScreen = $(window).width();
  heightScreen = $(window).height();

  var blockInCenter = function (container, element) {
    var elementWidth = $(element).outerWidth(),
      elementHeight = $(element).outerHeight(),
      containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      positionLeft = (containerWidth - elementWidth) / 2,
      positionTop = (containerHeight - elementHeight) / 2;

    //if (positionTop < 20) {
    //  positionTop = 20;
    //}
    $(element).css("left", positionLeft);

    $(element).css("top", positionTop);

  };

  // Number fix
  $("[name='num']").keypress(function (event) {
    var controlKeys = [8, 9, 13, 35, 36, 37, 39];
    // IE doesn't support indexOf
    var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
    // Some browsers just don't raise events for control keys. Easy.
    // e.g. Safari backspace.
    if (!event.which || // Control keys in most browsers. e.g. Firefox tab is 0
      (49 <= event.which && event.which <= 57) || // Always 1 through 9
      (48 == event.which && $(this).attr("value")) || // No 0 first digit
      isControlKey) { // Opera assigns values for control keys.
      return;
    } else {
      event.preventDefault();
    }
  });

  // Link anchor
  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1500, 'swing');
      event.preventDefault();
    });
  });


  var androidAnimate = function () {
    var button = document.querySelectorAll('.anim');
    for (var i = 0; i < button.length; i++) {
      button[i].onmousedown = function (e) {

        var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
        var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
        var effect = document.createElement('div');
        effect.className = 'effect';
        effect.style.top = y + 'px';
        effect.style.left = x + 'px';
        e.srcElement.appendChild(effect);
        setTimeout(function () {
          e.srcElement.removeChild(effect);
        }, 1100);
      }
    }
  };

  // menu button
  $(".js-button-menu").click(function () {
    var menu = $(this).closest(".b-header").find(".b-nav");
    $(this).toggleClass("active");
    menu.slideToggle();
  });
  // menu button end

  // Popup
  var activePopupCenter = function () {
    var popupActive = $(".b-popup-overlay.active"),
        heightPop = popupActive.find(".b-popup").outerHeight(),
        screenHeight = $(window).height();
    console.log(heightPop)
    if(heightPop>=screenHeight){
      popupActive.find(".b-popup").addClass("m-popup-scroll").css({
        "height": (screenHeight - 30)
      });
    }else{
      popupActive.find(".b-popup").removeClass("m-popup-scroll").css({
        "height": "auto"
      });
    }

    blockInCenter(window, popupActive);
  };

  var popup = function () {
    var popup = $(".b-popup-overlay");

    $("[data-button]").click(function () {
      var popupNum = $(this).data("button");
      $("[data-modal='" + popupNum + "']").addClass("active").animate({
        "opacity": 1
      }, 300);
      overlayOpen();
    });


    $("[data-button]").click(function (e) {
      e.preventDefault();
      activePopupCenter();
    });

    $(".b-close").click(function () {
      $(".b-popup-overlay").animate({
        "opacity": 0
      }, 300);
      setTimeout(function () {
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    });

    $(".b-overlay").click(function () {
      $(".b-popup-overlay").animate({
        "opacity": 0
      }, 300);
      setTimeout(function () {
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    })
  };
  // Popup end

  // Overlay
  var overlayOpen = function () {
    $(".b-overlay").addClass("active");
    $(".b-overlay").animate({
      "opacity": "1"
    }, 300);
  };

  var overlayClose = function () {

    $(".b-overlay").animate({
      "opacity": "0"
    }, 300);
    setTimeout(function () {
      $(".b-overlay").removeClass("active");
    }, 310);
  };
  // Overlay end

// popup end

  var firstScreen = function () {
    var header = $(".b-header").outerHeight(),
      heightScreen = $(window).height(),
      heightFirstFooter = $(".b-first-footer").outerHeight(),
      cont = heightScreen - header - heightFirstFooter;
    if (heightScreen >= 600) {
      $(".e-first-container").css("height", cont);
    } else {
      $(".e-first-container").css("height", 431);
    }

  };

  $(".b-video-button").click(function () {
    $(this).hide();
  });

  var teamSlider = $(".b-team-list").lightSlider({
    item: 5,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 14,
    pager: false,
    loop: true,
    responsive : [
      {
        breakpoint:900,
        settings: {
          item:3
        }
      },
      {
        breakpoint:767,
        settings: {
          item:2
        }
      },
      {
        breakpoint:479,
        settings: {
          item:1
        }
      }
      ]
  });

  $('.js-team-left').click(function () {
    teamSlider.goToPrevSlide();
  });
  $('.js-team-right').click(function () {
    teamSlider.goToNextSlide();
  });

  $(".b-question-list .e-question-text").click(function () {

    var par = $(this).closest(".e-question-item"),
      allPar = $(this).closest(".b-question-list").find(".e-question-item"),
      active = par.hasClass("active");

    if (!active) {
      allPar.removeClass("active");
      par.addClass("active");
      par.find(".b-input").focus();
    } else {
      allPar.removeClass("active");
    }

  });

  $('.b-question-block .b-input').focus(function () {
    var par = $(this).closest(".e-question-item"),
      allPar = $(this).closest(".b-question-list").find(".e-question-item");
    allPar.removeClass("active");
    par.addClass("active");
  });

  var nearSlider = new Swiper('.e-near-container .swiper-container', {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: false,
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    nextButton: '.js-near-right',
    prevButton: '.js-near-left',
    scrollbarDraggable: true,
    keyboardControl: true,
    mousewheelControl: true,
    breakpoints: {
      1000: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      479: {
        slidesPerView: 1
      },
    }
  });

  var audioSlider = new Swiper('.b-slider-audio .swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    nextButton: '.js-audio-right',
    prevButton: '.js-audio-left',
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 1,
        slidesPerColumn: 1
      }
    }
  });





  androidAnimate();
  popup();
  firstScreen();


  $(window).resize(function () {
    var screenHeight = $(window).height(),
      screenWidth = $(window).width();

    popup();
    firstScreen();
    activePopupCenter();

    if(screenWidth>= 768){
      var menu = $(".b-header .b-nav");
      $(".js-button-menu").removeClass("active");
      menu.show();
    }



  });

  $(window).load(function () {
    firstScreen();

  });


  $(window).scroll(function () {
    var scr = $(window).scrollTop(),
      screenHeight = $(window).height(),
      screenWidth = $(window).width();

  });


});
