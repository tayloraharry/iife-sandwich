var SandwichMaker = (function(maker) {

  var breadPrices = {
                    "white": 1.00,
                    "wheat": 1.00,
                    "rye": 1.00,
                    "lettucewrap": .50,
                    "none": 0
                  };

  maker.getBread = function() {
    return breadPrices;
  };

  return maker;
})(SandwichMaker || {});