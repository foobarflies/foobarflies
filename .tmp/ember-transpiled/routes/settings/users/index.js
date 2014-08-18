define("ghost/routes/settings/users/index", 
  ["ghost/mixins/pagination-route","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var PaginationRouteMixin = __dependency1__["default"];

    var paginationSettings = {
        page: 1,
        limit: 20,
        status: 'all'
    };

    var UsersIndexRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, PaginationRouteMixin, {
        setupController: function (controller, model) {
            this._super(controller, model);
            this.setupPagination(paginationSettings);
        },

        model: function () {
            var self = this;
            return this.store.find('user', 'me').then(function (currentUser) {
                if (currentUser.get('isEditor')) {
                    // Editors only see authors in the list
                    paginationSettings.role = 'Author';
                }
                return self.store.filter('user', paginationSettings, function (user) {
                    if (currentUser.get('isEditor')) {
                        return user.get('isAuthor');
                    }
                    return true;
                });
            });
        },

        actions: {
            reload: function () {
                this.refresh();
            }
        }
    });

    __exports__["default"] = UsersIndexRoute;
  });