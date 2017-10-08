const fs = require('fs')
const util = require('util')
const request = require('request-promise-native')
const npmConfigArgv = JSON.parse(process.env.npm_config_argv).remain
const exists = util.promisify(fs.exists)
const unlink = util.promisify(fs.unlink)
const writeFile = util.promisify(fs.writeFile)
const gitFolderPath = `${__dirname}/../../.git/`
if (!npmConfigArgv) {
  return console.warn('failed. the email or password is required.')
}
const [email, password] = npmConfigArgv
if (!email || !password) {
  return console.warn('failed. the email or password is required.')
}
(async () => {
  const gitFolderIsExist = await exists(gitFolderPath)
  if (!gitFolderIsExist) {
    return console.warn('failed. .git folder not found.')
  }
  const saveToken = async(token) => {
    const tokenFile = `${gitFolderPath}authentication_token.txt`
    const gitSourceIsExist = await exists(tokenFile)
    gitSourceIsExist && await unlink(tokenFile)
    writeFile(tokenFile, token)
  }
  
  request({
    uri: 'http://api.wittsay.cc/v1/sessions',
    method: 'POST',
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
    },
    json: { email, password },
  })
  .then(({ authentication_token }) => {
    saveToken(authentication_token)
    .then(() => console.log('Authentication succeeded. token saved.'))
  })
  .catch(e => {
    if (e.statusCode === undefined) {
      return console.log('failed, server error.')
    }
    if (e.statusCode === 403) {
      return console.log('Authentication failed, try again.')
    }
    console.log('error: ', e.statusCode)
  })
})()
