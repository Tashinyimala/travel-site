const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

// Gulp watch task
gulp.task('watch', () => {
  notify: false,
    browserSync.init({
      server: {
        baseDir: 'app'
      }
    });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

// Gulp CSS reload/injection
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});
