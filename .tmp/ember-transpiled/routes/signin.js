define("ghost/routes/signin", 
  ["ghost/mixins/style-body","ghost/mixins/loading-indicator","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var loadingIndicator = __dependency2__["default"];

    var SigninRoute = Ember.Route.extend(styleBody, loadingIndicator, {
        classNames: ['ghost-login'],
        beforeModel: function () {
            if (this.get('session').isAuthenticated) {
                this.transitionTo(SimpleAuth.Configuration.routeAfterAuthentication);
            }
        },

        // the deactivate hook is called after a route has been exited.
        deactivate: function () {
            this._super();

            // clear the properties that hold the credentials from the controller
            // when we're no longer on the signin screen
            this.controllerFor('signin').setProperties({ identification: '', password: '' });
        }
    });

    __exports__["default"] = SigninRoute;
  });