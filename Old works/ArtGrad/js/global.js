$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    autoSize: false,
    width: '100%'
  });


  $("html").niceScroll();


  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'swing');
      event.preventDefault();
    });
  });
  $(window).load(function () {
    $('.m-teacher-item-1 .e-teacher-name').circleType({radius: -145});
    $('.m-teacher-item-2 .e-teacher-name').circleType({radius: -95});
    $('.m-teacher-item-3 .e-teacher-name').circleType({radius: -130});
    $('.m-teacher-item-4 .e-teacher-name').circleType({radius: -135});
    $('.m-teacher-item-5 .e-teacher-name').circleType({radius: -135});
    $('.m-teacher-item-6 .e-teacher-name').circleType({radius: -90});
    $('.e-teachers-name').circleType({radius: -120});
  });

  $(".e-teacher-item-img-container img").hover(function () {
    $(this).addClass("js-z-index");
  }, function () {
    $(this).removeClass("js-z-index");
  });


  var slider = $(".e-slider-list").lightSlider({
    autoWidth: false,
    slideMargin: 37,
    pager: false,
    controls: true,
    prevHtml: "",
    nextHtml: ""
  });
  $('.e-slider-prev').click(function () {
    slider.goToPrevSlide();
  });
  $('.e-slider-next').click(function () {
    slider.goToNextSlide();
  });

  $(".e-photo-gallery-list").lightSlider({

    autoWidth: true,
    slideMargin: 21,
    pager: false,
    auto: true,
    loop: true
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".e-artGrad-parallax-first").css("background-position", "center" + " " + (-scroll / 5 + "px"));
    $(".e-artGrad-parallax-second").css("background-position", "center" + " " + (-scroll / 3 + "px"));
    $(".e-artGrad-parallax-third").css("background-position", "center" + " " + (-scroll + "px"));
  });

  $("body").mousemove(function (e) {
    $(".e-teacher-parallax-first").css("background-position", e.pageX / 20 * (-1) + "px" + " " + e.pageY / 20 * (-1) + "px");
    $(".e-teacher-parallax-second").css("background-position", e.pageX / 40 * (-1) + "px" + " " + e.pageY / 40 * (-1) + "px");
    $(".e-teacher-parallax-third").css("background-position", e.pageX / 10 * (-1) + "px" + " " + e.pageY / 10 * (-1) + "px");
  });


  var x = new google.maps.LatLng(55.9205204, 36.8431202);
  var start = new google.maps.LatLng(55.920381, 36.858457);
  var middleOne = new google.maps.LatLng(55.920747, 36.856271);
  var middleTwo = new google.maps.LatLng(55.921114, 36.851623);
  var middleThree = new google.maps.LatLng(55.920601, 36.849815);
  var middleFour = new google.maps.LatLng(55.920214, 36.846368);
  var middleFive = new google.maps.LatLng(55.920003, 36.844876);
  var middleSix = new google.maps.LatLng(55.920129, 36.842677);
  var middleSeven = new google.maps.LatLng(55.920033, 36.843748);
  var middleEight = new google.maps.LatLng(55.920451, 36.841916);
  var middleNine = new google.maps.LatLng(55.920432, 36.841958);
  var finish = new google.maps.LatLng(55.920532, 36.841518);

  function initialize() {
    var mapProp = {
      center: x,
      zoom: 17,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4
    };
    var lineSymbolArrow = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

    var line = new google.maps.Polyline({
      path: [middleNine, middleEight],
      strokeColor: "#d3153e",
      icons: [{
        icon: lineSymbolArrow,
        offset: '100%'
      }],
      map: map
    });

    var myTrip = [start, middleOne, middleTwo, middleThree, middleFour, middleFive, middleSeven, middleSix, middleEight];
    var flightPath = new google.maps.Polyline({
      path: myTrip,
      strokeColor: "#d3153e",
      strokeOpacity: 0,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px'
      }]
    });

    flightPath.setMap(map);
    var marker = new MarkerWithLabel({
      position: finish,
      raiseOnDrag: true,
      map: map,
      labelContent: "Музейно выставочный комплекс Московской области \"Новый Иерусалим\"",
      labelAnchor: new google.maps.Point(22, 0),
      labelClass: "labels", // the CSS class for the label
      labelStyle: {opacity: 0.75}
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);


});