$(document).ready(function(){
  var mapCenter = function () {


    var marker;

    var image = {
      url: 'img/mark.png',
      size: new google.maps.Size(57, 84),
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.387937, lng: 30.604006},
      scrollwheel: false,
      zoom: 18
    });
    marker = new google.maps.Marker({
      map: map,
      icon: image,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: 50.387937, lng: 30.604006}

    });
    marker.setMap(map);

  };

  $(window).load(function () {
    mapCenter();
  });
});