function findOddSum(numbers){
    let sumOdd = 0;
    for(let i = 0;i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            sumOdd += element;
        }
    }
    return sumOdd;
}
const numbers =[5, 7, 8, 10, 45, 30];
const sumOddNumbers = findOddSum(numbers);
console.log(sumOddNumbers);