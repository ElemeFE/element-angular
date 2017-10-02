const fs = require('fs')
const request = require('request-promise-native')
const util = require('util')
const exists = util.promisify(fs.exists)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const xml2js = require('xml2js')
const xmlParser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: false })
const parseString = util.promisify(xmlParser.parseString)
const jsonBuilder = new xml2js.Builder({ xmldec: {
  version:'1.0',
  'encoding': 'utf-8',
  'standalone': false,
}})

const findToken = async() => {
  const tokenFilePath = `${__dirname}/../../.git/authentication_token.txt`
  if (!await exists(tokenFilePath)) return
  return await readFile(tokenFilePath, 'utf-8')
}

(async() => {
  console.log('making messages file...')
  require('child_process').spawn('npm', ['run', 'i18n'])
  
  const token = await findToken()
  const localSourcePath = `${__dirname}/../../ex/messages.xlf`
  const saveUnits = async(next) => {
    const file = await readFile(localSourcePath)
    const result = await parseString(file)
    const units = result.xliff.file.body['trans-unit']
    result.xliff.file.body['trans-unit'] = units.map(unit => {
      const id = unit['$']['id']
      const nextUnit = next.find(u => u.unit_id === id) || { target: unit.source }
      return Object.assign({}, unit, { target: nextUnit.target })
    })
    const xml = jsonBuilder.buildObject(result)
    await writeFile(`${__dirname}/../../ex/locale/messages.en-US.xlf`, xml, 'utf-8')
  }
 
  request({
    uri: 'http://127.0.0.1:3000/elements',
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'per_page': '100000',
      'Content-Type': 'application/json',
      'authorization': `Token token=${token}`,
    },
  })
  .then(units => {
    const next = JSON.parse(units || '[]')
    if (!next || !next.length) {
      return console.log('completed.')
    }
    saveUnits(JSON.parse(units)).then(() => console.log('updated'))
  })
  .catch(e => {
    console.log(e)
    if (e.statusCode === 403) {
      return console.log('Authentication failed, try login.')
    }
    console.log('error: ', e.statusCode)
  })
  
})()

