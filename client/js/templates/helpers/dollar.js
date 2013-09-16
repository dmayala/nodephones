define('templates/helpers/dollar', ['Handlebars'], function ( Handlebars ) {
  function dollar (cents) {
    var dollarNum = (cents/100).toFixed(2);
    return dollarNum;
  }

  Handlebars.registerHelper( 'dollar', dollar );
  return dollar;
});