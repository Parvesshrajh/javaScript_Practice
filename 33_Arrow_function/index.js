// arrow function =  a concise way to write function expressions good for simple functions that you use only once (Parameters) => some code

const hello = () => console.log(`Hello`);
hello();

// example 2

const person = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}  
person("Parvesshrajh", 19);

// example 3

setTimeout(() => {
    console.log(`Hello`);
}, 3000);

// example 4

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element)=> Math.pow(element,2));
const evenNums = numbers.filter((element)=> element % 2 === 0);
const total = numbers.reduce((accumulator, element)=> accumulator + element);
console.log(squares, evenNums, total);