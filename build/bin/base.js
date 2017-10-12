const fs = require('fs')
const promisify = require('util').promisify
const request = require('request-promise-native')
const gitFolderPath = `${__dirname}/../../.git/`
const tokenFilePath = gitFolderPath + 'authentication_token.txt'

const utils = {
  exists: promisify(fs.exists),
  unlink: promisify(fs.unlink),
  writeFile: promisify(fs.writeFile),
  readFile: promisify(fs.readFile),
  promisify,
}

const token = {
  path: tokenFilePath,
  get: async() => {
    if (!await utils.exists(tokenFilePath)) return ''
    return await utils.readFile(tokenFilePath, 'utf-8')
  }
}

const apis = {
  sessions: 'http://api.wittsay.cc/v1/sessions',
  elements: 'http://api.wittsay.cc/v1/elements',
  makeHeader: async() => {
    return {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'per-page': '100000',
      'authorization': `Token token=${await token.get()}`,
    }
  },
  catch: e => {
    if (e.statusCode === undefined) {
      return console.log('Failed, server error.')
    }
    if (e.statusCode === 403) {
      return console.log('Authentication failed, try run "npm run locale:login".')
    }
    console.log('error: ', e.statusCode)
  }
}


module.exports = {
  apis,
  utils,
  request,
  gitFolderPath,
  token,
}
