define("ghost/views/settings/index", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var SettingsIndexView = Ember.View.extend({
        //Ensure that going to the index brings the menu into view on mobile.
        showMenu: function () {
            this.get('parentView').showSettingsMenu();
        }.on('didInsertElement')
    });

    __exports__["default"] = SettingsIndexView;
  });