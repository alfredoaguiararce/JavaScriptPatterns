/* The Suma class in JavaScript allows for chaining multiple sum operations on a given value. */
class Suma {
    constructor(v = 0){
        this.val = v;
    };

    suma(v) {
        this.val += v;
        return this;
    };
};

const valor = new Suma(10);

valor.suma(10)
.suma(10)
.suma(10)
.suma(10);
console.log("🚀 ~ file: chain-of-responsability.js:18 ~ valor:", valor)

