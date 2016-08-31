var finalSandwichPrice = 0;
var breadPrice = 0;
var meatPrice = 0;
var cheesePrice = 0;
var toppingsPrice = 0;
var condimentsPrice = 0;
var selectedTopping;
var output = document.getElementById("output");
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var toppingChooser = document.getElementById("toppings-chooser");
var condimentsChooser = document.getElementById("condiments-chooser");


function getPrice(objectArray, topping) {
    for(var i in objectArray) {
        if(i === topping) {
            return objectArray[i];
        }
    }
};


breadChooser.addEventListener("change", function(event) {
    breadPrice = 0;
    var selectedTopping = event.target.value;
    var selectedToppingPrice = getPrice(SandwichMaker.getBread(), selectedTopping);
    if (event.target.value !== "none") {
        breadPrice += selectedToppingPrice;
    } else {
        breadPrice -= selectedToppingPrice;
    };
    return breadPrice;
});


meatChooser.addEventListener("change", function(event) {
    var selectedTopping = event.target.value;
    if (selectedTopping ==="nomeat") {
        document.getElementById("turkey").checked = false;
        document.getElementById("ham").checked = false;
        document.getElementById("roastbeef").checked = false;
        document.getElementById("salami").checked = false;
        document.getElementById("bacon").checked = false;
        meatPrice = 0;
    } else {
        document.getElementById("nomeat").checked = false;
    }
    var selectedMeatPrice = getPrice(SandwichMaker.getMeat(), selectedTopping);
    if (event.target.checked) {
        meatPrice += selectedMeatPrice;
    } else {
        meatPrice -= selectedMeatPrice;
    };
    return meatPrice;
});


cheeseChooser.addEventListener("change", function(event) {
    var selectedTopping = event.target.value;
    if (selectedTopping ==="nocheese") {
        document.getElementById("american").checked = false;
        document.getElementById("pepperjack").checked = false;
        document.getElementById("cheddar").checked = false;
        cheesePrice = 0;
    } else {
        document.getElementById("nocheese").checked = false;
    }
    var selectedCheesePrice = getPrice(SandwichMaker.getCheese(), selectedTopping);
    if (event.target.checked) {
        cheesePrice += selectedCheesePrice;
    } else {
        cheesePrice -= selectedCheesePrice;
    };
    return cheesePrice;
});


toppingChooser.addEventListener("change", function(event) {
    var selectedTopping = event.target.value;
    var selectedToppingPrice = getPrice(SandwichMaker.getToppings(), selectedTopping);
    if (event.target.checked) {
        toppingsPrice += selectedToppingPrice;
    } else {
        toppingsPrice -= selectedToppingPrice;
    };
    return toppingsPrice;
});


condimentsChooser.addEventListener("change", function(event) {
    var selectedTopping = event.target.value;
    var selectedToppingPrice = getPrice(SandwichMaker.getCondiments(), selectedTopping);
    if (event.target.checked) {
        condimentsPrice += selectedToppingPrice;
    } else {
        condimentsPrice -= selectedToppingPrice;
    };
    return condimentsPrice;
});


window.addEventListener("change", function(event) {
    output.value = breadPrice + meatPrice + cheesePrice + toppingsPrice + condimentsPrice;
});
