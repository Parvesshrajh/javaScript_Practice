// .reduce() = reduce the elements of an array to a single value

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);

console.log(`${total.toFixed(2)}`);    // .toFixed() --> method returns the points of decimal after the number would be respect to mentioned.

function sum(accumulator, element){    // accumulator --> previous element in the array
    return accumulator + element;
}



// Example 2

const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getmax);
const minimum = grades.reduce(getmin);

console.log(maximum);
console.log(minimum);

function getmax(accumulator, element){
    return Math.max(accumulator,element);
}

function getmin(accumulator, element){
    return Math.min(accumulator,element);
}