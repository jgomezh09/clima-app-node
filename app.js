const axios = require('axios');
const lugar = require('./lugar/lugar');
const elclima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)


getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let clima = await elclima.getClima(coordenadas.lat, coordenadas.lng)
        return `el clima de ${direccion} es de ${clima}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}



getInfo(argv.direccion)
    .then(console.log)
    .catch(err => {
        console.log("Error ")
    })