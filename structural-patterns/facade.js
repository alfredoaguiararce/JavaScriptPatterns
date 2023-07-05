// Subsistema A
class SubsystemA {
    operationA() {
      console.log('Operación A del subsistema A');
    }
  }
  
  // Subsistema B
  class SubsystemB {
    operationB() {
      console.log('Operación B del subsistema B');
    }
  }
  
  // Subsistema C
  class SubsystemC {
    operationC() {
      console.log('Operación C del subsistema C');
    }
  }
  
  // Fachada
  class Facade {
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
      this.subsystemC = new SubsystemC();
    }
  
    operation() {
      this.subsystemA.operationA();
      this.subsystemB.operationB();
      this.subsystemC.operationC();
    }
  }
  
  // Uso de la fachada
  const facade = new Facade();
  facade.operation();
  