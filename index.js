require('dotenv').config();
const express = require('express');

const app = express();

const apiConsultasRuoter = require('./apis/consultas/consultas.router');

app.use(express.json());
app.use('/api/api', apiConsultasRuoter);

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
})
