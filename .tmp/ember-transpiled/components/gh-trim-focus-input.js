define("ghost/components/gh-trim-focus-input", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var TrimFocusInput = Ember.TextField.extend({
        focus: true,

        setFocus: function () {
            if (this.focus) {
                this.$().val(this.$().val()).focus();
            }
        }.on('didInsertElement'),

        focusOut: function () {
            var text = this.$().val();

            this.$().val(text.trim());
        }
    });

    __exports__["default"] = TrimFocusInput;
  });