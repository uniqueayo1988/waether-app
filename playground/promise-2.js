const request = require('request') 

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {

    const codedAddy = encodeURIComponent(address)
    console.log(codedAddy)

    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${codedAddy}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to google servers')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address') 
      } else if (body.status === 'REQUEST_DENIED') {
        reject('You are not authorised to make this request')
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geocodeAddress('akodu, mushin').then((location) => {
  console.log(location)
}, (err) => {
  console.log(err)
})
