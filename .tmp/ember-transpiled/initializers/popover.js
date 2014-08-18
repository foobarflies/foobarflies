define("ghost/initializers/popover", 
  ["ghost/mixins/body-event-listener","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var BodyEventListener = __dependency1__["default"];

    var PopoverService = Ember.Object.extend(Ember.Evented, BodyEventListener, {
        bodyClick: function (event) {
            /*jshint unused:false */
            this.closePopovers();
        },
        closePopovers: function () {
            this.trigger('close');
        },
        togglePopover: function (popoverName, popoverButton) {
            this.trigger('toggle', {target: popoverName, button: popoverButton});
        }
    });

    var popoverInitializer = {
        name: 'popover',

        initialize: function (container, application) {
            application.register('popover:service', PopoverService);

            application.inject('component:gh-popover', 'popover', 'popover:service');
            application.inject('component:gh-popover-button', 'popover', 'popover:service');
            application.inject('controller:modals.delete-post', 'popover', 'popover:service');
            application.inject('controller:modals.transfer-owner', 'popover', 'popover:service');
            application.inject('route:application', 'popover', 'popover:service');
        }
    };

    __exports__["default"] = popoverInitializer;
  });