// .filter() = creates a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven); // isEven is passed as a callback

console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}