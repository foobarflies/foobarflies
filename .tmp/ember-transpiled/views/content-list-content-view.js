define("ghost/views/content-list-content-view", 
  ["ghost/utils/set-scroll-classname","ghost/mixins/pagination-view-infinite-scroll","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var setScrollClassName = __dependency1__["default"];
    var PaginationViewMixin = __dependency2__["default"];


    var PostsListView = Ember.View.extend(PaginationViewMixin, {
        classNames: ['content-list-content'],

        didInsertElement: function () {
            this._super();
            var el = this.$();
            el.on('scroll', Ember.run.bind(el, setScrollClassName, {
                target: el.closest('.content-list'),
                offset: 10
            }));
        }
    });

    __exports__["default"] = PostsListView;
  });