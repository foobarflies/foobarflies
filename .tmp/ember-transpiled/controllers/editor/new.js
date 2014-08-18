define("ghost/controllers/editor/new", 
  ["ghost/mixins/editor-base-controller","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var EditorControllerMixin = __dependency1__["default"];

    var EditorNewController = Ember.ObjectController.extend(EditorControllerMixin, {
        actions: {
            /**
              * Redirect to editor after the first save
              */
            save: function () {
                var self = this;
                this._super().then(function (model) {
                    if (model.get('id')) {
                        self.transitionToRoute('editor.edit', model);
                    }
                });
            }
        }
    });

    __exports__["default"] = EditorNewController;
  });