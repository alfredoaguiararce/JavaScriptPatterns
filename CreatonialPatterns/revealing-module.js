// Revealing result js
/* The code is creating a module pattern using an immediately invoked function expression (IIFE). */
const result = (()=>{
    const x = {}

/* The `return` statement is returning an object with two properties: `a` and `b`. */
    return{
        a: () => console.log(x),
        b: (key, value) => x[key] = value
    }
})();

/* The code is calling the functions `result.a()` and `result.b()` in a specific sequence. */
result.a();
result.b("Id", 1);
result.b("Name", "Alfredo");
result.a();