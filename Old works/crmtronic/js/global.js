$(document).ready(function () {

  widthScreen = $(window).width();
  heightScreen = $(window).height();
  heightHeader = $(".b-header").outerHeight();
  heightFooter = $(".b-footer").outerHeight();
  heightCont = $(".b-wrap").outerHeight();


  var blockInCenter = function (container, element) {
    var elementWidth = $(element).outerWidth(),
      elementHeight = $(element).outerHeight(),
      containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      positionLeft = (containerWidth - elementWidth) / 2,
      positionTop = (containerHeight - elementHeight) / 2;
    $(element).css("left", positionLeft);

    $(element).css("top", positionTop);

  };

  var scrollHorizontal = function (elem, parentElem, scrollContainer) {
    var windowWidth = $(window).width(),
      minWidthElem = $(elem).css("min-width"),
      minWidth = parseInt(minWidthElem);
    $(parentElem).each(function () {
      var containerScroll = $(this).closest(scrollContainer);
      if (windowWidth <= minWidth) {
        containerScroll.mCustomScrollbar({
          axis: "x",
          theme: "dark-3"
        });
      } else {
        containerScroll.mCustomScrollbar("destroy");
      }
    });
  };

  var beforeLineInCenter = function (container, line) {
    var lineWidth = $(line).outerWidth(),
      lineHeight = $(line).outerHeight(),
      containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      positionLeft = (containerWidth - lineWidth) / 2;
    line.css("left", positionLeft);
  };

// Language list
  $(".b-languages-list").click(function () {
    $(this).addClass("opening");
    $(".e-languages-item").toggleClass("opening");
  });
  $(".e-languages-item").click(function () {
    var activeClass = $(this).hasClass("active");
    if (activeClass == false) {
      $(".e-languages-item").removeClass("active");
      $(this).addClass("active");
    }
  });
// end   Language list

// Login popup
  $(".js-popup-login").click(function () {
    $(this).toggleClass("active");
    $(this).closest(".m-popup-container").toggleClass("active");
  });
  $(".js-without-register").click(function () {
    $(".js-popup-login").removeClass("active");
    $(this).closest(".m-popup-container").removeClass("active");
    $(".m-popup-registration").addClass("opening");
  });
// end   Login popup

// Overlay
  $(document).on("click", ".js-overlay", function () {
    var popupOpening = $(".b-popup").hasClass("opening");
    if (popupOpening == true) {
      $(".b-overlay").addClass("active");
    } else {
      $(".b-overlay").removeClass("active");
    }
  });
  var headerHeight = $(".b-header").outerHeight();
  $(".b-overlay").css("top", headerHeight);
  $(".b-button").addClass("js-overlay");
// end   Overlay

// Popup
  $(".m-button-close-popup").click(function () {
    $(this).closest(".b-popup").removeClass("opening");
    $(this).closest(".b-popup").removeClass("open");
    $(this).closest(".m-info-line-with-popup").removeClass("js-pop-info-line").css("height", "auto");
  });
  $(".js-color-price-button").click(function () {
    $(this).closest(".e-color-price-item").find(".b-popup").addClass("opening");
  });
// end   Popup

// Blocks in center
  var centerBlocks = function () {
    var popupWidth = $(".b-popup").width(),
      leftPos = (widthScreen - popupWidth) / 2,
      popupInContainer = $(".b-container").find(".b-popup").addClass("m-popup-in-container"),
      container = $(".b-container").outerWidth(),
      leftPosCont = (container - popupWidth) / 2;
    $(".b-popup").css("left", leftPos);
    $(".m-popup-in-container").css("left", leftPosCont);

  };
// end   Blocks in center

// Background
  $(".b-bg-js").each(function () {
    var imageLink = $(this).find(".e-bg-js-img").attr("src"),
      addImg = $(this).has(".e-bg-js-img").addClass("m-with-img"),
      hasImg = $(this).hasClass("m-with-img");
    $(this).css("background-image", "url('" + imageLink + "')");
    if (hasImg == true) {
      $(".m-title-top, .m-subtitle-top").css("color", "#fff");
    }
  });
  var underTop = function () {
    setTimeout(function () {
      var bgBlock = $(".b-bg-js.m-bg-js-top"),
        headerHeight = $(".b-header").outerHeight(),
        heightBg = bgBlock.outerHeight(),
        heightWithOutHeader = heightBg - headerHeight,
        hasPrice = $(".b-wrap").hasClass("b-wrap-price"),
        heightBgPrice = heightBg * 60 / 100,
        heightBgPriceWithOutHeader = heightBgPrice - headerHeight;
      bgBlock.next(".b-under-bg").css("height", heightBg);
      $(".b-under-bg .e-under-bg-table").css({"height": heightWithOutHeader, "padding-top": headerHeight});

      if (hasPrice == true) {
        bgBlock.next(".b-under-bg").css("height", heightBgPrice);
        $(".b-under-bg .e-under-bg-table").css({"height": heightBgPriceWithOutHeader, "padding-top": headerHeight});
      }
    }, 500);


  };
// end   Background

// Price

  var priceBlocks = function () {

    $(".e-color-price-item").each(function () {
      var imageLink = $(this).find(".e-color-price-bg").attr("src");
      $(this).find(".e-color-block").css("background-image", "url('" + imageLink + "')");
    });

  };

// end Price


// Questions
  var buttonQuestion = function (buttonQw, parent, finding) {
    $(buttonQw).click(function () {
      var elem = $(this).closest(parent),
        active = elem.find(".e-question-button").hasClass("active");
      $(parent).find(finding).slideUp();
      $(buttonQw).removeClass("active");
      if (!active) {
        $(this).addClass("active");
        elem.find(finding).slideDown();
      }
    });
  };
  buttonQuestion(".e-question-questions-list .e-question-button", ".js-slide", ".text");
  buttonQuestion(".e-question-title-item .e-question-button", ".e-question-title-item", ".e-question-title-second-list");


  $(".js-question-title-link .item-link").click(function (event) {
    var parentLi = $(this).closest(".js-question-title-link"),
      indexTheme = parentLi.index();

    $(".js-question-title-link").removeClass("active");
    $(".b-questions .e-question-title-second-item").removeClass("active");
    parentLi.addClass("active");

    $(".e-question-questions-list").find(".js-child").css("display", "block");
    $(".e-question-questions-list").slideUp();
    $(".js-question-text-block").eq(indexTheme).slideDown();

  });

  $(".b-questions .e-question-title-second-item").click(function () {
    var indexEl = $(this).index(),
      indexLi = $(this).closest(".e-question-title-item").index(),
      element = $(".js-question-text-block").eq(indexLi);
    $(this).closest(".e-question-title-item").find(".item-link").click();
    $(".b-questions .e-question-title-second-item").removeClass("active");
    $(this).closest(".b-questions").find(".e-question-title-item").removeClass("active");
    $(this).addClass("active");
    $(".e-question-questions-list").find(".js-child").css("display", "none");
    element.find(".e-question-questions-list").slideUp();
    element.find(".e-question-questions-list").eq(indexEl).slideDown();
  });


  $(".e-question-title-item").first().find(".item-link").click();

  var clickReadyQuestion = function () {
    var hash = window.location.hash,
      idUrl = hash.substring(1);
    $("#" + idUrl).click();
    setTimeout(function () {
      $("#" + idUrl).click();
    }, 100);
  };

  var questionScrollButton = function () {
    var hasQuestion = $(".b-wrap").has(".b-question");
    if (hasQuestion == true) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
          screenHeight = $(window).height(),
          cont = $(".e-question-container"),
          buttonTop = cont.find(".js-button-top"),
          contHeight = cont.height(),
          contOffset = cont.offset().top,
          maxTop = contOffset + contHeight,
          posTop = scroll - contOffset + screenHeight,
          enableButton = scroll + screenHeight - 230;
        if (enableButton > contOffset && enableButton < maxTop) {
          buttonTop.css("top", posTop)
        }
        console.log("scroll: " + scroll);
        console.log("maxTop: " + maxTop);
        console.log("contOffset: " + contOffset);
        if (scroll > contOffset) {
          cont.find(".js-button-top").addClass("active").animate({"opacity": 1}, 500);
        } else {
          cont.find(".js-button-top").removeClass("active").animate({"opacity": 0}, 500);
        }
      });
    }
  };


  var questionScroll = function () {
    var menuTrue = $(".e-question-left-content").hasClass("js-scroll-menu");
    if (menuTrue == true) {
      var menu = $(".e-question-left-content.js-scroll-menu"),
        wrapMenu = menu.wrap("<div class='e-question-scroll-menu'></div>"),
        menuParent = $(".e-question-scroll-menu"),
        windowHeight = $(window).height();

      menu.css("height", windowHeight);
      menu.mCustomScrollbar({
        axis: "y",
        theme: "dark-3"
      });

      $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
          menuHeight = menu.outerHeight(),
          container = $(".e-question-container").outerHeight(),
          maxTop = container - menuHeight,
          offsetMenu = menuParent.offset().top;

        if ((scroll > offsetMenu) && (scroll < (offsetMenu + maxTop))) {
          var paddingMenu = parseInt(menuParent.css("padding-top")),
            newPaddingMenu = scroll - offsetMenu;
          menuParent.css("padding-top", newPaddingMenu);
        }

      });
    }
  };

  var mobileQuestions = function () {
    $(".e-question-left-content").removeClass("js-scroll-menu");
    var positionRight = $(".e-question-left-content").css("right");
    $(".e-question-menu-button").click(function () {
      var elem = $(this).closest(".b-questions").find(".e-question-left-content"),
        close = elem.find(".e-question-close-button");
      elem.addClass("active");
      elem.animate({"right": 0});
      close.animate({"left": "-27px"});
    });
    $(".e-question-close-button").click(function () {
      var elem = $(this).closest(".e-question-left-content");
      $(this).animate({"left": 0});
      elem.animate({"right": positionRight});
      setTimeout(function () {
        elem.removeClass("active");
      }, 600);
    });


    scrollHorizontal(".e-color-price-container", ".e-color-price-container", ".b-color-price")
  };
