// const apiConsulta = require('./consultas.service');

const consultaAPI = {};

// consultaAPI.getContent = (req, res) => {

//     apiConsulta.getNoticia((err, result) => {
//         if (err) {
//             return res.status(401).json({
//                 success: 0,
//                 message: 'Problemas en obtener registros controller 1'
//             })
//         }

//         if (!result || +result.length <= 0) {
//             return res.status(401).json({
//                 success: 0,
//                 message: 'Ploblema en obtener registos controller 2'
//             })
//         }

//         return res.json({
//             success: 1,
//             result
//         })
//     })
// }

consultaAPI.convertir = (req, res) => {
    const palabra = req.params.palabra;

    const morse = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..'
    }

    const alfabeto = {
        'a': '01100001',
        'á': '11100001',
        'b': '01100010',
        'c': '01100011',
        'd': '01100100',
        'e': '01100101',
        'f': '01100110',
        'g': '01100111',
        'h': '01101000',
        'í': '11101101',
        'j': '01101010',
        'k': '01101011',
        'l': '01101100',
        'm': '01101101',
        'n': '01101110',
        'ñ': '11110001',
        'o': '01101111',
        'ó': '11110011',
        'p': '01110000',
        'q': '01110001',
        'r': '01110010',
        's': '01110011',
        't': '01110100',
        'u': '01110101',
        'ú': '11111010',
        'ü': '11111100',
        'v': '01110110',
        'w': '01110111',
        'x': '01111000',
        'y': '01111001',
        'z': '01111010',
    }

    const arrayPalabra = palabra.split('');

    let salidaMorse = '';
    let salidaBinario = '';

    arrayPalabra.map((element) => {
        console.log(morse[element]);
        salidaMorse += morse[element];
        salidaBinario += alfabeto[element] + ' ';
    })

    return res.json({
        success: 1,
        morse: salidaMorse,
        binario: salidaBinario
    })
}

module.exports = consultaAPI;