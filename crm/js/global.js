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
  rand = 0;
  function getRandomArbitrary(min, max) {
    rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;

  }

  var textAnim = function(){

    var myList = $(".b-text-list .e-text-item"),
        listLength = myList.length;


    var changeColor = function(){

      getRandomArbitrary(0, listLength);

      myList.eq(rand).addClass("active");
      var numActive = 0,
        myListActive = $(".b-text-list .e-text-item.active");
      myListActive.each(function(){
        numActive = numActive +1;
        return numActive
      });

      if(numActive>=6){
        myList.removeClass("active");
      }
    };

    setInterval(function(){
      changeColor();
    }, 1000);

  };

  $(".e-feedback-button, .e-feedback-title").click(function(){

    var item = $(this).closest(".b-feedback-list").find(".e-feedback-item"),
        par = $(this).closest(".e-feedback-item"),
        descAll = item.find(".e-feedback-description"),
        desc = par.find(".e-feedback-description"),
        active = par.hasClass("active");


    if(!active){
      descAll.slideUp();
      item.removeClass("active");
      par.addClass("active");
      desc.slideDown();
    }else{
      par.removeClass("active");
      desc.slideUp();
    }

  });


  androidAnimate();
  textAnim();

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
