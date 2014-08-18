define("ghost/mixins/editor-route-base", 
  ["ghost/mixins/shortcuts-route","ghost/mixins/style-body","ghost/mixins/loading-indicator","ghost/utils/editor-shortcuts","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var ShortcutsRoute = __dependency1__["default"];
    var styleBody = __dependency2__["default"];
    var loadingIndicator = __dependency3__["default"];
    var editorShortcuts = __dependency4__["default"];

    var EditorRouteBase = Ember.Mixin.create(styleBody, ShortcutsRoute, loadingIndicator, {
        actions: {
            save: function () {
                this.get('controller').send('save');
            },
            publish: function () {
                var controller = this.get('controller');
                controller.send('setSaveType', 'publish');
                controller.send('save');
            },
            toggleZenMode: function () {
                Ember.$('body').toggleClass('zen');
            },
            //The actual functionality is implemented in utils/codemirror-shortcuts
            codeMirrorShortcut: function (options) {
                this.get('controller.codemirror').shortcut(options.type);
            }
        },

        shortcuts: editorShortcuts,

        attachModelHooks: function (controller, model) {
            // this will allow us to track when the model is saved and update the controller
            // so that we can be sure controller.isDirty is correct, without having to update the
            // controller on each instance of `model.save()`.
            //
            // another reason we can't do this on `model.save().then()` is because the post-settings-menu
            // also saves the model, and passing messages is difficult because we have two
            // types of editor controllers, and the PSM also exists on the posts.post route.
            //
            // The reason we can't just keep this functionality in the editor controller is
            // because we need to remove these handlers on `willTransition` in the editor route.
            model.on('didCreate', controller, controller.get('modelSaved'));
            model.on('didUpdate', controller, controller.get('modelSaved'));
        },

        detachModelHooks: function (controller, model) {
            model.off('didCreate', controller, controller.get('modelSaved'));
            model.off('didUpdate', controller, controller.get('modelSaved'));
        }
    });

    __exports__["default"] = EditorRouteBase;
  });