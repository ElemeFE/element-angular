const { utils, apis, request } = require('./base')

const isChecked = units => {
  const ids = units.map(unit => unit.unit_id)
  return new Set(ids).size === ids.length
}
;(async () => {
  console.log('Uploading docs...')
  
  const docPath = `${__dirname}/../../ex/docs/`
  const files = await utils.readDir(docPath)
  const findDocs = async(file) => {
    if (!file.endsWith('json')) return []
    const docStr = await utils.readFile(docPath + file, 'utf-8')
    const doc = JSON.parse(docStr)
    if (!doc.attrs || !doc.attrs.length || !doc.attrs[0].notes) return []
    return doc.attrs.map(attr => ({
      source: attr.notes,
      source_file: file,
      unit_id: `${file}&&${attr.name}`
    }))
  }
  let units = []
  for (let file of files) {
    units = units.concat(await findDocs(file) || [])
  }
  if (!isChecked(units)) {
    return utils.exit('Failed. the locale serial number of the duplicate')
  }
  request({
    uri: apis.docs,
    method: 'POST',
    headers: await apis.makeHeader(),
    json: { units: units },
  })
  .then(() => utils.exit('Done.'))
  .catch(e => apis.catch(e))
  
})()

