var SandwichMaker = (function(maker) {

  var condimentPrices = {
                    "mustard": 0.25,
                    "mayo": 0.25,
                    "oil": 0.25,
                    "vinegar": 0.25
                  };

  maker.getCondiments = function() {
    return condimentPrices;
  };

  return maker;
})(SandwichMaker || {});