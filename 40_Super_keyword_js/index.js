// super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} is moving in ${speed} speed/ms`);
    }
}
class Rabbit extends Animal {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;
        super.move(runspeed);
    }
}

const rabbit = new Rabbit("BugsBunny", 10, 500);
console.log(rabbit.name + " " + rabbit.age + " " + rabbit.runspeed);