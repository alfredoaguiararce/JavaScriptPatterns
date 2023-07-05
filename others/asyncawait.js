// Función promisificada
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Datos';
        resolve(data);
      }, 1000);
    });
  }
  
  // Función que utiliza async/await
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      console.log('Datos recibidos:', data);
      await anotherAsyncTask(data);
      console.log('Tarea asíncrona completada.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Uso de la función fetchDataAsync
  fetchDataAsync();
  