const {src, series, watch, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('SCSS/**/*.scss')
    .pipe(sass())
    .pipe(dest('CSS'))
}

function watchTask() {
    watch(['SCSS/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)