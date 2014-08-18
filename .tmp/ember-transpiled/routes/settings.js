define("ghost/routes/settings", 
  ["ghost/mixins/style-body","ghost/mixins/loading-indicator","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var loadingIndicator = __dependency2__["default"];

    var SettingsRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, styleBody, loadingIndicator, {
        classNames: ['settings']
    });

    __exports__["default"] = SettingsRoute;
  });