// end   Questions

// Video-list
  var videoList = function () {
    $(".e-video-list .e-video-item-play").each(function () {
      var widthElem = $(this).width(),
        heightElem = $(this).height(),
        player = $(this).find(".e-video-item-video"),
        button = $(this).find(".e-video-item-play-img-container"),
        buttonWidth = button.width(),
        buttonHeight = button.height(),
        posLeft = (widthElem - buttonWidth) / 2,
        posTop = (heightElem - buttonHeight) / 2;
      button.css({"top": posTop, "left": posLeft});
      player.attr("width", widthElem);
      player.attr("height", heightElem);
    });
    $('.e-video-item-play-img-container').on('click', function (e) {
      var video = $(this).closest(".e-video-item-play").find(".e-video-item-video");
      video[0].src += "&autoplay=1";
      $(this).closest(".e-video-item-play-overlay").css("display", "none");
      e.preventDefault();

    });
  };
// Video-list

// Image top full screen
  var imageHeightFull = function () {
    var widthBlock = $(".b-main-block-top").width(),
      posLeft = (widthScreen - widthBlock) / 2;
    $(".b-main-block-top").css("left", posLeft);
    $(".b-wrap-main .b-container-image-top").css("height", heightScreen);
    $(".b-container-image-top").next("div").css("margin-top", heightScreen);
  };
