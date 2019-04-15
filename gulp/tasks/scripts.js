const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', ['modernizer'], callback => {
  webpack(require('../../webpack.config.js'), (error, stats) => {
    if (error) {
      console.log(error.toString());
    }

    console.log(stats.toString());
    callback();
  });
});
