/**
 * The code defines a class called Mackbook with a method that returns a price, and a function called
 * memmory that modifies the Mackbook object to increase its price by 100.
 * @returns The first console.log statement will return 1000, which is the original price of the
 * Mackbook.
 */
/* The Mackbook class has a method called precio() that returns the price of a Mackbook, which is 1000. */
class Mackbook{
    precio(){
        return 1000;
    }
};

/**
 * The function `memmory` takes a `mac` object and modifies its `precio` method to add 100 to the
 * original price.
 * @returns The code snippet does not explicitly return anything.
 */
const memmory = (mac) => {
    const mackbook = mac.precio();
    mac.precio = function () {
        return mackbook + 100;
    }
};

const mackbook = new Mackbook();
console.log(mackbook.precio());

memmory(mackbook)
console.log(mackbook.precio());