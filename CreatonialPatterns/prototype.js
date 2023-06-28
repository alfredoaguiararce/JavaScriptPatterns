/* The code is creating an object called `dog` with two properties: `name` and `bark`. The `name`
property is set to the string 'Kilterrier', and the `bark` property is a function that logs a
message to the console using the `name` property. */
const dog = {
    name : 'Kilterrier'
    , bark : function () {
        console.log(`Woof, i'm a ${this.name}`)
    }
};

const Kilterrier = Object.create(dog);

Kilterrier.bark();
Kilterrier.name = 'Super dog';
Kilterrier.bark();