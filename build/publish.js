const ghpages = require('gh-pages')
const path = require('path')
const root = require('app-root-path').path
const pkg = require(`${root}/package.json`)

ghpages.clean()
ghpages.publish(path.join(__dirname, '../dist'), {
  message: `publish: v${pkg.versio}`,
}, (err) => {
  err && console.log(`publish error: ${err}`)
  console.log('publish success')
})