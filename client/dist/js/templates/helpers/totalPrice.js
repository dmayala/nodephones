define("templates/helpers/totalPrice",["Handlebars"],function(e){function t(e,t){var n=0,r=e.length;while(r--)"number"==typeof e[r].price&&(n+=e[r].price*e[r].qty);return(n/100).toFixed(2)}return e.registerHelper("totalPrice",t),t});