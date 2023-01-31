function convertIntoMin(hour){
    const convertIntoMin = hour * 60 ;
    return convertIntoMin;
}
const studyHour =24;
const conversion = convertIntoMin(studyHour);
console.log(conversion, "minutes");