const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8c2c94fe702f38a9873af2ffb78bc5bc&query=${latitude},${longitude}&units=m`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.current
            callback(undefined, `${data.weather_descriptions}. It is currently ${data.temperature} degrees and feels like ${data.feelslike} degrees`)
        }
    })
}

module.exports = forecast