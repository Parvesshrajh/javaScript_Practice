// Callback - A function that is passed as an arguement to another function
/*
  used to handle asynchronous operations:
  1) Reading a file
  2) Network requests
  3) Interacting with databases
*/
hello(goodbye);
function hello(callback){
    console.log(`hello`);
    callback();
}
function goodbye(){
    console.log(`goodbye`);
}

// Example 2
sum(displayConsole, 5, 5);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}