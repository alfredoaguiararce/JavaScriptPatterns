/* The User class is a JavaScript class that allows users to subscribe to events and trigger those
events to notify subscribers. */
class User {
    constructor() {
      this.listeners = {};
    }
  
    // Method to subscribe to events
    on(eventName, callback) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push(callback);
    }
  
    // Method to trigger events and notify subscribers
    trigger(eventName) {
      const eventListeners = this.listeners[eventName];
      if (eventListeners) {
        eventListeners.forEach(callback => callback());
      }
    }
  };
  
  const user = new User();
  
  const init = () => {
    // Subscribe to the 'login' event
    user.on('login', userLoggedIn);
  };
  
  const userLoggedIn = () => {
    console.log('User logged');
  };
  
  init();
  
  const login = () => {
    // Trigger the 'login' event
    user.trigger('login');
  };
  
  login();
  