define("ghost/adapters/post", 
  ["ghost/adapters/embedded-relation-adapter","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var EmbeddedRelationAdapter = __dependency1__["default"];

    var PostAdapter = EmbeddedRelationAdapter.extend({
        createRecord: function (store, type, record) {
            var data = {},
                serializer = store.serializerFor(type.typeKey),
                url = this.buildURL(type.typeKey);

            // make the server return with the tags embedded
            url = url + '?include=tags';

            // use the PostSerializer to transform the model back into
            // an array with a post object like the API expects
            serializer.serializeIntoHash(data, type, record);

            return this.ajax(url, 'POST', { data: data });
        },

        updateRecord: function (store, type, record) {
            var data = {},
                serializer = store.serializerFor(type.typeKey),
                id = Ember.get(record, 'id'),
                url = this.buildURL(type.typeKey, id);

            // make the server return with the tags embedded
            url = url + '?include=tags';

            // use the PostSerializer to transform the model back into
            // an array of posts objects like the API expects
            serializer.serializeIntoHash(data, type, record);

            // use the ApplicationAdapter's buildURL method
            return this.ajax(url, 'PUT', { data: data });
        }
    });

    __exports__["default"] = PostAdapter;
  });