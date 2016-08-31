var SandwichMaker = (function(maker) {

  var cheesePrices = {
                    "american": 1.00,
                    "cheddar": 1.00,
                    "pepperjack": 1.00,
                    "nocheese": 0.00
                  };

  maker.getCheese = function() {
    return cheesePrices;
  };

  return maker;
})(SandwichMaker || {});