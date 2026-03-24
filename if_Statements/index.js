// IF Statement

let age = 18;

if (age >= 18) {
    console.log(`You are eligible to vote`);
}
else {
    console.log(`You are ineligible to vote`);
}

// Nested if Statements

let votarId = true;

if (age >= 18) {
    if (votarId) {
        console.log(`You are eligible to vote`);
    }
    else {
        console.log(`You must have votarId to vote`);
    }
}
else {
    console.log(`You are ineligible to vote`);
}

// Else if Statements

if (age >= 18) {
    console.log(`You are eligible to vote`);
}
else if (age == 0) {
    console.log(`You cannot be at 0 age`);
}
else {
    console.log(`You are ineligible to vote`);
}