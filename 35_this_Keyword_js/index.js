// this = reference to the object where this is used 
//        (the object depends on the immediate context)
//        person.name = this.name

const person ={
    name: "Parvesshrajh",
    hello : function(){
        console.log(`Hello ${this.name}!`);
    }
};

person.hello();