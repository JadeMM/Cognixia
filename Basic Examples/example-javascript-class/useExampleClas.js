const { User, Admin} = require('./exampleClass');

//use example class
const user = new User('Bob', 45);
user.walk();
user.name='Steve';
console.log(`Changed name to ${user.name}`);

const admin = new Admin('Tom', 45);
admin.walk();
admin.name='Frank';
console.log(`Changed name to ${admin.name}`);
admin.run();