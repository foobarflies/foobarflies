define("ghost/routes/settings/users", 
  ["ghost/mixins/current-user-settings","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var CurrentUserSettings = __dependency1__["default"];

    var UsersRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, CurrentUserSettings, {
        beforeModel: function () {
            return this.currentUser()
                .then(this.transitionAuthor());
        }
    });

    __exports__["default"] = UsersRoute;
  });