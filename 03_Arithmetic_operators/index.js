/*
+ --> addition
- --> subraction
* --> multiplication
/ --> division
** --> exponent / power 
% --> remainder */

let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);

// increment operator ++
// decrement operator --

/*  Operator precedence
1) parenthisis
2) exponents
3) multiplication & division & modulo
4) addition & subraction */

let result = [1 + 2] * 3 + 4 ** 2;
console.log(result);