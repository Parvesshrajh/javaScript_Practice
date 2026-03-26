// where a variable is recognized and accessible (local vs global)

let x = 3; // Global scope

function fn1(){
    console.log(x);
}
fn1();
function fn2(){
    let x = 2;   // Local scope
    console.log(x);
}
fn2();
console.log(x);

{
    // Scope is compressed codes into this parethisis
}