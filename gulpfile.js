var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var autoprefixer = require('autoprefixer');

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('styles', function () {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build'));
});

gulp.task('dev', ['clean'], function () {
    gulp.start('styles');
    gulp.watch('./css/**/*.css', ['styles']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('styles');
});