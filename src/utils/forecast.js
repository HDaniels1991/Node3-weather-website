const request = require('request');

const forecast = (lon, lat, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=21e15ef787e642bfc8cb60252c00a158&query=${lon},${lat}&units=f`;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another Search', undefined);
        } else {
            callback(undefined, 
                `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip * 100}% chance of rain.`  
            )
        }
    })
};

module.exports = forecast;