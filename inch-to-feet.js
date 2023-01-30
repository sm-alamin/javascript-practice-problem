//Normal way
// var inch = 35;
// var conversionToFeet = inch / 12;
// var feetInTwoDecimal = conversionToFeet.toFixed(2);

// console.log(feetInTwoDecimal, "feet");

function inchToFeet(getInchValue){
    var conversionToFeet = getInchValue / 12;
    var feetInTwoDecimal = conversionToFeet.toFixed(2);
    var showFeet = feetInTwoDecimal + " feet";
    return showFeet;
}
var convertIntoFeet = inchToFeet(100);
console.log(convertIntoFeet);
