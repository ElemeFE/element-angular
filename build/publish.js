const ghpages = require('gh-pages')
const path = require('path')
const root = require('app-root-path').path
const pkg = require(`${root}/package.json`)

console.log('project publishing...')
ghpages.clean()
ghpages.publish(path.join(__dirname, '../dist'), {
  message: `publish: v${pkg.version}`,
}, err => console.log(`publish ${!err ? 'success' : 'failed' + err}`))
