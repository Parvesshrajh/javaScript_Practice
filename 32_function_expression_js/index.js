// function declaration = define a reusable block of code that performs a specific task
{
    function hello() {
        console.log(`hello`);
    }

    hello();
}
// function expression = a way to define functions as values or variables

const hello = function () {
    console.log(`Hello`);
}

hello();

// setTimeout() --> setTimeout is a function used to delay a function call setTimeout(function, delay)

setTimeout(function () {
    console.log(`Hello`);
}, 3000)   // 3000 milliseconds


// function expression examples

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function sqaure(element) {
    return Math.pow(element, 2);
});

console.log(squares);

// function expression examples

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNums);

// function expression examples 

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);

// In javascript function expression can be done with varible and also pass as arguement

/* used in 
1. Callbacks in asynchronous operations
2. Higher-Order functions
3. Closures
4. Event Listeners
*/