// end   Image top full screen

// Main top links

  var mainLinks = function () {
    var cont = $(".b-main-block-top-link-container").outerHeight(),
      heightLink = cont / 2;
    $(".b-top-link-container .e-top-link-item .e-link-table").css("height", heightLink);
  };

// end Main top links

// Main slider
  var imageSlider = function () {

    var elem = $(".e-main-slide-item.active"),
      imageLink = elem.find(".e-main-slide-item-image").attr("src");
    elem.closest(".b-main-slider").find(".e-main-slider-background img").attr("src", imageLink);
  };
  var autoSlider = $('.e-main-slider-list').lightSlider({
    item: 1,
    autoWidth: false,
    slideMargin: 0,
    auto: true,
    loop: true,
    pause: 4000,

    onAfterSlide: function (el) {
      mainSliderChange();
    }
  });

  $(".b-main-slider").hover(function () {
    autoSlider.pause();
  }, function () {
    autoSlider.play();
  });

  var mainSliderChange = function () {
    var elemPager = $(".e-main-slider-container-list .lSPager li.active"),
      elemPagerIndex = elemPager.index();
    $(".e-pager-item").removeClass("active").eq(elemPagerIndex).addClass("active");
  };

  $(".e-pager-item").click(function () {
    var num = $(this).index();
    console.log(num);
    $(".e-pager-item").removeClass("active");
    $(this).addClass("active");
    autoSlider.goToSlide(num + 1)
  });
