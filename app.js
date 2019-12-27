const request = require('request')
const yargs = require('yargs')

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

const codedAddy = encodeURIComponent(argv.a)
console.log(codedAddy)

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${codedAddy}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to google servers')
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address')
  } else if (body.status === 'OK') {
  // console.log(`Address: ${body.results[0].formatted_address}`)
  // console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
  // console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
  }
  // console.log(error, 'error...')
  // console.log(response, 'response...')
  // console.log(body, 'body...')
  // Pretty Print
  // console.log(JSON.stringify(error, undefined, 2))
})

// err - OVER_QUERY_LIMIT
// http://links.mead.io/api-fix
