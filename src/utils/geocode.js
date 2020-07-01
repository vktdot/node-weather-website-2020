const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmlrYXN0b3JvbnRvMSIsImEiOiJja2J0ZGlvcHkwOHV6MndsNmxwem1sOWY2In0.e9PCbcL6fjxSd8uWqRDU0Q&limit=1`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services')
        } else if (body.features.length === 0) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode