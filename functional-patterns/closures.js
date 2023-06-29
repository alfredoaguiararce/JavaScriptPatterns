/**
 * The function `f` takes a parameter `x` and returns an anonymous function that logs "Rayos" followed
 * by the value of `x` when invoked.
 * @param x - 'Alfredo'
 * @returns The function `f` returns another function.
 */
/* The code is declaring a constant variable `y` and assigning it the value `'lele'`. */
const y = 'lele';

/**
 * The function `f` logs the values of `x` and `y` to the console, but `y` is not defined.
 */
const f = () => {
    const x = 'lala';
    console.log(x,y);
};

const g = () => {
    const a = 'lala';
    return () => {
        const z = 'lolo';
        console.log(a, y, z);
    }
};

/* `f();` is invoking the function `f`. When `f` is invoked, it logs the values of `x` and `y` to the
console. In this case, `x` is not provided as an argument, so it will be undefined. `y` is a
constant variable declared outside of the function, so it will be accessible and its value will be
logged to the console. */
f();
/* The code `g()();` is invoking two functions in sequence. */
g()();

console.log(y);