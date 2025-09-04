/*样式一*/
(function ($) {
  $.fn.snow = function (options) {
    var $flake = $('<div class="snowbox" />')
        .css({
          position: "absolute",
          "z-index": "9999",
          top: "-50px",
        })
        .html("&#10052;"),
      options = $.extend(
        {},
        {
          minSize: 10,
          maxSize: 20,
          newOn: 1000,
          flakeColor: "#AFDAEF",
        },
        options
      );
    if ($.fn.interval) {
      clearInterval($.fn.interval);
      $(".snowbox").remove();
    }
    setTimeout(() => {
      $.fn.interval = setInterval(function () {
        let documentHeight = $(document).height();
        let documentWidth = $(document).width();
        let startPositionLeft = Math.random() * documentWidth - 100,
          startOpacity = 0.5 + Math.random(),
          sizeFlake = options.minSize + Math.random() * options.maxSize,
          endPositionTop = documentHeight - 200,
          endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
          durationFall = documentHeight * 10 + Math.random() * 5000;
        $flake
          .clone()
          .appendTo("body")
          .css({
            left: startPositionLeft,
            opacity: startOpacity,
            "font-size": sizeFlake,
            color: options.flakeColor,
          })
          .animate(
            {
              top: endPositionTop,
              left: endPositionLeft,
              opacity: 0.2,
            },
            durationFall,
            "linear",
            function () {
              $(this).remove();
            }
          );
      }, options.newOn);
    }, 1000);
  };
})(jQuery);
$(function () {
  $.fn.snow({
    minSize: 10,
    /* 定义雪花最小尺寸 */
    maxSize: 40,
    /* 定义雪花最大尺寸 */
    newOn: 1500,
    /* 定义密集程度，数字越小越密集 */
  });
});
