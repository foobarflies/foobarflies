define("ghost/components/gh-role-selector", 
  ["ghost/components/gh-select","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var GhostSelect = __dependency1__["default"];

    var RolesSelector = GhostSelect.extend({
        roles: Ember.computed.alias('options'),
        options: Ember.computed(function () {
            var rolesPromise = this.store.find('role', { permissions: 'assign' });

            return Ember.ArrayProxy.extend(Ember.PromiseProxyMixin)
                .create({promise: rolesPromise});
        })
    });

    __exports__["default"] = RolesSelector;
  });