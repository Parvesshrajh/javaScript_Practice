// static = keyword that defines properties or methods that belongs
//          to a class itself rather than the objects created from that
//          class(class owns anything static, not the object)

class User{
    static userCount = 0;
    constructor(name){
        this.userName = name;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users on the class`);
    }
}
const user1 = new User("Parvesshrajh");
const user2 = new User("JackieChan");
console.log(user1.userName);
console.log(user2.userName);
User.getUserCount();