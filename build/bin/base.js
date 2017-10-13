const fs = require('fs')
const childProcess = require('child_process')
const promisify = require('util').promisify
const request = require('request-promise-native')
const gitFolderPath = `${__dirname}/../../.git/`
const tokenFilePath = gitFolderPath + 'authentication_token.txt'

const utils = {
  exists: promisify(fs.exists),
  unlink: promisify(fs.unlink),
  writeFile: promisify(fs.writeFile),
  readFile: promisify(fs.readFile),
  readDir: promisify(fs.readdir),
  promisify,
  spawn: childProcess.spawn,
  exit: msg => {
    console.log(msg)
    childProcess.spawn('node', ['-e', 'process.exit(35);'])
  }
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
  docs: 'http://api.wittsay.cc/v1/docs',
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
      return console.log('Authentication failed, try run "npm run login [email] [pass]".')
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
