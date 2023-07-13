/* The code is creating a JavaScript module called `Commander`. It is using an immediately invoked
function expression (IIFE) to define a private variable `commands` and a public method `run`. */
const Commander = (() => {
    const commands = {
        buy: (car) => {
            console.log(`Buy a car : ${car}`);
        },
        sell: (x) => {
            console.log(`Sell a car _ ${car}`);
        }
    };

    return{
        run: (command, args) => {
            if(!commands[command]){
                console.log(`There's not command called ${command}`);
                return;
            }

            commands[command](args);
        }
    };
})();


Commander.run("buy", "Mazda");
Commander.run("invalid comman", "Mazda");