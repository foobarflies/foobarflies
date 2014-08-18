define("ghost/mixins/popover-mixin", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*
      Popovers and their buttons are evented and do not propagate clicks.
    */
    var PopoverMixin = Ember.Mixin.create(Ember.Evented, {
        classNameBindings: ['isOpen:open'],
        isOpen: false,
        click: function (event) {
            this._super(event);
            return event.stopPropagation();
        }
    });

    __exports__["default"] = PopoverMixin;
  });