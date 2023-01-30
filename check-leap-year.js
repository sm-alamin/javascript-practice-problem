// function checkLeapYear(year){
//     const leapYear = year % 4;
//     if(leapYear === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const myBirthYear =checkLeapYear(1996);
// console.log(myBirthYear);
//More exact way
function checkLeapYear(year){
    const leapYear = year % 4;
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)
    ){
        return true;
    }else{
        return false;
    }
}
const myBirthYear =checkLeapYear(2100);
console.log(myBirthYear);