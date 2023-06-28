/* The code is creating a module called `Users` using an immediately invoked function expression
(IIFE). */
const Users = (() => {
    const recurso = 'https://jsonplaceholder.typicode.com/users';

    return{
        list : async () => {
            await fetch(recurso).then(x => x.json())
        }
        ,create : async() => {
            await fetch(recurso, 
                {type:'POST'
                , body: JSON.stringify(data)}.then(x => x.json))
        }
    }
})();

Users.list();