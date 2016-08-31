var SandwichMaker = (function() {

  var totalPrice = 0;

  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();