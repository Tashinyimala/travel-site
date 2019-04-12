const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const cssvar = require('postcss-simple-vars');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');

gulp.task('styles', () => {
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, mixins, cssvar, nested, hexrgba, autoprefixer]))
    .on('error', errorInfo => {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
