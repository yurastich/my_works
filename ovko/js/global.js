$(document).ready(function(){

  widthScreen = $(window).width();
  heightScreen = $(window).height();

  var blockInCenter = function (container, element) {
    var elementWidth = $(element).outerWidth(),
      elementHeight = $(element).outerHeight(),
      containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      positionLeft = (containerWidth - elementWidth) / 2,
      positionTop = (containerHeight - elementHeight) / 2;

    if (positionTop < 20) {
      positionTop = 20;
    }
    $(element).css("left", positionLeft);

    $(element).css("top", positionTop);

  };

  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1500, 'swing');
      event.preventDefault();
    });
  });

  $(".js-click-sl, .b-select-container .e-select-top").click(function(){
    var par = $(this).closest(".b-select-container, .js-par-sl"),
        dropPanel = par.find(".e-select-drop-panel, .js-sel-sl"),
        z = $(this).closest(".js-z"),
        active = par.hasClass("active");

    $(".b-select-container, .js-par-sl").removeClass("active");
    $(".js-sel-sl, .b-select-container .e-select-drop-panel").slideUp();
    $(".js-z").removeClass("z-index");

    if(active == true){
      par.removeClass("active");
      dropPanel.slideUp();
      z.removeClass("z-index");
    }else{
      par.addClass("active");
      z.addClass("z-index");
      dropPanel.slideDown();
    }
  });

  $(".js-sel-el, .b-select-drop .e-select-drop-item").click(function(){
    var par = $(this).closest(".b-select-container, .js-par-sl"),
        dropPanel = par.find(".e-select-drop-panel, .js-sel-sl"),
        item = $(this).closest(".b-select-drop, .js-sel-sl").find(".e-select-drop-item, .js-sel-el");
    par.removeClass("active");
    dropPanel.slideUp();
    item.removeClass("active");
    $(this).addClass("active");
  });


  // todo Gallery
  var gallery = $('.js-gallery-static').lightSlider({
    slideMargin:10,
    item: 3,
    loop:true,
    pager: false,
    controls: false,
    keyPress: true
  });

  $('.js-gallery-right').click(function(){
    gallery.goToNextSlide();
  });

  // todo Gallery

  galleryPopup = 0;
  $(".js-gallery-activate").click(function(){
    setTimeout(function(){
       galleryPopup = $('.js-gallery-popup').lightSlider({
        slideMargin:10,
        item:1,
        gallery:true,
        thumbItem:5,
        controls: false,
        keyPress: true,
        loop: true,
        thumbMargin: 10,
        currentPagerPosition:'left',
         responsive : [
           {
             breakpoint:760,
             settings: {
               pager: false
             }
           }
         ]
      });

      $('.js-gallery-popup-left').click(function(){
        galleryPopup.goToPrevSlide();
      });

      $('.js-gallery-popup-right').click(function(){
        galleryPopup.goToNextSlide();
      });
    }, 200)
    $(".js-gallery-popup").addClass("js-active-gallery");
  });

  $(".js-gallery-static .e-gallery-img-item").click(function(){
    var imageLink = $(this).css("background-image"),
      par = $(this).closest(".b-gallery").find(".e-gallery-left");
    par.css("background-image", imageLink);
  });

  $(".b-slider-rooms").each(function(){

    var num = $(this).find(".e-slider-room-num"),
       select = $(this).find( ".e-slider-rooms-select");

      num.text(select[ 0 ].selectedIndex + 1);

      var slider = $( "<div class='slider-line'></div>" ).insertAfter( select ).slider({
        min: 1,
        max: 6,
        range: "min",
        value: select[ 0 ].selectedIndex + 1,
        slide: function( event, ui ) {
          select[ 0 ].selectedIndex = ui.value - 1;
          num.text(select[ 0 ].selectedIndex + 1)
        }
      });

  });


  // Popup
  var activePopupCenter = function(){
    var popupActive = $(".b-popup-overlay.active");

    blockInCenter(window, popupActive);
  };

  var popup = function(){
    var popup = $(".b-popup-overlay");

    $("[data-button]").click(function(){
      var popupNum = $(this).data("button");
      $("[data-modal='"+popupNum+"']").addClass("active").animate({
        "opacity": 1
      },300);
      overlayOpen();
    });


    $("[data-button]").click(function(e){
      e.preventDefault();
      activePopupCenter();
    });

    $(".b-close").click(function(){
      $(".b-popup-overlay").animate({
        "opacity": 0
      },300);
      setTimeout(function(){
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);

      // Destroy gallery
      var actGallery = $(".js-gallery-popup").hasClass("js-active-gallery");

      if(actGallery){
        $(".js-gallery-popup").removeClass("js-active-gallery");
        galleryPopup.destroy();
      }

      overlayClose();
    });

    $(".b-overlay").click(function(){
      $(".b-popup-overlay").animate({
        "opacity": 0
      },300);
      setTimeout(function(){
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    })
  };
  // Popup end

  // Overlay
  var overlayOpen = function(){
    $(".b-overlay").addClass("active");
    $(".b-overlay").animate({
      "opacity": "1"
    },300);
  };

  var overlayClose = function(){

    $(".b-overlay").animate({
      "opacity": "0"
    },300);
    setTimeout(function(){
      $(".b-overlay").removeClass("active");
    },310);
  };
  // Overlay end

// popup end


  $("input[name=tel]").mask("+7 (999) 999-99-99");



  $(".b-scroll-bar").mCustomScrollbar({
    axis:"y",
    scrollButtons:{
      enable: true
    }
  });

  // todo Add ads

  $(".b-category-sel .e-category-sel-item").click(function(){
    var ind = $(this).index(),
        active = $(this).hasClass("active"),
        itemOpen = $(".b-category-sel-content .e-category-sel-content-item");

    if(active == false){
      itemOpen.slideUp();
      itemOpen.eq(ind).slideDown();
      $(".b-category-sel .e-category-sel-item").removeClass("active");
      $(this).addClass("active");
    }else{
      itemOpen.slideUp();
      $(".b-category-sel .e-category-sel-item").removeClass("active");
    }

  });


  // todo Sing-in
  var singIn = function(){
    var header = $(".b-header").outerHeight(),
        footer = $(".b-footer").outerHeight(),
        heightScreen = $(window).height(),
        heightImg = heightScreen - footer - header;

    if(heightScreen >= 640){
      $(".b-bg-line.m-bg-line-sing-in").css("height", heightImg);
    }else{
      $(".b-bg-line.m-bg-line-sing-in").css("height", 700);
    }

    blockInCenter(".b-bg-line", ".b-bg-line .b-popup")
  };

  popup();
  singIn();

  $(window).resize(function(){
    popup();
    activePopupCenter();
    singIn();

  });

  $(window).load(function(){
    singIn();
  });

  $(window).scroll(function(){
    var scr = $(window).scrollTop(),
        img = (scr/5*(-1)),
        sing = $(".b-bg-line").hasClass("m-bg-line-sing-in");

    if(!sing){
      $(".b-bg-line").css("background-position", "center "+img+ "px");
    }
  });

});
