var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof(a) === 'number' && typeof(b) === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 1500)
  })
}

// asyncAdd(5, 7).then((result) => {
//   console.log(result)
//   return asyncAdd(result, 33)   // chaining...
// }, (errorMessage) => {
//   console.log(errorMessage)
// }).then((res) => {
//   console.log(res)
// }, (errorMessage) => {
//   console.log(errorMessage)
// })

asyncAdd(5, 7).then((result) => {
  console.log(result)
  return asyncAdd(result, "33")
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey it worked')
//     // reject('Unable to fulfil promise')
//   }, 2500)
  
// })

// somePromise.then((message) => {
//   console.log('Success: ', message)
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage)
// })
