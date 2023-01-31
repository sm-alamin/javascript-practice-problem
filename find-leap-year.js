function findLeapYear(years){
    let leapYears =[];
    for(let i = 1; i < years.length; i++){
        const index = i;
        const element = years[index];
        if((element % 4 === 0) && (element % 100 !== 0) || (element % 400 === 0 ) ) {
             leapYears.push(element);
        }
    }return leapYears;
}
const years = [2023, 2024, 2025, 2028, 2030];
const showLeapYear = findLeapYear(years);
console.log("The following years are leap year:", showLeapYear);