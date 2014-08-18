define("ghost/validators/signin", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var SigninValidator = Ember.Object.create({
        check: function (model) {
            var data = model.getProperties('identification', 'password'),
                validationErrors = [];

            if (!validator.isEmail(data.identification)) {
                validationErrors.push('Invalid Email');
            }

            if (!validator.isLength(data.password || '', 1)) {
                validationErrors.push('Please enter a password');
            }

            return validationErrors;
        }
    });

    __exports__["default"] = SigninValidator;
  });