// end   Main slider

// Smooth scroll
  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var clickElem = $(this);
      $('html, body').stop().animate({
        scrollTop: $(clickElem.attr('href')).offset().top
      }, 1500, 'swing');
      event.preventDefault();
      console.log(clickElem);
    });
  });
// end   Smooth scroll

// Line-before
  var beforeLine = function () {
    $(".b-color-line-before").each(function () {
      var widthBefore = $(this).find(".e-color-line-before-line").width(),
        widthContainerBefore = $(".e-color-line-before-line").closest(this).width(),
        positionLeftBefore = (widthContainerBefore - widthBefore) / 2;
      $(this).find(".e-color-line-before-line").css('left', positionLeftBefore);
    });

  };
// end   Line-before

// Player center
  var playerCenter = function () {
    var plContentW = $(".b-player .e-player-content").outerWidth(),
      plContentH = $(".b-player .e-player-content").outerHeight(),
      playerContentW = parseInt($(".b-player").css("width")),
      playerContentH = parseInt($(".b-player").css("height")),
      vertical = (playerContentH - plContentH) / 2,
      horizontal = (playerContentW - plContentW) / 2;
    $(".b-player .e-player-content").css({"left": horizontal, "top": vertical});
    $(".b-player iframe").attr({"width": playerContentW, "height": playerContentH});

    $(".e-player-content-img, .e-player-content-text").click(function () {
      $(this).closest(".b-player").removeClass("m-player-overlay");
      $(".e-player-content").css("display", "none");
      $(".ytp-large-play-button").click();
    });
  };
// end   Player center

