import express from 'express';
import faker from 'faker';

const app = express();


// Productos generados al azar con faker
app.get('/api/productos-test', (req, res) => {
  const productos = [];
  for (let i = 0; i < 5; i++) {
    productos.push({
      nombre: faker.commerce.productName(),
      precio: faker.commerce.price(),
      foto: faker.image.image()
    });
  }
  res.json(productos);
});


app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));