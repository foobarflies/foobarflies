define("ghost/components/gh-activating-list-item", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ActivatingListItem = Ember.Component.extend({
        tagName: 'li',
        classNameBindings: ['active'],
        active: false
    });

    __exports__["default"] = ActivatingListItem;
  });