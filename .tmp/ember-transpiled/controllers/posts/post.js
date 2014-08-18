define("ghost/controllers/posts/post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PostController = Ember.ObjectController.extend({
        isPublished: Ember.computed.equal('status', 'published'),
        classNameBindings: ['featured'],

        actions: {
            toggleFeatured: function () {
                var options = {disableNProgress: true},
                    self = this;

                this.toggleProperty('featured');
                this.get('model').save(options).catch(function (errors) {
                    self.notifications.showErrors(errors);
                });
            }
        }
    });

    __exports__["default"] = PostController;
  });