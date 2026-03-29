// object = A collection of related properties and/or methods can 
//          represent real world objects(people, products, places)
//          object = { key : value;
//                     function ()}

const person1 = {
    firstName: "Sponge",
    lastName: "bob",
    age: 30,
    isEmployed: true,
    selfintro: function () {
        console.log(`Hi I am ${this.firstName} ${this.lastName} !`);
    }
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.selfintro();