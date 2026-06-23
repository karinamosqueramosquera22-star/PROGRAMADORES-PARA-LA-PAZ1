const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecut ndose en puerto 3000');
});
