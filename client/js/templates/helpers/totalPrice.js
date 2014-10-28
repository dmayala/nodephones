define('templates/helpers/totalPrice', ['hbs/handlebars'], function ( Handlebars ) {
  function totalPrice ( context, options ) {
    var sum = 0;
    var i = context.length;
    while (i--) {
      if ("number" === typeof context[i].price) {
        sum += context[i].price * context[i].qty;
      }
    }
    return (sum/100).toFixed(2);
  }
  Handlebars.registerHelper( 'totalPrice', totalPrice );
  return totalPrice;
});