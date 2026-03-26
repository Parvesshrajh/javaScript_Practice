// .forEach() --> array was passed to this function which categorize like (element, index, array)
// element -  elements in the array 
// index - the index of the element
// array - the address of the array

let numbers = [1,2,3,4,5];
numbers.forEach(double);
function double(element, index, array){
    array[index] = element * 2;
}
console.log(numbers);