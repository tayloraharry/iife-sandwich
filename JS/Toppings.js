var SandwichMaker = (function(maker) {

  var toppingsPrices = {
                    "tomato": 0.25,
                    "lettuce": 0.10,
                    "onion": 0.10,
                    "pickle": 0.10
                  };

  maker.getToppings = function() {
    return toppingsPrices;
  };

  return maker;
})(SandwichMaker || {});