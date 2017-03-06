var chart = function (percent1, percent2, color, element) {
  google.load("visualization", "1", {packages: ["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['', percent1],
      ['', percent2]
    ]);

    var options = {
      pieSliceText: 'none',
      backgroundColor: "transparent",
      colors: [color, "transparent"],
      pieSliceBorderColor: "transparent",
      enableInteractivity: false,
      legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById(element));

    chart.draw(data, options);
  }
};


$.cssHooks.backgroundColor = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["backgroundColor"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("background-color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
};



var blockInCenter = function(container, element){
  var elementWidth = $(element).outerWidth(),
    elementHeight = $(element).outerHeight(),
    containerWidth  = $(container).outerWidth(),
    containerHeight = $(container).outerHeight(),
    positionLeft = (containerWidth - elementWidth)/ 2,
    positionTop = (containerHeight - elementHeight)/ 2;


    $(element).css("left", positionLeft)

    $(element).css("top", positionTop);

};


// Chart Circle

var chartProperty = function(id){
  var color = $(id).css("background-color"),
      container = "/"+id+"/",
      elem = container.substring(2, container.length-1),
      visiblePercent = parseInt($(id).attr("data-percent")),
      unVisiblePercent = 100 - visiblePercent;
  chart(visiblePercent, unVisiblePercent, color, elem);
  $(id).css("background-color","transparent");
};

// end Chart Circle

chartProperty("#profit-1");
chartProperty("#clients-1");
chartProperty("#country-1");

chartProperty("#profit-2");
chartProperty("#clients-2");
chartProperty("#country-2");

chartProperty("#profit-3");
chartProperty("#clients-3");
chartProperty("#country-3");

chartProperty("#profit-4");
chartProperty("#clients-4");
chartProperty("#country-4");

chartProperty("#profit-5");
chartProperty("#clients-5");
chartProperty("#country-5");

chartProperty("#profit-6");
chartProperty("#clients-6");
chartProperty("#country-6");

$(document).ready(function(){
  $(window).load(function(){
    $(".e-circle-chart").each(function(){
      blockInCenter(".e-chart-circle-item", this);
    });
    $(".e-charts-description-detail .e-charts-description-list").each(function(){
      var title = $(this).find(".e-charts-description-list-year").text(),
          num = $(this).index();
      $(".e-chart-circle-item").eq(num).find(".year-chart").text(title);
    });
  });
});