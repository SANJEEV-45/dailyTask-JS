class User {
    static numberOfUsers = 0;
    constructor(Name, age) {
        this.Name = Name;
        this.age = age;
        User.numberOfUsers++;
    }
    login() {
        return ` Hi ${this.Name}, You are logged in`;
    }
    logout() {
        return `${this.Name}, You are logged out.`;
    }
}
let userOne = new User("sanjeev", 23);
let userTwo = new User("Rohit", 36);
console.log(userOne.Name);
console.log(User.numberOfUsers);

let str = new String("KKR");
console.log(str.charAt(2));

class awayUser extends User {
    constructor(
        Name,
        age // (sending the data to the sub class)
    ) {
        super(Name, age);
        this.Name = Name;
        this.age = age;
    }
    message() {
        return "I am from the inherited class called User";
    }
    login() { //overriding
        console.log(`hi ${this.Name}`);
        return this;
    }
}

let awayUser1 = new awayUser("Virat", 18);
console.log(awayUser1.Name);
console.log(awayUser1.login().message());
console.log(awayUser1);

//Prototype
/* Assume you don't have access to add a function to object
here u can use the prototype obj to add a function and access the class members */

const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return this.firstName + this.lastName;
    };
};

Person.prototype.age = 23;
Person.prototype.printInfo = function () {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.age);
};

const person1 = new Person("sanjeev", "gopi", 10);
person1.printInfo();
