// function getSumOdd(numbers){
//     let sumOddNumber =0;
//    for(let i = 0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element % 2 == 1){
//         sumOddNumber += element;
//     }
//    }return sumOddNumber;
// }
// const numbers =[50,60,70,30,15,25,50,99];
// const sumOddNumbers = getSumOdd(numbers);
// console.log(sumOddNumbers);

//better way
//sum of arrays
function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
    }return sum;
}

//sum of odd numbers
function getSumOdd(numbers){
    let oddNumber = [];
   for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 !== 0){
        oddNumber.push(element);
    }
   }return oddNumber;
}
//sum of even numbers
function getSumEven(numbers){
    let evenNumber = [];
   for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 === 0){
        evenNumber.push(element);
    }
   }return evenNumber;
}

const numbers =[50, 65, 70, 83, 60,23];
const sumNumbers =getSumOfArray(numbers);
console.log(sumNumbers);

const sumOddNumbers = getSumOdd(numbers);
const sumOfOddNumbers =getSumOfArray(sumOddNumbers);
console.log(sumOfOddNumbers);

const sumEvenNumbers = getSumEven(numbers);
const sumOfEvenNumbers = getSumOfArray(sumEvenNumbers);
console.log(sumOfEvenNumbers);

