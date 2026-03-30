// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading / writing a property

class Rectange {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }


}
const rectangle = new Rectange(1000000,10);

console.log(rectangle.width);
console.log(rectangle.height);

// example 2

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstname = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastname(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastname = newLastName;
        }
        else {
            console.error("last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative Number");
        }
    }

    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
}

const person = new Person("Rajini", "kanth", 50);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);