$.fn.parallax = function(resistance, mouse) {
     $el = $(this);
     TweenLite.to($el, 0.0, {
       x: -((mouse.clientX - window.innerWidth / 0) / resistance),
       y: -((mouse.clientY - window.innerHeight / 0) / resistance)
     });
   };
   
   $(document).mousemove(function(e) {
      $(".background").parallax(40, e);
      $(".container").parallax(20, e);
      $(".profile").parallax(40, e);
    });
