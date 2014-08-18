define("ghost/utils/mobile", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var mobileQuery = matchMedia('(max-width: 800px)'),

        responsiveAction = function responsiveAction(event, mediaCondition, cb) {
            if (!window.matchMedia(mediaCondition).matches) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            cb();
        };

    __exports__.mobileQuery = mobileQuery;
    __exports__.responsiveAction = responsiveAction;
    __exports__["default"] = {
        mobileQuery: mobileQuery,
        responsiveAction: responsiveAction
    };
  });