const { utils, apis, request } = require('./base')
const { JSDOM } = require("jsdom")
const isChecked = units => {
  const ids = units.map(unit => unit.unit_id)
  return new Set(ids).size === ids.length
}

;(async () => {
  console.log('Making messages.xlf...')
  require('child_process').spawn('npm', ['run', 'i18n'])
  const localSourcePath = `${__dirname}/../../ex/messages.xlf`
  const msgFile = await utils.readFile(localSourcePath, 'utf-8')
  const { document } = new JSDOM(msgFile, {contentType: "text/xml",}).window
  const units = Array.from(document.querySelectorAll('trans-unit')).map(v => {
    return {
      source: v.querySelector('source').innerHTML,
      unit_id: v.getAttribute('id'),
      line_number: +v.querySelector('context[context-type="linenumber"]').textContent,
      source_file: v.querySelector('context[context-type="sourcefile"]').textContent,
    }
  })
  if (!isChecked(units)) {
    return utils.exit('Failed. the locale serial number of the duplicate')
  }
  request({
    uri: apis.elements,
    method: 'POST',
    headers: await apis.makeHeader(),
    json: { units: units },
  })
  .then(() => utils.exit('Done.'))
  .catch(e => apis.catch(e))
  
})()

