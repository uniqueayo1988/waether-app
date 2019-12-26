const request = require('request')

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=4%20ibidun%20street%20ojuelegba',
  json: true
}, (error, response, body) => {
  console.log(error, 'error...')
  console.log(response, 'response...')
  console.log(body, 'body...')
  // Pretty Print
  console.log(JSON.stringify(error, undefined, 2))
})

// err - OVER_QUERY_LIMIT
// http://links.mead.io/api-fix
