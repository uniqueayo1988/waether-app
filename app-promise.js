const yargs = require('yargs')
const axios = require('axios')

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv

var codedAddy = encodeURIComponent(argv.a)
var geocodeUrl = `http://map.googleapis.com/maps/api/geocode/json?address=${codedAddy}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'REQUEST_DENIED') {
    throw new Error('You are not authorised to use the server')
  }

  var lat = response.data.results[0].geometry.location.lat
  var lng = response.data.results[0].geometry.location.lng
  var weatherUrl = `https://api.darksky.net/forecast/77605a7383dc203f2e43d438c80823be/${lat},${lng}`
  console.log(response.data.results[0].formatted_address)

  return axios.get(weatherUrl)
}).then((response) => {
  var temperature = response.data.currently.temperature
  var apparentTemperature = response.data.currently.apparentTemperature
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)
}).catch((err) => {
  if (err.response) {
    console.log(err.response.statusText)
  } else {
    console.log(err.message)
  }
})
