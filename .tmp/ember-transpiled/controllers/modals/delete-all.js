define("ghost/controllers/modals/delete-all", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var DeleteAllController = Ember.Controller.extend({
        actions: {
            confirmAccept: function () {
                var self = this;

                ic.ajax.request(this.get('ghostPaths.url').api('db'), {
                    type: 'DELETE'
                }).then(function () {
                    self.notifications.showSuccess('All content deleted from database.');
                }).catch(function (response) {
                    self.notifications.showErrors(response);
                });
            },

            confirmReject: function () {
                return false;
            }
        },

        confirm: {
            accept: {
                text: 'Delete',
                buttonClass: 'button-delete'
            },
            reject: {
                text: 'Cancel',
                buttonClass: 'button'
            }
        }
    });

    __exports__["default"] = DeleteAllController;
  });