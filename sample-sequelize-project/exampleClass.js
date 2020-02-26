class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.property1 = 'a string';
    }

    walk() {
        console.log(`${this._name} is walking.`)
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

class Admin extends User {
    constructor(name, age) {
        super(name, age);
        this.admin = true;
    }

    walk() {
        console.log(`Admin ${this._name} is walking.`)
    }

    run() {
        console.log(`Admin ${this._name} is so busy, ${this._name} is running.`)
    }
}

module.exports = { User, Admin };

// const user = new User('Bob', 45);
// user.walk();
// user.name='Steve';
// console.log(`Changed name to ${user.name}`);

// const admin = new Admin('Tom', 45);
// admin.walk();
// admin.name='Frank';
// console.log(`Changed name to ${admin.name}`);
// admin.run();