// Slides-clients
  var sliderClients = $('.js-slider-dynamic .e-slider-clients-list').lightSlider({
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
  var circleSize = function () {
    var circleHeight = $(".e-slider-clients-controls-round").outerHeight();
    $(".e-slider-clients-controls-round").css("width", circleHeight);
  };

  var sliderClientsFunc = function () {
    var quantitySlide = $(".e-slider-clients-list .e-slider-clients-item").length;
    $(".e-slider-clients-controls").find(".all-num").text(quantitySlide);
  };
  var sliderClientsChange = function () {
    var elemPager = $(".b-slider-clients .lSPager li.active"),
      elemPagerIndex = elemPager.index();
    $(".e-slider-clients-controls").find(".num").text("").text(elemPagerIndex + 1);
    circleSize();
  };

  var imageClientsCenter = function () {
    $(".e-slider-clients-item-img").each(function () {
      var cont = $(this).closest(".e-slider-clients-item-img-container");
      blockInCenter(cont, this);
    });
    $(".b-square").each(function () {
      var contHeight = $(this).height(),
        contWidth = $(this).outerWidth(),
        image = $(this).find(".e-square-content"),
        imageHeight = image.height(),
        posTop = (contHeight - imageHeight) / 2,
        globCont = $(this).closest(".e-slider-clients-item"),
        hasMod = globCont.hasClass("m-slider-clients-item-ava"),
        globContWidth = globCont.outerWidth(),
        posLeft = (globContWidth - contWidth) / 2;

      image.css("padding-top", posTop);

      if (hasMod == true) {
        $(this).css("left", posLeft);
      }
    });
  };

  var sliderClientsTextScroll = function () {

    $(".e-slider-clients-item-content .e-slider-clients-item-text-cont").each(function () {
      var scr = $(this);

      scr.mCustomScrollbar({
        axis: "y",
        theme: "dark-3"
      });
    });
  };
// end   Slides-clients

// Comfortable list
  var ComfortableSlider = $('.e-comfortable-list').lightSlider({
    item: 1,
    autoWidth: false,
    slideMargin: 0,

    onAfterSlide: function (el) {
      comfortableSliderChange();
    }
  });
  var comfortableSliderChange = function () {
    var elemPager = $(".b-comfortable .lSPager li.active"),
      elemPagerIndex = elemPager.index();
    $(".e-comfortable-item-pagination").removeClass("active").eq(elemPagerIndex).addClass("active");
  };

  $(".e-comfortable-item-pagination").click(function () {
    var num = $(this).index();
    $(".e-comfortable-item-pagination").removeClass("active");
    $(this).addClass("active");
    console.log(num);
    ComfortableSlider.goToSlide(num)
  });
// end   Comfortable list

// Many face clients list
  var manyFaceItemFunction = function () {
    var manyFaceItemWidth = $(".e-many-face-client-item").width(),
      manyFaceItemMargin = $(".e-many-face-client-item").css("margin-left"),
      manyFaceItem = manyFaceItemWidth + parseInt(manyFaceItemMargin),
      manyFaceItemQuantity = Math.floor(widthScreen / manyFaceItem);
    return manyFaceItemQuantity
  };
  var ManyFaceSlider = $('.b-many-face-client-list').lightSlider({
    item: manyFaceItemFunction(),
    autoWidth: false,
    slideMargin: 0,
    auto: true,
    loop: true,
    pause: 4000
  });

  $(".b-many-face-client-list").hover(function () {
    ManyFaceSlider.pause();
  }, function () {
    ManyFaceSlider.play();
  });
  $(".e-many-face-client-item").click(function () {
    var quoteFace = $(this).find(".e-many-face-client-quote").text(),
      nameFace = $(this).find(".e-many-face-client-name").text();
    $(".b-many-face-clients").find(".b-quote").text("\"" + quoteFace + "\"");
    $(".b-many-face-clients").find(".e-many-face-clients-name").text(nameFace);
  });
  $(".e-many-face-client-item").click();
// end   Many face clients list

// About-us list
  var aboutUs = function () {
    $(".b-about-list .e-about-item").each(function () {
      var icon = $(this).find(".e-about-item-icon"),
        iconHeight = icon.height(),
        contHeight = $(this).find(".e-about-item-cube").height(),
        posTop = (contHeight - iconHeight) / 2;
      icon.css("padding-top", posTop);
    });

    $(".e-icon-bg-item-container").each(function () {
      var cont = $(this).closest(".e-icon-bg-item-image-block");
      blockInCenter(cont, this)
    });

    $(".e-franchising-circle-item-circle").each(function () {
      var cont = $(this).closest(".e-franchising-circle-item");
      blockInCenter(cont, this)
    });
    $(".b-for-sponsors .e-for-sponsors-item-icon-container").each(function () {
      var icon = $(this).find(".e-for-sponsors-item-icon"),
        iconHeight = icon.height(),
        contHeight = $(this).height(),
        posTop = (contHeight - iconHeight) / 2;
      icon.css("padding-top", posTop);
    });
  };
// end About-us list


// Table horizontal scroll

  scrollHorizontal(".e-webinar-table", ".e-webinar-table", ".e-container-table-scroll");

// end Table horizontal scroll


// Client-card line
  var personCard = function () {
    blockInCenter(".b-client-line .e-block-line-person-photo-container", ".b-client-line .e-block-line-person-photo");
  };

// end Client-card line


// Mass-media
  var quotesItemFunction = function () {
    var quotesItemItemWidth = $(".e-mass-media-item").width(),
      quotesItemItemMargin = $(".e-mass-media-item").css("margin-left"),
      quotesItemItem = quotesItemItemWidth + parseInt(quotesItemItemMargin),
      quotesItemItemQuantity = Math.floor(widthScreen / quotesItemItem);
    return quotesItemItemQuantity
  };

  var quotesSlider = $('.b-mass-media-list').lightSlider({
    item: quotesItemFunction(),
    autoWidth: $(".e-mass-media-item").width(),
    slideMargin: 0,
    auto: true,
    loop: true,
    pause: 4000
  });

  $(".b-mass-media-list").hover(function () {
    quotesSlider.pause();
  }, function () {
    quotesSlider.play();
  });
// end Mass-media


// News

  var news = function () {

    $(".b-news .e-news-item").each(function () {
      var cont = $(this).find(".e-news-item-img-container"),
        images = $(this).find(".e-news-item-img");
      blockInCenter(cont, images);
    });

  };

// end News

// Global block center

  $(".b-block-center").each(function () {
    var elem = $(this).find(".e-block-center");
    blockInCenter($(this), elem);
  });

// end Global block center

// Webinar list

  $(".b-webinar-image-block").each(function () {
    var imageLink = $(this).find(".e-webinar-image-block-bg").attr("src");
    $(this).css("background-image", "url('" + imageLink + "')");
  });

// end Webinar list

//  Image for bg

  $(".b-image-bg").each(function () {
    var imageLink = $(this).find(".e-image-bg").attr("src");
    $(this).css("background-image", "url('" + imageLink + "')");
  });

// end Image for bg

// Comment

  $(".js-comment-login").click(function () {
    $(".js-popup-login").click();
  });
  $(".js-comment-registration").click(function () {
    $(".js-without-register").click();
  });

//

// Teams


  var teamBlock = function () {

    var scrollTeam = function () {
      var count = 5;

      var widthElem = $(".e-team-item").css("width", widthScreen / count);

      var teamSlider = $('.e-team-list').lightSlider({
        item: count,
        autoWidth: false,
        slideMargin: 0,
        auto: true,
        loop: true,
        pause: 4000,
        pager: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              item: 4,
              autoWidth: false,
              slideMargin: 0,
              auto: true,
              loop: true,
              pause: 4000,
              pager: false
            }
          },
          {
            breakpoint: 700,
            settings: {
              item: 2,
              autoWidth: false,
              slideMargin: 0,
              auto: true,
              loop: true,
              pause: 4000,
              pager: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              item: 1,
              autoWidth: false,
              slideMargin: 0,
              auto: true,
              loop: true,
              pause: 4000,
              pager: false
            }
          }
        ],
        onAfterSlide: function (el) {
          allTeam(".b-team .e-team-item");
        }
      });
      $(".e-team-list").hover(function () {
        teamSlider.pause();
      }, function () {
        teamSlider.play();
      });
    };
    scrollTeam();


    var photoTop = function (element) {
      var heightEl = element.find(".e-team-item-photo-container").outerHeight(),
        topEl = heightEl / 2;
      element.css("top", topEl);
    };


    var allTeam = function (elem) {


      $(elem).each(function () {
        var cont = $(this).find(".e-team-item-photo-container"),
          contWidth = cont.outerWidth(),
          contHeight = cont.outerHeight(),
          elem = cont.find(".e-team-item-photo"),
          elemWidth = elem.outerWidth(),
          elemHeight = elem.outerHeight(),
          beforePhoto = $(this).find(".e-team-item-before"),
          itemWidth = $(this).width(),
          posTop = (contHeight - elemHeight) / 2,
          posLeft = (contWidth - elemWidth) / 2;
        photoTop($(this));
        elem.css({"margin-left": posLeft, "margin-top": posTop});
        $(".e-team-list-bg").css("top", contHeight)
      });
    };

    allTeam(".b-team .e-team-item");

    $(".b-team .e-team-item-content").hover(function () {
      $(".e-team-item").removeClass("hovered");
      $(this).closest(".e-team-item").addClass("hovered");
    }, function () {
      $(".e-team-item").removeClass("hovered");
    });

    var chartTeam = function () {
      var contWidth = $(".b-team .e-team-container-content").outerWidth(),
        elem = $(".b-team .e-team-container-chart"),
        elemWidth = elem.find("img").width(),
        posLeft = (contWidth - elemWidth) / 2;
      elem.css("left", posLeft);

    };

    chartTeam();

  };
