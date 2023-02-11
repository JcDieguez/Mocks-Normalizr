const express = require('express');
const path = require('path');
const hbs = require('hbs');
const faker = require('faker');

const app = express();

// Configuración de Handlebars como motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para productos-test
app.get('/api/productos-test', (req, res) => {
  const productos = [];

  // Generar 5 productos de prueba
  for (let i = 0; i < 5; i++) {
    productos.push({
      nombre: faker.commerce.productName(),
      precio: faker.commerce.price(),
      foto: faker.image.imageUrl()
    });
  }

  // Renderizar la vista de productos con los datos de prueba
  res.render('productos', { productos });
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});