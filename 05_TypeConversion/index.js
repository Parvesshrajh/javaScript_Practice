let age = window.prompt(`What is your age?`);
age = Number(age);          // Type Conversion
console.log(age, typeof age);
// why we convert it to Number because when window.prompt get any input it will get it as string input format.

let x  = "Pizza";
let y = "Pizza";
let z = "Pizza";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x); // NAN   Number   --> String cannot coverted to number so it remains with NAN.
console.log(y, typeof y); // Pizza String   --> String is String.
console.log(z, typeof z); // true  Boolean  --> The letters was present so it will remain true in boolean when the letters in non-presence it will be false in boolean.