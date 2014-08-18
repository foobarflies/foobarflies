define("ghost/models/setting", 
  ["ghost/mixins/validation-engine","ghost/mixins/nprogress-save","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var ValidationEngine = __dependency1__["default"];
    var NProgressSaveMixin = __dependency2__["default"];

    var Setting = DS.Model.extend(NProgressSaveMixin, ValidationEngine, {
        validationType: 'setting',

        title: DS.attr('string'),
        description: DS.attr('string'),
        email: DS.attr('string'),
        logo: DS.attr('string'),
        cover: DS.attr('string'),
        defaultLang: DS.attr('string'),
        postsPerPage: DS.attr('number'),
        forceI18n: DS.attr('boolean'),
        permalinks: DS.attr('string'),
        activeTheme: DS.attr('string'),
        availableThemes: DS.attr()
    });

    __exports__["default"] = Setting;
  });