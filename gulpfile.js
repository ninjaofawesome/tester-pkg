'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', ['sass'], function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


