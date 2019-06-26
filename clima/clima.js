const axios = require('axios');


const getClima = async(lat, long) => {

    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=2bded5ae35671b981d767a8372196028&units=metric`);
    return clima.data.main.temp;
}

module.exports = {
    getClima
}