// end Teams

// Our service list
  var serviceList = function () {
    $(".b-our-service-list .e-our-service-item:first-child").addClass("active");
    $(".b-our-service-list .e-our-service-item").hover(function () {
      $(".b-our-service-list .e-our-service-item").removeClass("active");
    });
    if (widthScreen > 1200) {
      $(".b-our-service-list").addClass("m-our-service-list-rhombus")
    } else {
      $(".b-our-service-list").removeClass("m-our-service-list-rhombus")
    }
  };
// end Our service list

// Price detail
  var priceDetail = function () {
    scrollHorizontal(".b-table", ".b-color-price-list.m-color-price-list-sm", ".js-price-scroll");
  };
// end Price detail

// Header
  var headerFix = function () {
    if (widthScreen > 700) {
      scroll = $(window).scrollTop();
      timeOut = 1000;

      $(".b-header").addClass("m-header-visible");


      $(window).on("scrollstart", function () {
        $(".b-header").addClass("m-header-visible");
      });

      $(window).on("scrollstop", function () {
        scroll = $(window).scrollTop();
        setTimeout(function () {
          if (scroll != 0) {
            $(".b-header").removeClass("m-header-visible");
          }
        }, timeOut);
      });


      var bHeadHover = false;

      $('.b-header').mouseleave(function () {
        bHeadHover = true;
      });
      $('.b-header').mouseenter(function () {
        bHeadHover = true;
      });


      $(window).mousemove(function (e) {


        var scroll = $(window).scrollTop();
        var yMove = e.pageY,
          visibleHeader = scroll - yMove + 15;
        if (visibleHeader > 0) {

          $(".b-header").addClass("m-header-visible");

        } else {
          $(window).on("scrollstop", function () {
            scroll = $(window).scrollTop();
            setTimeout(function () {
              if (scroll != 0) {
                if (bHeadHover) {
                  $(".b-header").removeClass("m-header-visible");
                }
              }
            }, timeOut);
          });
        }
      });
    }
  };
  if (widthScreen <= 700) {
    var headerHeight = $(".b-header").outerHeight();
    $(".b-header").find(".e-header-right-content").css("top", "-1000px");

    $(".js-header-menu").click(function () {
      var menu = $(this).closest(".b-header").find(".e-header-right-content"),
        opening = $(this).hasClass("opening");

      if (opening == true) {
        menu.animate({"top": "-1000px"}, 300);
        $(this).removeClass("opening");
      } else {
        $(this).addClass("opening");
        menu.animate({"top": headerHeight}, 300);
      }
    });

    $(".js-popup-login, .m-button-close-popup").click(function () {
      $(".b-navigation").slideToggle();
    });
  }
  var mobileHeader = function () {
    var hasActive = $(".js-header-menu").hasClass("opening");
    headerHeight = $(".b-header").outerHeight();
    if (hasActive == true) {
      $(".b-header").find(".e-header-right-content").animate({"top": headerHeight}, 300);
    }
  };
