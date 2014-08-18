define("ghost/views/posts", 
  ["ghost/utils/mobile","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var mobileQuery = __dependency1__.mobileQuery;
    var responsiveAction = __dependency1__.responsiveAction;

    var PostsView = Ember.View.extend({
        target: Ember.computed.alias('controller'),
        classNames: ['content-view-container'],
        tagName: 'section',

        mobileInteractions: function () {
            Ember.run.scheduleOnce('afterRender', this, function () {
                var self = this;

                $(window).resize(function () {
                    if (!mobileQuery.matches) {
                        self.send('resetContentPreview');
                    }
                });

                // ### Add the blog URL to the <a> version of the ghost logo
                $('.ghost-logo-link').attr('href', this.get('controller.ghostPaths').blogRoot);

                // ### Show content preview when swiping left on content list
                $('.manage').on('click', '.content-list ol li', function (event) {
                    responsiveAction(event, '(max-width: 800px)', function () {
                        self.send('showContentPreview');
                    });
                });

                // ### Hide content preview
                $('.manage').on('click', '.content-preview .button-back', function (event) {
                    responsiveAction(event, '(max-width: 800px)', function () {
                        self.send('hideContentPreview');
                    });
                });
            });
        }.on('didInsertElement'),
    });

    __exports__["default"] = PostsView;
  });