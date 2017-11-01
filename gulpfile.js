const gulp = require('gulp')
const del = require('del')
const webpack = require('webpack')
const path = require('path')
const cache = require('gulp-cached')
const tslint = require('gulp-tslint')
const exec = require('child_process').exec
const argv = require('yargs')
  .boolean('failOnError')
  .default('failOnError', false)
  .argv

const compilePath = /^win/.test(process.platform)
  ? 'node_modules\\.bin\\ngc.cmd'
  : './node_modules/.bin/ngc'
const PATHS = {
  src: ['src/**/*.ts', '!src/**/*.spec.ts', '!ex/**/*.ts'],
  templates: ['src/**/*.html'],
  release: 'release/',    // tsc compiler
  bundle: 'bundle/',      // umd file
  temp: 'temp/',           // ngc compiler
  publish: 'dist/',       // publish
  spec: ['src/**/*.ts', 'test/{util,mock}/*.ts'],
  typings: 'typings/index.d.ts',
  tsInline: 'temp/inline/',
}

gulp.task('lint', () => gulp.src(PATHS.spec)
  .pipe(cache('lint'))
  .pipe(tslint({ formatter: 'prose' }))
  .pipe(tslint.report({
    emitError: argv.failOnError,
    summarizeFailureOutput: true,
  })))

gulp.task('compile', done => {
  exec(`${compilePath} -p ./tsconfig.json`, err => err ? console.log(err) : done())
    .stdout
    .on('data', data => console.log(data))
})

gulp.task('styles', done => {
  const source = path.join(__dirname, './node_modules/element-ui/lib/theme-chalk/')
  const target = path.join(__dirname, './theme/')
  exec(`cp -R  ${source} ${target}`, err => err ? console.log(err) : done())
    .stdout
    .on('data', data => console.log(data))
})

gulp.task('bundle', done => {
  webpack({
    devtool: 'source-map',
    resolve: { extensions: ['.js'] },
    entry: path.join(__dirname, PATHS.release, 'index.js'),
    output: {
      path: path.join(__dirname, PATHS.bundle),
      filename: 'element-angular.js',
      libraryTarget: 'umd',
    },
    externals: [/^\@angular\//, /^rxjs\//],
  }, err => {
    err && console.log(`Webpack Error: ${err}`)
    done()
  })
})

gulp.task('clean', () => del([PATHS.release, PATHS.temp, PATHS.bundle]))
gulp.task('clean:ex', () => del([PATHS.publish]))

gulp.task('build', gulp.series('clean', 'lint', 'compile', 'bundle', 'styles'))
gulp.task('build:watch', () => gulp.watch([PATHS.src], gulp.series('compile', 'bundle')))

gulp.task('default', gulp.series('build'))

