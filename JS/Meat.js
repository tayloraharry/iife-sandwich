var SandwichMaker = (function(maker) {

  var meatPrices = {
                    "turkey": 2.50,
                    "ham": 2.00,
                    "roastbeef": 3.00,
                    "salami": 3.00,
                    "bacon" : 1.00,
                    "nomeat" : 0.00
                  };

  maker.getMeat = function() {
    return meatPrices;
  };

  return maker;
})(SandwichMaker);