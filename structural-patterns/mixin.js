/* The `let mixin` statement is creating an object called `mixin` that contains two methods: `saludar`
and `despedir`. */
let mixin = {
    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
    , despedir (){
        console.log(`Adios ${this.nombre}`);
    }
};


/* The class "Usuario" is a JavaScript class that represents a user with a name. */
class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    };
};

/* The code `Object.prototype.saludar= function(){
    console.log(this.nombre);
}` is adding a new method called `saludar` to the prototype of the `Object` class. This means that
all objects in JavaScript will now have access to this method. */
// Object.prototype.saludar= function(){
//     console.log(this.nombre);
// }

/* `Object.assign(Usuario.prototype, mixin);` is merging the properties and methods from the `mixin`
object into the `Usuario.prototype` object. This means that all instances of the `Usuario` class
will now have access to the `saludar` and `despedir` methods defined in the `mixin` object. */

Object.assign(Usuario.prototype, mixin);

const user = new Usuario('Alfredo');
user.saludar();