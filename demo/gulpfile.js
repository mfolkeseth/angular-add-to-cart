var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');


gulp.task('default', ['js', 'sass', 'watch']);

gulp.task('js', function() {
  gulp.src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      '../angular-add-to-cart.js',
      'app/**/*.js'
      ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function() {
  gulp.src('scss/default.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch('../angular-add-to-cart.js', ['js']);
  gulp.watch(['app/**/*.js'], ['js']);
});
