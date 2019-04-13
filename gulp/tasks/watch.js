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

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptRefresh');
  });
});

// Gulp CSS reload/injection
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});

// Gulp Javascript refresh
gulp.task('scriptRefresh', ['scripts'], () => {
  browserSync.reload();
});
