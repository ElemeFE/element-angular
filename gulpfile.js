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
  exampleDist: 'ex/dist',
  release: '/release/',    // tsc compiler
  bundle: '/bundle/',      // umd file
  temp: 'temp/',           // ngc compiler
  publish: '/dist/',       // publish
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

gulp.task('compile', gulp.series('lint', done => {
  exec(`${compilePath} -p ./tsconfig.json`, err => {
    err && console.log(err)
    done()
  })
    .stdout
    .on('data', data => console.log(data))
}))

gulp.task('compile:ex', done => exec(
  'webpack-dev-server --config build/webpack.dev.js --inline --progress --port 8080',
  err => {
    err && console.log(err)
    done()
  })
)

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

gulp.task('clean', () => del([PATHS.release, PATHS.temp, PATHS.bundle, PATHS.publish]))
gulp.task('clean:ex', () => del([PATHS.exampleDist]))

gulp.task('build', gulp.series('clean', 'compile', 'bundle'))
gulp.task('build:ex', gulp.series('clean:ex', 'compile:ex'))
gulp.task('build:watch', () => gulp.watch([PATHS.src],
  gulp.series('compile', 'bundle')))

gulp.task('default', gulp.series('build'))

