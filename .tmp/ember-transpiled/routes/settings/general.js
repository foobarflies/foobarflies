define("ghost/routes/settings/general", 
  ["ghost/mixins/loading-indicator","ghost/mixins/current-user-settings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var loadingIndicator = __dependency1__["default"];
    var CurrentUserSettings = __dependency2__["default"];

    var SettingsGeneralRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, loadingIndicator, CurrentUserSettings, {
        beforeModel: function () {
            return this.currentUser()
                .then(this.transitionAuthor())
                .then(this.transitionEditor());
        },

        model: function () {
            return this.store.find('setting', { type: 'blog,theme' }).then(function (records) {
                return records.get('firstObject');
            });
        }
    });

    __exports__["default"] = SettingsGeneralRoute;
  });