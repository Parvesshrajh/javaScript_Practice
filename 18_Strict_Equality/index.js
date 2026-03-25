/*
1) =  assignment operator
2) == comparision operator
3) === strict equality operator (compare if values & datatypes are equal)
4) !=  inequality 
5) !== strict inequality
*/

const PI = 3.14;
if(PI === "3.14"){
    console.log(true);
}
else{
    console.log(false);   // Else statement will be execute because === (strict operator) check the datatypes so if must be false
}