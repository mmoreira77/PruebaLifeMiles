const pool = require('../../config/db');

const api = {};

api.getNoticia = async(callBack) => {

    console.log('Servicio');
    console.log(process.env.BD_HOST);

    let consulta = `SELECT * FROM noticias ORDER BY created DESC`;

    await pool.query(
        consulta, [],
        (err, result, fields) => {
            if (err) {
                console.log(err);
                err = { error: 'Error en obtener registros service 1' };
                return callBack(err);
            }

            if (+result.length <= 0) {
                err = { error: 'No se encuentran registros a mostrar service 2' };
                return callBack(err);
            }

            return callBack(null, result);
        }
    );
}

module.exports = api;