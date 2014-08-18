define("ghost/routes/posts/index", 
  ["ghost/mixins/loading-indicator","ghost/utils/mobile","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var loadingIndicator = __dependency1__["default"];
    var mobileQuery = __dependency2__.mobileQuery;

    var PostsIndexRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, loadingIndicator, {
        // This route's only function is to determine whether or not a post
        // exists to be used for the content preview.  It has a parent resource (Posts)
        // that is responsible for populating the store.
        beforeModel: function () {
            var self = this,
            // the store has been populated so we can work with the local copy
                posts = this.store.all('post'),
                currentPost = this.controllerFor('posts').get('currentPost');

            return this.store.find('user', 'me').then(function (user) {
                // return the first post find that matches the following criteria:
                // * User is an author, and is the author of this post
                // * User has a role other than author
                return posts.find(function (post) {
                    if (user.get('isAuthor')) {
                        return post.isAuthoredByUser(user);
                    } else {
                        return true;
                    }
                });
            })
            .then(function (post) {
                if (post) {
                    if (currentPost === post && mobileQuery.matches) {
                        self.controllerFor('posts').send('hideContentPreview');
                    }

                    return self.transitionTo('posts.post', post);
                }
            });
        }
    });

    __exports__["default"] = PostsIndexRoute;
  });