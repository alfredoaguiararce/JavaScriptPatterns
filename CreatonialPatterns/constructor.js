/* The class "MyClass" has a constructor that sets a property and a method. */
class MyClass{
    constructor(prop){
        this.propiedad = prop;
        this.metodo = () => {
            // Method
        };
    };
};

const instance = new MyClass(1);
console.log("🚀 ~ file: constructor.js:11 ~ instance:", instance);

