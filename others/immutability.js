// Creating an immutable object_1 with a property 'a' set to 1
const object_1 = {
    a: 1
};

// Creating object_2 by spreading the properties of object_1 and adding a new property 'c' set to 3
const object_2 = {
    ...object_1,
    c: 3
};

// Modifying object_1 by adding a property 'b' set to 2
// Note: This violates the concept of immutability
object_1.b = 2;

// Printing both object_1 and object_2
console.log(object_1, object_2);


/**
 * Comments:

The object_1 is initially created with a property a set to 1.
The object_2 is created by spreading the properties of object_1 and adding a new property c set to 3. This is possible because spreading creates a new object with the properties of the original object.
However, when object_1 is modified by adding a property b set to 2, it violates the concept of immutability. Modifying the object directly after its creation is not considered immutable.
The console.log statement prints both object_1 and object_2, showing the difference between them due to the modification of object_1.
 * 
 */