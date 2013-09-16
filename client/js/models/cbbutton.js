define(['backbone'], function(Backbone) {
  var CbButton = Backbone.Model.extend({
    idAttribute: "_id",

    urlRoot : '/coins'
  });
  return CbButton;
});