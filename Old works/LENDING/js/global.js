$(document).ready(function () {

  //$(".e-steps-item").attr("opacity", scroll / 1600 + "");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop(),
      positionTree = scroll + 100;
    var networkHeight = $(".b-social-network").offset().top;
    var peopleHeight = $(".b-many-people").offset().top;
    var cinemaHeight = $(".b-cinema").offset().top;
    var approachHeight = $(".b-approach").offset().top;
    var approachSecondHeight = $(".b-approach-second").offset().top;
    var weeksHeight = $(".b-weeks").offset().top;


    $(".b-tree").css("background-position-y", "-" + positionTree + "" + "px");
    if (scroll > 150) {
      $(".h-internet-container").css("left", 0);
    } else {
      $(".h-internet-container").css("left", -2000 + 'px');
    }

    if (scroll > 100) {
      $(".e-internet-img").css("right", 0);
    } else {
      $(".e-internet-img").css("right", -2000 + 'px');
    }


    $('.e-steps-item').each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
      if (scroll > $(this).attr('data-offset-top') - 700) {
        $(this).addClass('m-opacity-steps');
      } else {
        $(this).removeClass('m-opacity-steps');
      }
    });

    $('.e-audience-item').each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
      if (scroll > $(this).attr('data-offset-top') - 1300) {
        $(this).find('.item-image').css('top', 0);
        $(this).find('.item-content').css('top', 0);
      } else {
        $(this).find('.item-image').css('top', 2000 + 'px');
        $(this).find('.item-content').css('top', 2000 + 'px');
      }
    });


    if (scroll > networkHeight - 900) {
      $('.e-social-network-img').css("left", 0);
    } else {
      $('.e-social-network-img').css("left", -2000 + 'px');
    }
    if (scroll > networkHeight - 700) {
      $('.h-social-network-blue-screen').css("left", 0);
    }
    else {
      $('.h-social-network-blue-screen').css("left", -2000 + 'px');
    }
    if (scroll > networkHeight - 600) {
      $('.h-content-container').css("right", 0);
    }
    else {
      $('.h-content-container').css("right", -2000 + 'px');
    }
    if (scroll > networkHeight - 500) {
      $('.content-img').css("top", 441 + "px");
    }
    else {
      $('.content-img').css("top", 2000 + 'px');
    }

    $('.network-under-item').each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
      if (scroll > $(this).attr('data-offset-top') - 800) {
        $(this).find(".item-img").css("bottom", 0);
      } else {
        $(this).find(".item-img").css("bottom", 707 + 'px');
      }
    });
    if (scroll > cinemaHeight - 300) {
      $(".b-cinema").css("background-position-x", "-" + (scroll - cinemaHeight + 300) + "" + "px");
    }


    if (scroll > peopleHeight - 900) {
      $(".b-many-people").find(".first").css("left", 0);
    } else {
      $(".b-many-people").find(".first").css("left", -2000 + 'px');
    }
    if (scroll > peopleHeight - 800) {
      $(".b-many-people").find(".second").css("right", 76 + 'px');
    } else {
      $(".b-many-people").find(".second").css("right", -2000 + 'px');
    }
    if (scroll > peopleHeight - 700) {
      $(".b-many-people").find(".third").css("left", 137 + 'px');
    } else {
      $(".b-many-people").find(".third").css("left", -2000 + 'px');
    }
    if (scroll > peopleHeight - 600) {
      $(".b-many-people").find(".fourth").css("right", 200 + 'px');
    } else {
      $(".b-many-people").find(".fourth").css("right", -2000 + 'px');
    }
    if (scroll > peopleHeight - 500) {
      $(".b-many-people").find(".fifth").css("left", 240 + 'px');
    } else {
      $(".b-many-people").find(".fifth").css("left", -2000 + 'px');
    }
    if (scroll > peopleHeight - 400) {
      $(".b-many-people").find(".last").css("left", 258 + 'px');
    } else {
      $(".b-many-people").find(".last").css("left", -2000 + 'px');
    }
    if (scroll > peopleHeight - 300) {
      $(".b-many-people").find(".e-many-people-title h1").addClass("m-opacity-steps");
    } else {
      $(".b-many-people").find(".e-many-people-title h1").removeClass("m-opacity-steps");
    }
    $(".e-many-people-item").each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
      if (scroll > $(this).attr('data-offset-top') - 400) {
        $(this).addClass("m-opacity-steps");
      } else {
        $(this).removeClass("m-opacity-steps");
      }
    });


    if (scroll >= approachHeight - 300) {
      $(".b-approach").find(".b-container").css("padding-top", 179 + 'px').addClass("m-opacity-steps");
    } else {
      $(".b-approach").find(".b-container").css("padding-top", 0).removeClass("m-opacity-steps");
    }
    if (scroll >= approachHeight - 150) {
      $(".b-approach").find(".e-approach-subtitle").css("padding-top", 0);
      $(".b-approach").find(".h-approach-page").css("height", scroll - approachHeight + 143 + 'px');
    } else {
      $(".b-approach").find(".e-approach-subtitle").css("padding-top", 500 + "px");
    }
    if (scroll >= approachHeight + 100) {
      $(".b-approach").find(".e-approach-item").addClass("m-opacity-steps");
      $(".b-approach").find(".h-item-left").css("left", 0);
      $(".b-approach").find(".h-item-right").css("right", 0);
    } else {
      $(".b-approach").find(".e-approach-item").removeClass("m-opacity-steps");
      $(".b-approach").find(".h-item-left").css("left", -150 + "px");
      $(".b-approach").find(".h-item-right").css("right", -150 + "px");
    }

    if (scroll > approachSecondHeight - 100) {
      $(".b-approach-second").find(".h-approach-second-line-img").css("height", scroll - approachSecondHeight + 10 + 'px');
    }
    $(".e-approach-second-item").each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
      if (scroll > $(this).attr('data-offset-top') - 250) {
        $(this).addClass("m-opacity-steps");
      } else {
        $(this).removeClass("m-opacity-steps");
      }
    });


    if (scroll > weeksHeight - 300) {
      $(".h-weeks-lines-left").addClass("m-opacity-steps");
      $(".h-weeks-lines-right").addClass("m-opacity-steps");
    } else {
      $(".h-weeks-lines-left").removeClass("m-opacity-steps");
      $(".h-weeks-lines-right").removeClass("m-opacity-steps");
    }
    if (scroll > weeksHeight - 400) {
      $(".e-weeks-subtitle").css("top", 0).addClass("m-opacity-steps");
    } else {
      $(".e-weeks-subtitle").css("top", -200 + "px").removeClass("m-opacity-steps");
    }
    if (scroll > weeksHeight - 300) {
      $(".h-weeks-star").css("top", 190 + "px").addClass("m-opacity-steps");
    } else {
      $(".h-weeks-star").css("top", 0).removeClass("m-opacity-steps");
    }
    if (scroll > weeksHeight - 250) {
      $(".e-weeks-title").addClass("m-opacity-steps");
    } else {
      $(".e-weeks-title").removeClass("m-opacity-steps");
    }
    $(".e-weeks-item").each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
    });
    if (scroll > $(".b-weeks-list .first").attr('data-offset-top') - 700) {
      $(".b-weeks-list .first").find(".item-img").css("right", -271 + "px");
    } else {
      $(".b-weeks-list .first").find(".item-img").css("right", -2000 + "px");
    }
    if (scroll > $(".b-weeks-list .first").attr('data-offset-top') - 400) {
      $(".b-weeks-list .first").find(".item-text").addClass("m-opacity-steps");
      $(".b-weeks-list .first").find(".item-number").addClass("m-opacity-steps");
      $(".b-weeks-list .first").find(".item-title").addClass("m-opacity-steps");
    } else {
      $(".b-weeks-list .first").find(".item-text").removeClass("m-opacity-steps");
      $(".b-weeks-list .first").find(".item-number").removeClass("m-opacity-steps");
      $(".b-weeks-list .first").find(".item-title").removeClass("m-opacity-steps");
    }
    if (scroll > $(".b-weeks-list .second").attr('data-offset-top') - 100) {
      $(".b-weeks-list .second").find(".item-img").css("left", -210 + "px");
    } else {
      $(".b-weeks-list .second").find(".item-img").css("left", -2000 + "px");
    }
    if (scroll > $(".b-weeks-list .second").attr('data-offset-top')) {
      $(".b-weeks-list .second").find(".item-text").addClass("m-opacity-steps");
      $(".b-weeks-list .second").find(".item-number").addClass("m-opacity-steps");
      $(".b-weeks-list .second").find(".item-title").addClass("m-opacity-steps");
    } else {
      $(".b-weeks-list .second").find(".item-text").removeClass("m-opacity-steps");
      $(".b-weeks-list .second").find(".item-number").removeClass("m-opacity-steps");
      $(".b-weeks-list .second").find(".item-title").removeClass("m-opacity-steps");
    }
    if (scroll > $(".b-weeks-list .third").attr('data-offset-top') - 100) {
      $(".b-weeks-list .third").find(".item-img").css("right", -204 + "px");
    } else {
      $(".b-weeks-list .third").find(".item-img").css("right", -2000 + "px");
    }
    if (scroll > $(".b-weeks-list .third").attr('data-offset-top')) {
      $(".b-weeks-list .third").find(".item-text").addClass("m-opacity-steps");
      $(".b-weeks-list .third").find(".item-number").addClass("m-opacity-steps");
      $(".b-weeks-list .third").find(".item-title").addClass("m-opacity-steps");
    } else {
      $(".b-weeks-list .third").find(".item-text").removeClass("m-opacity-steps");
      $(".b-weeks-list .third").find(".item-number").removeClass("m-opacity-steps");
      $(".b-weeks-list .third").find(".item-title").removeClass("m-opacity-steps");
    }
    if (scroll > $(".b-weeks-list .fourth").attr('data-offset-top') - 100) {
      $(".b-weeks-list .fourth").find(".item-img").css("left", -114 + "px");
    } else {
      $(".b-weeks-list .fourth").find(".item-img").css("left", -2000 + "px");
    }
    if (scroll > $(".b-weeks-list .fourth").attr('data-offset-top')) {
      $(".b-weeks-list .fourth").find(".item-text").addClass("m-opacity-steps");
      $(".b-weeks-list .fourth").find(".item-number").addClass("m-opacity-steps");
      $(".b-weeks-list .fourth").find(".item-title").addClass("m-opacity-steps");
    } else {
      $(".b-weeks-list .fourth").find(".item-text").removeClass("m-opacity-steps");
      $(".b-weeks-list .fourth").find(".item-number").removeClass("m-opacity-steps");
      $(".b-weeks-list .fourth").find(".item-title").removeClass("m-opacity-steps");
    }


    $(".e-rent-item").each(function () {
      $(this).attr('data-offset-top', $(this).offset().top);
    });
    if (scroll > $(".e-rent-list .first").attr('data-offset-top') - 500) {
      $(".e-rent-list .first").find(".item-content").addClass("m-opacity-steps");
      $(".e-rent-list .first").find(".item-img").css("right", 0);
    } else {
      $(".e-rent-list .first").find(".item-img").css("right", -2000 + "px");
      $(".e-rent-list .first").find(".item-content").removeClass("m-opacity-steps");
    }
    if (scroll > $(".e-rent-list .second").attr('data-offset-top') - 400) {
      $(".e-rent-list .second").find(".item-content").addClass("m-opacity-steps");
      $(".e-rent-list .second").find(".item-img").css("left", 0);
    } else {
      $(".e-rent-list .second").find(".item-img").css("left", -2000 + "px");
      $(".e-rent-list .second").find(".item-content").removeClass("m-opacity-steps");
    }
    if (scroll > $(".e-rent-list .third").attr('data-offset-top') - 400) {
      $(".e-rent-list .third").find(".item-content").addClass("m-opacity-steps");
      $(".e-rent-list .third").find(".item-img").css("right", 0);
    } else {
      $(".e-rent-list .third").find(".item-img").css("right", -2000 + "px");
      $(".e-rent-list .third").find(".item-content").removeClass("m-opacity-steps");
    }
    if (scroll > $(".e-rent-list .fourth").attr('data-offset-top') - 400) {
      $(".e-rent-list .fourth").find(".item-content").addClass("m-opacity-steps");
      $(".e-rent-list .fourth").find(".item-img").css("left", 0);
    } else {
      $(".e-rent-list .fourth").find(".item-img").css("left", -2000 + "px");
      $(".e-rent-list .fourth").find(".item-content").removeClass("m-opacity-steps");
    }
    if (scroll > $(".e-rent-list .last").attr('data-offset-top') - 400) {
      $(".e-rent-list .last").find(".item-content").addClass("m-opacity-steps");
      $(".e-rent-list .last").find(".item-img").css("right", 0);
    } else {
      $(".e-rent-list .last").find(".item-img").css("right", -2000 + "px");
      $(".e-rent-list .last").find(".item-content").removeClass("m-opacity-steps");
    }

    ///////// кнопка вверх

    if (scroll != 0) {
      $(".b-button-top").css("display", "block").addClass("m-opacity-steps");
    }
    else {
      $(".b-button-top").css("display", "none").removeClass("m-opacity-steps");
    }
  });
  ///////// кнопка вверх
  $('.b-button-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
});