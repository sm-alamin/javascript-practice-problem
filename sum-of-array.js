
function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        sum += element;
    }return sum;
}
const numbers =[50, 60, 70, 80, 60,20];
const sumNumbers =getSumOfArray(numbers);
console.log(sumNumbers);