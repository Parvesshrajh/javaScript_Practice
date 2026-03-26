let fruits = ["apple",1,"mango"];
console.log(fruits);
// In javascript array which stores a set of datas in it.

// Array Methods
fruits.push("coconut"); // Adds at the last index of the array
fruits.pop(); // remove the last index element from the array
fruits.unshift("mango"); // add at the first index of the array
fruits.shift();
console.log(fruits.length); // returns the length of element from the array
fruits.indexOf("apple"); // returns the index of the given element

// for each loop for an array
for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse();
console.log(fruits);