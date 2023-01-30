// var number =11;
// if(number % 2 === 0 ){
//     console.log("even")
// }else{
//     console.log("odd")
// }

function isEven(number) {
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const myNumber = isEven(111);
const herNumber = isEven(200);
console.log(myNumber,herNumber);