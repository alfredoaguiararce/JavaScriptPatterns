/* This code is adding a new method called `log` to the `Object` prototype in JavaScript. This means
that all objects in JavaScript will now have access to this method. When called, the `log` method
will simply log the object to the console. */
Object.prototype.log = function () {
    console.log(this);
};

const x = { a: 1};

x.log();

if(!String.prototype.trim){
    String.prototype.trim = function(){
        try{
            return this.replace(/^\s+|\s+$/g, '');
        }
        catch(e){
            return this;
        };
    };
}


const y = "             alfredo          ".trim();
y.log();