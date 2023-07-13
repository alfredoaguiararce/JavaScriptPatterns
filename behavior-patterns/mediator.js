class Mediator {
    constructor() {
      this.colleagues = [];
    }
  
    // Método para registrar colegas (subscriptores)
    register(colleague) {
      this.colleagues.push(colleague);
      colleague.setMediator(this);
    }
  
    // Método para enviar un mensaje a todos los colegas excepto al remitente
    send(message, sender) {
      for (const colleague of this.colleagues) {
        if (colleague !== sender) {
          colleague.receive(message);
        }
      }
    }
  }
  
  class Colleague {
    constructor(name) {
      this.name = name;
      this.mediator = null;
    }
  
    // Método para establecer el mediador
    setMediator(mediator) {
      this.mediator = mediator;
    }
  
    // Método para enviar un mensaje a través del mediador
    send(message) {
      console.log(`${this.name} sending message: ${message}`);
      this.mediator.send(message, this);
    }
  
    // Método para recibir un mensaje enviado por otro colega
    receive(message) {
      console.log(`${this.name} received message: ${message}`);
    }
  }
  
  // Creación del mediador
  const mediator = new Mediator();
  
  // Creación de los colegas
  const colleague1 = new Colleague('Colleague 1');
  const colleague2 = new Colleague('Colleague 2');
  const colleague3 = new Colleague('Colleague 3');
  
  // Registro de los colegas en el mediador
  mediator.register(colleague1);
  mediator.register(colleague2);
  mediator.register(colleague3);
  
  // Envío de mensajes entre los colegas
  colleague1.send('Hello everyone!');
  colleague2.send('Hi there!');
  