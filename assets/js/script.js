$(function () {

    $(window).on("scroll", function () {
        var sticky = $(window).scrollTop();
        // back to top
        if (sticky > 2000) {
          $("#back").show();
        } else {
          $("#back").hide();
        }
      });
      //back to top
      $("#back").on("click", function () {
        $("html,body").animate({
          scrollTop: 0,
        });
      });


      $('#token_count').countdown('2021/12/30', function(event) {
        $(this).html(event.strftime(''
          + '<div class="col-md-3 col-6"><span>%D</span><p>days</p></div> '
          + '<div class="col-md-3 col-6"><span>%H</span><p>Hours</p></div> '
          + '<div class="col-md-3 col-6"><span>%M</span><p>Minutes</p></div> '
          + '<div class="col-md-3 col-6"><span>%S</span><p>seconds</p></div>'));
      });


});
