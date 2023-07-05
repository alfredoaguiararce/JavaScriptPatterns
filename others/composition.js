/**
 * The code defines three functions in JavaScript: greetings, goodbye, and sleep.
 */
const greetings   = name => console.log(`Hola! soy ${name}`);
const goodbye  = () => console.log(`Adios!`);
const sleep    = () => console.log(`💤`);

/* The class "Person" has methods for greetings, goodbye, and sleep. */
class Person{
    constructor(){
        this.name = 'Alfredo';
    }

    greetings(){
        greetings(this.name);
    };

    goodbye(){
        goodbye();
    };

    sleep(){
        sleep();
    };
};


/* The class "Robot" defines a robot named "Alfredo" with methods for greetings and saying goodbye. */
class Robot{
    constructor(){
        this.name = 'Skynet';
    }

    greetings(){
        greetings(this.name);
    };

    goodbye(){
        goodbye();
    };

};

/* The code is creating a new instance of the `Person` class called `person`. Then, it is calling the
`greetings()`, `goodbye()`, and `sleep()` methods on the `person` object. This will output the
following messages to the console: */
const person = new Person();
person.greetings();
person.goodbye();
person.sleep();

/* The code is creating a new instance of the `Robot` class called `robot`. Then, it is calling the
`greetings()` and `goodbye()` methods on the `robot` object. This will output the following messages
to the console: */
const robot = new Robot();
robot.greetings();
robot.goodbye();