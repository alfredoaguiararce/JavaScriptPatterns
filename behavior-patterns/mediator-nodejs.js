/* The code is creating an instance of the `EventEmitter` class from the `events` module in Node.js. */
const Emmiter = require('events');
const emmiter = new Emmiter();

/* The code is setting up an event listener for the event named 'event_1' using the `emitter.on()`
method. When the 'event_1' event is emitted using the `emitter.emit()` method, the provided callback
function `x => console.log(x)` will be executed. In this case, the callback function logs the value
of `x` to the console, which is an object `{ name: 'Alfredo' }`. */
emmiter.on('event_1', x => console.log(x));
emmiter.emit('event_1', { name : 'Alfredo'});
