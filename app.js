// const yargs = require('yargs')
// const geocode = require('./geocode/geocode')

// const argv = yargs.options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

// // err - OVER_QUERY_LIMIT
// // http://links.mead.io/api-fix

// const request = require('request')

request({
  url: 'https://api.darksky.net/forecast/77605a7383dc203f2e43d438c80823be/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  } else {
    console.log('Unable to fetch weather')
  } 
})
