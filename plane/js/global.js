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

  // plane
  var plane =  $(".b-land-container .e-clouds-2"),
    leftOld = parseInt(plane.css("left"));

  $(".b-first-screen").mousemove(function(e){

    //console.log(offH)
    var  h = event.pageX,
      total = leftOld - (h/200) ;
    plane.css({
      "left": total
    })

  });


  $("input[name=tel]").mask("+7 (999) 999-99-99");



  // todo forms
  var validate = function() {

    var options = {
      delegation: true,
      clearForm: true,
      resetForm: true,
      type: 'post'
    }


    $('#form1').ajaxForm(options);
    $("#form1").validate({
      rules: {
        name:{required: true, maxlength: 100,},
        tel: {required: true, minlength: 10, maxlength: 25,}
      },
      messages: {
        name:{required: "", maxlength: "",},
        tel: {required: "", minlength: "", maxlength: "",},
      }
    });
  }

  popup();


  $(window).resize(function(){
    popup();
    activePopupCenter();


  });

  $(window).load(function(){
  });

  $(window).scroll(function(){
    var scr = $(window).scrollTop(),
        screenHeight = $(window).height(),
        screenWidth = $(window).width();

  });



});
