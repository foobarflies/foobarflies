define("ghost/routes/settings/apps", 
  ["ghost/mixins/current-user-settings","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var CurrentUserSettings = __dependency1__["default"];

    var AppsRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, CurrentUserSettings, {
        beforeModel: function () {
            if (!this.get('config.apps')) {
                return this.transitionTo('settings.general');
            }

            return this.currentUser()
                .then(this.transitionAuthor())
                .then(this.transitionEditor());
        },
        
        model: function () {
            return this.store.find('app');
        }
    });

    __exports__["default"] = AppsRoute;
  });