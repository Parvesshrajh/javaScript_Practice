

class Animal{
    static isAlive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`The ${this.name} was running`);
    }
}
class Fish extends Animal{
    name = "fish";
}
class Hawk extends Animal{
    name = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.eat();
fish.sleep();
hawk.eat();
console.log(Hawk.isAlive); // When it was in static only it belongs to the class 
//                            so we can use class constructors to access it
rabbit.run();