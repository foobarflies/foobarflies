define("ghost/routes/posts", 
  ["ghost/mixins/style-body","ghost/mixins/shortcuts-route","ghost/mixins/loading-indicator","ghost/mixins/pagination-route","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var ShortcutsRoute = __dependency2__["default"];
    var loadingIndicator = __dependency3__["default"];
    var PaginationRouteMixin = __dependency4__["default"];

    var paginationSettings = {
        status: 'all',
        staticPages: 'all',
        page: 1
    };

    var PostsRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, ShortcutsRoute, styleBody, loadingIndicator, PaginationRouteMixin, {
        classNames: ['manage'],

        model: function () {
            var self = this;

            return this.store.find('user', 'me').then(function (user) {
                if (user.get('isAuthor')) {
                    paginationSettings.author = user.get('slug');
                }
                // using `.filter` allows the template to auto-update when new models are pulled in from the server.
                // we just need to 'return true' to allow all models by default.
                return self.store.filter('post', paginationSettings, function (post) {
                    if (user.get('isAuthor')) {
                        return post.isAuthoredByUser(user);
                    }

                    return true;
                });
            });
        },

        setupController: function (controller, model) {
            this._super(controller, model);
            this.setupPagination(paginationSettings);
        },

        stepThroughPosts: function (step) {
            var currentPost = this.get('controller.currentPost'),
                posts = this.get('controller.arrangedContent'),
                length = posts.get('length'),
                newPosition;

            newPosition = posts.indexOf(currentPost) + step;

            // if we are on the first or last item
            // just do nothing (desired behavior is to not
            // loop around)
            if (newPosition >= length) {
                return;
            } else if (newPosition < 0) {
                return;
            }
            this.transitionTo('posts.post', posts.objectAt(newPosition));
        },

        shortcuts: {
            'up': 'moveUp',
            'down': 'moveDown'
        },
        actions: {
            openEditor: function (post) {
                this.transitionTo('editor.edit', post);
            },
            moveUp: function () {
                this.stepThroughPosts(-1);
            },
            moveDown: function () {
                this.stepThroughPosts(1);
            }
        }
    });

    __exports__["default"] = PostsRoute;
  });