define("ghost/routes/debug", 
  ["ghost/mixins/style-body","ghost/mixins/loading-indicator","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var loadingIndicator = __dependency2__["default"];

    var DebugRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, styleBody, loadingIndicator, {
        classNames: ['settings'],

        beforeModel: function () {
            var self = this;
            this.store.find('user', 'me').then(function (user) {
                if (user.get('isAuthor') || user.get('isEditor')) {
                    self.transitionTo('posts');
                }
            });
        },

        model: function () {
            return this.store.find('setting', { type: 'blog,theme' }).then(function (records) {
                return records.get('firstObject');
            });
        }

    });

    __exports__["default"] = DebugRoute;
  });