const ghpages = require('gh-pages')
const path = require('path')
const root = require('app-root-path').path
const pkg = require(`${root}/package.json`)
const npmMessage = process.env.npm_config_message

if (!npmMessage || npmMessage === '%s') {
  return console.warn('add commit msg: --m=""')
}
const message = `Doc: publish - v${pkg.version} ${npmMessage}`

console.log('project publishing...')
console.log(`commit msg: ${message}`)
ghpages.clean()
ghpages.publish(path.join(__dirname, '../dist'), { message },
    err => console.log(`Publish ${!err ? 'success' : 'failed' + err}`))