// end Header

// Many item icon

  var manyItemIcon = function () {
    //if(heightScreen>=500){
    var item = $(".b-list-icon-vertical .e-item-icon-vertical"),
      itemMargin = parseInt(item.css("margin-bottom")),
      listPadding = $(".b-list-icon-vertical").css("padding-top", itemMargin),
      headerHeight = $(".b-header").outerHeight(),
      itemLength = item.length,
      itemHeight = (heightScreen - headerHeight - (itemMargin * itemLength) - itemMargin) / itemLength;
    item.css({
      "width": itemHeight,
      "height": itemHeight
    });
    //$(".b-list-icon-vertical").css("top", headerHeight);
    //$(".b-slider-for-clients").css("height", heightScreen - headerHeight);
    //}
  };

// end Many item icon

// Slider  slider-for-clients-content

  var sliderForClientsContent = function () {
    var headerHeight = $(".b-header").outerHeight(),
      contentHeight = heightScreen - headerHeight,
      hasSlider = $(".b-slider-for-clients-content-list").hasClass("js-slider");
    //$(".e-slider-for-clients-content-item").css({
    //  "height": contentHeight
    //});
    //$(".e-slider-for-clients-container-for-scroll").css("height", contentHeight);
    //$(".e-slider-for-clients-content-item .e-slider-for-clients-container-for-scroll").each(function () {
    //  var scr = $(this);
    //
    //  scr.mCustomScrollbar({
    //    axis: "y",
    //    theme: "dark-3"
    //  });
    //});
    if (widthScreen > 700) {
      if (hasSlider == true) {
        sliderForClients.destroy();
        $(".b-slider-for-clients-content-list").removeClass("js-slider");
      }
      $(".e-slider-for-clients-content-item").addClass("height-fix");
      var sliderForClients = $('.b-slider-for-clients-content-list').lightSlider({
        item: 1,
        autoWidth: false,
        slideMargin: 0,
        vertical: true,
        auto: true,
        loop: true,
        pause: 4000,
        //adaptiveHeight: false,
        enableTouch: false,
        enableDrag: false,
        onAfterSlide: function (el) {
          sliderForClientsPager();
          $(".e-slider-for-clients-content-item").removeClass("height-fix");
        },
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              auto: false,
              loop: false
            }
          }
        ]
      });

      $(".b-slider-for-clients-content-list").addClass("js-slider");
      $(".b-slider-for-clients-content-list, .b-slider-for-clients-content-list").hover(function () {
        sliderForClients.pause();
      }, function () {
        sliderForClients.play();
      });

      var sliderForClientsPager = function () {
        var elemPager = $(".e-slider-for-clients-container .lSPager li.active"),
          elemPagerIndex = elemPager.index();
        $(".e-item-icon-vertical").removeClass("active").eq(elemPagerIndex).addClass("active");
      };
      $(".e-item-icon-vertical").click(function () {
        var num = $(this).index();
        $(".e-item-icon-vertical").removeClass("active");
        $(this).addClass("active");
        sliderForClients.goToSlide(num + 1)
      });
    } else {

    }


    $(".js-pager-menu").click(function () {
      var parent = $(this).closest(".e-slider-for-clients-container-pager"),
        pager = parent.find(".b-list-icon-vertical");

      pager.addClass("js-opened").slideToggle();

    });

  };

