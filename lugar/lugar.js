const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir); // la funcion encodeURI codifica los espacios en Blanco ej: New York quedaria New%20York

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'X-RapidAPI-Key': 'e300768557msh97182b9c13ad113p1cee35jsn364c9d7a8c9e' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === "") {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.Results[12];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    // instance.get()
    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // })
    // .catch(err => {
    //     console.log('ERROR!!!!!', err);
    // })

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}