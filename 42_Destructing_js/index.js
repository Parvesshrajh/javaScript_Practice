// Destructing = extract values from arrays and objects,
//               then assign them to variables in a convenient way
//               [] = to perform array destructuring
//               {} = to perform object destructuring

// example 1

let a = 1;
let b = 2;

[a, b] = [b, a] // left side of [] --> used to destructuring the element where its
// gone to swap to a new element b,a format
console.log(a,b);


// example 2

const color = ["red", "green", "blue", "black", "white"];
[color[0],color[4]] = [color[4],color[0]];
console.log(color);

// example 3

const colors = ["red", "green", "blue", "black", "white"];

const [first , second, third, ...extra] = colors; //...rest parameter

console.log(first+" "+second+" "+third+" "+extra);

// example 4

const person1 = {
    firstName : "Rajini",
    lastName :"Kanth",
    age : 50,
    job : "Actor",
}

const person2 = {
    firstName : "kamal",
    lastName : "Hassan",
    age : "55",
    job : "Actor",
}

const {firstName, lastName, age, job} = person1;  // Extracting values from the object

console.log(firstName+lastName+" "+age+" "+job);

// example 5

function displayPerson({firstName, lastName, age, job}){ // Destructure in function parameters
    console.log(`name: ${firstName+lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);