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

  // Link anchor
  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this),
        scr = $($anchor.attr('href')).offset().top;

      $('html, body').stop().animate({
        scrollTop: scr
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

  var swiper = new Swiper('.js-products-slider', {
    nextButton: '.js-products-slider-right',
    prevButton: '.js-products-slider-left',
    keyboardControl: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 700
  });

  var swiperGallery = new Swiper('.b-slider-gallery', {
    pagination: '.b-slider-gallery .swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    autoplay: true,
    parallax: true,
    speed: 6000,
    effect: "fade"
  });

  numPop = 0;

  function openModal (button, modal) {
    $(button).click(function () {
      var auth = $(modal);
      if(numPop == 0){
        auth.addClass("active");
        $(button).addClass("active");
        numPop = 1;
      }else{
        var au = $(button).hasClass("active");
        if(au){
          auth.removeClass("active");
          $(button).removeClass("active");
          numPop = 0;
        }else{
          $(".js-modal").removeClass("active");
          auth.addClass("active");
          $(button).addClass("active");
          numPop = 1;
        }
      }
    });

  }

  openModal(".b-auth-btn", ".b-auth-popup");
  openModal(".b-look", ".b-looking-popup");

  // SideBar

  $(".b-sidebar-list .e-sidebar-item").click(function () {
    var allBut = $(".b-sidebar-list .e-sidebar-item"),
        allDet = $(".b-menu-detail-list .e-menu-detail-item"),
        numBut = $(this).index(),
        contDet = $(".b-menu-detail"),
        active = $(this).hasClass("active");

    if(!active){
      allBut.removeClass("active");
      allDet.removeClass("active");
      $(this).addClass("active");
      allDet.eq(numBut).addClass("active");
      contDet.addClass("active");
    }else{
      allBut.removeClass("active");
      allDet.removeClass("active");
      contDet.removeClass("active");
    }

  });

  // END SideBar

  // Filters
  function FilterStart() {
    var num = $(".b-filter-list .e-filter-item.active").index();
    $(".b-filter-cont-list .e-filter-cont-item").eq(num).addClass("active");
  }


  $(".b-filter-list .e-filter-item").click(function () {
    var allBut = $(".b-filter-list .e-filter-item"),
      det = $(".b-filter-cont-list .e-filter-cont-item"),
      numBut = $(this).index(),
      active = $(this).hasClass("active");

    if(!active){
      allBut.removeClass("active");
      det.removeClass("active");
      $(this).addClass("active");
      det.eq(numBut).addClass("active");
    }

  });

  // END Filters

  androidAnimate();
  FilterStart();

  $(window).resize(function () {


  });

  $(window).load(function () {

  });


  $(window).scroll(function () {
    var scr = $(window).scrollTop(),
      screenHeight = $(window).height(),
      screenWidth = $(window).width();

  });


});
