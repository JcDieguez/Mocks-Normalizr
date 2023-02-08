const express = require('express');
const mongoose = require('mongoose');
const { normalize, schema } = require('normalizr');

mongoose.connect('mongodb://localhost/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Estructura 
const Message = mongoose.model('Message', new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}));

const app = express();

// Esquema de los mensajes
const messageSchema = new schema.Entity('messages', {}, {
  idAttribute: 'id'
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find({});
    const normalizedData = normalize(messages, [messageSchema]);
    res.send(normalizedData);
  } catch (error) {
    res.status(500).send({ error: 'Error al recuperar mensajes' });
  }
});

app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000!');
});