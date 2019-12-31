const request = require('request')

var getWeather = (lat, lng, callbk) => {
  request({
    // url: 'https://api.darksky.net/forecast/77605a7383dc203f2e43d438c80823be/37.8267,-122.4233',
    url: `https://api.darksky.net/forecast/77605a7383dc203f2e43d438c80823be/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callbk(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callbk('Unable to fetch weather')
    } 
  }) 
}

module.exports.getWeather = getWeather
