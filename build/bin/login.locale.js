const { utils, request, gitFolderPath, apis } = require('./base')
const npmConfigArgv = JSON.parse(process.env.npm_config_argv).remain

if (!npmConfigArgv) {
  return utils.exit('Failed. the email or password is required.')
}
const [email, password] = npmConfigArgv
if (!email || !password) {
  return utils.exit('Failed. the email or password is required.')
}

const saveToken = async(token) => {
  const tokenFile = `${gitFolderPath}authentication_token.txt`
  const gitSourceIsExist = await utils.exists(tokenFile)
  gitSourceIsExist && await utils.unlink(tokenFile)
  utils.writeFile(tokenFile, token)
}

(async () => {
  const gitFolderIsExist = await utils.exists(gitFolderPath)
  if (!gitFolderIsExist) return utils.exit('Failed. git folder not found.')
  request({
    uri: apis.sessions,
    method: 'POST',
    headers: await apis.makeHeader(),
    json: { email, password },
  })
  .then(({ authentication_token }) => {
    saveToken(authentication_token)
    .then(() => utils.exit('Authentication succeeded. token saved.'))
  })
  .catch(e => apis.catch(e))
})()
