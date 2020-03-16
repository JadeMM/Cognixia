//set up standard js class
class User {
    //constructors
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.property1 = 'a string';
    }

    //useful method    
    walk() {
        console.log(`${this._name} is walking.`)
    }

    //getters
    get name() {
        return this._name;
    }

    //setters
    set name(name) {
        this._name = name;
    }
}

//extend js class
class Admin extends User {
    //get parent class props
    constructor(name, age) {
        super(name, age);
        this.admin = true;
    }

    //override parent function
    walk() {
        console.log(`Admin ${this._name} is walking.`)
    }

    //create new function
    run() {
        console.log(`Admin ${this._name} is so busy, ${this._name} is running.`)
    }
}

module.exports = { User, Admin };


