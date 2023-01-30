function reverseFactorial(number){
    result = 1;
    for(let i = number; i >= 1; i--){
        result *= i;
    }return result;
}
const reverseFactorialNumber = reverseFactorial(6);
console.log(reverseFactorialNumber);