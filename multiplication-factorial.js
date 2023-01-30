function multiplicationOfNumbers(number){
    result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }return result;
}
const multiplicationOfNumber = multiplicationOfNumbers(7);
console.log(multiplicationOfNumber);