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
        imageWidth = image.width(),
        imageHeight = image.height(),
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

//end Circle

// People circle block

  var peopleCircle = function () {

    $(".b-circle-people-block").each(function () {
      var circle = $(this).find(".b-circle"),
        desc = $(this).find(".e-circle-people-title"),
        circleHeight = circle.height(),
        descHeight = desc.height(),
        posTop = (circleHeight - descHeight) / 2;

      if (descHeight > circleHeight) {
        $(this).css("height", descHeight);
      } else {
        $(this).css("height", circleHeight);
      }

      desc.css("padding-top", posTop);
    });

  };

// end People circle block

// List-text-under

  var listTextUnder = function () {

    $(".b-text-under-icon-container").each(function () {
      var contWidth = $(this).outerWidth(),
        elem = $(this).find(".b-address"),
        elemWidth = elem.outerWidth(),
        elemHeight = elem.outerHeight(),
        posLeft = (contWidth - elemWidth) / 2,
        bottom = elemHeight / 2 * (-1);
      elem.css({
        "left": posLeft,
        "bottom": bottom
      });

    });

  };

// end List-text-under

// Popup

  var popup = function () {


    $(".js-open-popup").click(function () {

      var pop = $(".b-popup"),
        popWidth = pop.outerWidth(),
        popHeight = pop.outerHeight(),
        posLeft = (screenWidth - popWidth) / 2,
        scroll = $(window).scrollTop(),
        posTop = (screenHeight - popHeight) / 2,
        footerHeight = $(".b-footer").outerHeight(),
        footerOffset = $(".b-footer").offset().top,
        ending = footerHeight + footerOffset;
      console.log(ending);
      if (popHeight >= screenHeight + 50) {
        posTop = 80;
      }
      pop.css({
        "left": posLeft,
        "top": posTop + scroll,
        "bottom": "auto"
      });
      if ((scroll + screenHeight) >= ending) {
        pop.css({
          "top": "auto",
          "bottom": 80
        });
      }
      $(".b-overlay, .b-popup").css("display", "block");

    });

    $(".js-button-close-popup").click(function () {
      $(this).closest(".b-popup").css("display", "none");
      $(".b-overlay").css("display", "none");
    });

  };

//end Popup

// Scroll

  var scrollFirst = function(){

    var elemScroll = $("#testscroll").offset().top;

    $('html, body').stop().animate({
      scrollTop: elemScroll
    }, 1500, 'swing')

  };

// end Scroll

// Document ready
  circle();
  peopleCircle();
  listTextUnder();
  popup();
//ending Document ready

  $(window).resize(function () {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    circle();
    peopleCircle();
    listTextUnder();
    popup();
  });

  $(window).load(function () {
    circle();
    peopleCircle();
    listTextUnder();
    scrollFirst();

  });

});