define("ghost/routes/signup", 
  ["ghost/mixins/style-body","ghost/mixins/loading-indicator","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var loadingIndicator = __dependency2__["default"];

    var SignupRoute = Ember.Route.extend(styleBody, loadingIndicator, {
        classNames: ['ghost-signup'],
        beforeModel: function () {
            if (this.get('session').isAuthenticated) {
                this.notifications.showWarn('You need to sign out to register as a new user.', { delayed: true });
                this.transitionTo(SimpleAuth.Configuration.routeAfterAuthentication);
            }
        },
        setupController: function (controller, params) {
            var tokenText,
                email,
                re = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
            if (re.test(params.token)) {
                try {
                    tokenText = atob(params.token);
                    email = tokenText.split('|')[1];
                    controller.token = params.token;
                    controller.email = email;
                } catch (e) {
                    this.transitionTo('signin');
                    this.notifications.showError('Invalid token.', {delayed: true});
                }
            } else {
                this.transitionTo('signin');
                this.notifications.showError('Invalid token.', {delayed: true});
            }
        }
    });

    __exports__["default"] = SignupRoute;
  });