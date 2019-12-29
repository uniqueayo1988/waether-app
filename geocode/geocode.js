const request = require('request')

const geocodeAddress = (address, callback) => {
  const codedAddy = encodeURIComponent(address)
  console.log(codedAddy)

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${codedAddy}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to google servers')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
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
}

module.exports = {
  geocodeAddress
}

// module.exports.geocodeAddress = geocodeAddress
