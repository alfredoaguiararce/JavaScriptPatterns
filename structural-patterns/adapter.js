/* The class Api is a JavaScript class that has a method called operation which takes in a URL,
options, and a verb and returns a fetch request based on the verb. */
class Api{
    constructor(){    
            this.operation = function( url, opts, verb){
                switch (verb) {
                    case 'GET':
                    // Return fetch
                
                    case 'POST':
                    // Return fetch
                
                    default:
                        return;
                };
        };
    };
};

/* The class Api2 is a JavaScript class that provides methods for making HTTP GET and POST requests
using the axios library. */
class Api2{
    constructor(){
        this.get = function(url, opts){
            // return axios.get
        };
        this.post = function(url, opts){
            // return axios.post
        };
    };
};

/* The ApiAdapter class is a JavaScript class that acts as an adapter for making GET and POST requests
using the Api2 class. */
class ApiAdapter{
    constructor(){
        const api2 = new Api2();
        switch (verb) {
            case 'GET':
                return api2.get(url, opts);
            case 'POST':
                return api2.post(url, opts);
            default:
                return;
        };
    };

};

/* The code is creating instances of the `Api`, `Api2`, and `ApiAdapter` classes and calling their
respective methods. */

const api = new Api();
api.operation('www.google.com.mnx', {q: 1}, 'GET');

const api2 = new Api2()
api2.get('www.google.com.mnx', {q: 1})

const adapter = new ApiAdapter();
adapter.operation('www.google.com.mnx', {q: 1}, 'GET')