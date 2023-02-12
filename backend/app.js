const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
// DB conection
const Conn = require('./db/conn');

Conn();

// Routes
const routes = require('./routes/router');

app.use('/api', routes);
app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');
});
//
