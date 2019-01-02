
class Person {
    constructor(name = "Anonymous", age=0) {
        this.name = name;
        this.age = age;
    };

    getGreeting() {
        return `Hi, i am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;

    }

}

class Traveller extends Person {
    constructor(name,age,homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasLocation()) {
            greeting += ` I'm Visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
    

}

const me = new Traveller('George Alonge', 26, 'Abuja');
console.log(me);
console.log(me.getGreeting());

const other = new Traveller();
console.log(other);
console.log(other.getGreeting());

// const me = new Student('George Alonge', 5, 'Computer Science');
// console.log(me);
// console.log(me.getDescription());

// const other = new Student();
// console.log(other);
// console.log(other.getDescription());