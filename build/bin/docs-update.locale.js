const { utils, request, apis } = require('./base')

;(async() => {
  console.log('Updating...')
  const docPath = `${__dirname}/../../ex/docs/`
  const findDocs = async(file) => {
    if (!file.endsWith('json')) return false
    const docStr = await utils.readFile(docPath + file, 'utf-8')
    const doc = JSON.parse(docStr)
    if (!doc.attrs || !doc.attrs.length || !doc.attrs[0].notes) return false
    return doc
  }
  const resetDocsDir = async() => {
    const files = await utils.readDir(docPath)
    utils.spawn('rm', ['-rf', `${docPath}en-US`])
    utils.spawn('mkdir', [`${docPath}en-US`])
    files.forEach(file => {
      utils.spawn('cp', [`${docPath}${file}`, `${docPath}en-US/${file}`])
    })
  }
  const saveUnits = async(next) => {
    await resetDocsDir()
    let unitMap = {}
    next.forEach(unit => {
      if (!unitMap[unit.source_file]) return unitMap[unit.source_file] = [unit]
      unitMap[unit.source_file].push(unit)
    })
    
    let native
    for (let file of Object.keys(unitMap)) {
      native = await findDocs(file)
      if (!native) return
      unitMap[file].forEach(unit => {
        const index = native.attrs.findIndex(attr => attr.name === unit.unit_id.split('&&')[1])
        if (index < 0) return
        native.attrs[index] = Object.assign({}, native.attrs[index], {
          notes: unit.target || native.attrs[index].notes,
        })
        utils.writeFile(`${docPath}en-US/${file}`, JSON.stringify(native), 'utf-8')
      })
    }
  }
 
  request({ uri: apis.docs, method: 'GET', headers: await apis.makeHeader() })
  .then(units => {
    const next = JSON.parse(units || '[]')
    if (!next || !next.length) return utils.exit('Done. nothing has changed.')
    saveUnits(next).then(() => utils.exit('Done.'))
  })
  .catch(e => apis.catch(e))
  
})()
