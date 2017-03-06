(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };


  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("active") === true) {
        this.classList.remove("active");
        $('button.closeMenu').addClass("js-open-menu");
        $('button.closeMenu').removeClass("closeMenu");
        $("#st-container").removeClass("st-menu-open st-effect-1");
        $('.test').css("display", "none");
      } else {
        this.classList.add("active");
        $("#st-container").addClass("st-menu-open st-effect-1");
        $('button.closeMenu').addClass("closeMenu");
        $('button.closeMenu').removeClass("js-open-menu");
        $('.test').css("display", "block");
      }
    });
    $(".test").click(function(){
      $('button.closeMenu').addClass("js-open-menu");
      $('button.js-open-menu').removeClass("active");
      $('button.closeMenu').removeClass("closeMenu");
      $("#st-container").removeClass("st-menu-open st-effect-1");
      $('.test').css("display", "none");
    });
  }

})();