// end   Slider  slider-for-clients-content

// Blocks default

  var blockDefault = function () {
    blockInCenter(".b-block-photo-container", ".e-block-photo");
  };

// end Blocks default

// Info-line-with-popup

  var infoLineWithPopup = function () {
    $(".js-open-pop-web").click(function () {
      var cont = $(this).closest(".m-info-line-with-popup"),
        popupHeight = cont.find(".b-popup").outerHeight(),
        contHeight = cont.outerHeight(),
        posTop = (contHeight - popupHeight) / 2;

      if (popupHeight >= contHeight) {
        contHeight = popupHeight + 50;
        posTop = (contHeight - popupHeight) / 2;
        cont.addClass("js-pop-info-line");
        $(".js-pop-info-line").css({"height": contHeight, "box-sizing": "border-box"});
      }
      cont.find(".b-popup").css({"top": posTop});
      cont.find(".b-popup").addClass("open");
    });
  };

// end   Info-line-with-popup

// JS scrollTop for elements

  var jsScrollTop = function(){
    var scrN = $(window).scrollTop(),
        maxScroll = heightCont - heightScreen;

    $(".js-scrollTop").each(function(){
      var posOld = $(this).offset().top,
          posOldLeft = $(this).offset().left,
          elWidth = $(this).outerWidth(),
          start = posOld-30,
          ind = $(this).index();


      $(this).attr("data-index", ind); // add index
      //if(scrN>=posOld){
      //  $(this).css("margin-top", scrN - posOld + heightHeader +30);
      //}


      $(window).scroll(function(){
        var scr = $(window).scrollTop(),
            posNew = scr - posOld;
        if(scr<=maxScroll){
          if(scr>=start){

            $(".js-scrollTop").each(function(){
              var el = $(this).attr("data-index");
              if(el == ind){
                $(this).addClass("fix")
                  .css({
                    "top": (heightHeader + 30),
                    "left": posOldLeft,
                    "width": elWidth
                  });
                //$(this).css("margin-top", posNew + heightHeader +30);
              }
            });

          }else{
            $(".js-scrollTop").removeClass("fix")
          }
        }

      });


    });


  };

// end JS scrollTop for elements

// For mobile devises

  var mobile = function () {
    if (widthScreen <= 700) {
      mobileQuestions();
      mobileHeader();
    }
  };

// For mobile devises end


// Document ready

  imageHeightFull();
  centerBlocks();
  beforeLine();
  playerCenter();
  sliderClientsFunc();
  circleSize();
  manyFaceItemFunction();
  aboutUs();
  imageClientsCenter();
  videoList();
  mobile();
  personCard();
  news();
  clickReadyQuestion();
  questionScrollButton();
  teamBlock();
  serviceList();
  priceDetail();
  priceBlocks();
  mainLinks();
  sliderClientsTextScroll();
  headerFix();
  underTop();
  manyItemIcon();
  blockDefault();
  sliderForClientsContent();
  infoLineWithPopup();
  jsScrollTop();

// Document ready end

// Resize screen

  $(window).resize(function () {
    widthScreen = $(window).width();
    heightScreen = $(window).height();
    heightHeader = $(".b-header").outerHeight();
    heightFooter = $(".b-footer").outerHeight();
    heightCont = $(".b-wrap").outerHeight();
    imageHeightFull();
    centerBlocks();
    playerCenter();
    manyFaceItemFunction();
    aboutUs();
    imageClientsCenter();
    videoList();
    mobile();
    personCard();
    news();
    priceDetail();
    mainLinks();
    underTop();
    teamBlock();
    manyItemIcon();
    blockDefault();
    sliderForClientsContent();
    jsScrollTop();
  });

// Resize screen end

});