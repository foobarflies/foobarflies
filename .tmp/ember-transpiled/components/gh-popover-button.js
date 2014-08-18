define("ghost/components/gh-popover-button", 
  ["ghost/mixins/popover-mixin","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var PopoverMixin = __dependency1__["default"];

    var PopoverButton = Ember.Component.extend(PopoverMixin, {
        tagName: 'button',
        /*matches with the popover this button toggles*/
        popoverName: null,
        /*Notify popover service this popover should be toggled*/
        click: function (event) {
            this._super(event);
            this.get('popover').togglePopover(this.get('popoverName'), this);
        }
    });

    __exports__["default"] = PopoverButton;
  });