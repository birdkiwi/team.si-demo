var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    autoprefixer = require('autoprefixer'),
    postcssNested = require('postcss-nested'),
    postcssImport = require('postcss-import');

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('styles', function () {
    return gulp.src('./pcss/style.pcss')
        .pipe(sourcemaps.init())
        .pipe(postcss([ postcssImport(), postcssNested(), autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('dev', ['clean'], function () {
    gulp.start('styles');
    gulp.watch('./pcss/**/*.pcss', ['styles']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('styles');
});