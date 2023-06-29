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


console.log(y);