const request = require('request-promise-native')

request({
  uri: 'http://127.0.0.1:3000/elements',
  method: 'GET',
  headers: {
    'User-Agent': 'request',
    'Content-Type': 'application/json',
  },
})
.then(res => {
  console.log(res)
})
.catch(e => {
  if (e.statusCode === 403) {
    return console.log('Authentication failed, try login.')
  }
  console.log('error: ', e.statusCode)
})

