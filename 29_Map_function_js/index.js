// map() --> function accepts a callback and applies that function to each element of an array, then return a new array
const dates = ["2026-20-03","2026-21-03","2026-22-03"];
const altdates = dates.map(aldate);
function aldate(element){
    const parts = element.split("-");   // split() --> function split the element from mentioned string to seperate parts and return as a array
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
console.log(altdates);