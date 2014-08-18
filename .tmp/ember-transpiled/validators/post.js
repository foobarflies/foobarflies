define("ghost/validators/post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PostValidator = Ember.Object.create({
        check: function (model) {
            var validationErrors = [],

                title = model.get('title');

            if (validator.empty(title)) {
                validationErrors.push({
                    message: 'You must specify a title for the post.'
                });
            }

            return validationErrors;
        }
    });

    __exports__["default"] = PostValidator;
  });