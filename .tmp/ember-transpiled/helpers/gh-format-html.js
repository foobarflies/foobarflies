define("ghost/helpers/gh-format-html", 
  ["ghost/utils/caja-sanitizers","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global Handlebars, html_sanitize*/
    var cajaSanitizers = __dependency1__["default"];

    var formatHTML = Ember.Handlebars.makeBoundHelper(function (html) {
        var escapedhtml = html || '';

        // replace script and iFrame
        escapedhtml = escapedhtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            '<pre class="js-embed-placeholder">Embedded JavaScript</pre>');
        escapedhtml = escapedhtml.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
            '<pre class="iframe-embed-placeholder">Embedded iFrame</pre>');

        // sanitize HTML
        escapedhtml = html_sanitize(escapedhtml, cajaSanitizers.url, cajaSanitizers.id);
        return new Handlebars.SafeString(escapedhtml);
    });

    __exports__["default"] = formatHTML;
  });