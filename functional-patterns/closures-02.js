/**
 * The function `f` takes a parameter `x` and returns an anonymous function that logs "Rayos" followed
 * by the value of `x` when invoked.
 * @param x - 'Alfredo'
 * @returns The function `f` returns another function.
 */
const f = (x) => {
  return () => console.log(`Rayos ${x}`); 
};

f('Alfredo')();