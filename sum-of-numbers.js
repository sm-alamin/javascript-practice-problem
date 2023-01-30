//1+2+3+4+5+6+7
//simple way
// sum = 0;
// for(let i = 1; i < 7; i++){
//     sum += i;
// }
// console.log(sum);

//better way
function sumOfNumbers(number){
    sum = 0;
    for(let i = 1; i < number; i++){
        sum += i;
    }return sum;
}
const sumOfNumber = sumOfNumbers(50);
console.log(sumOfNumber);