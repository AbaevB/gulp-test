const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');

const styles = () => {
    return src('src/css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(dest('dist/ccss'))
}

const htmlMinify =  () => {
   return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
}


exports.styles = styles
exports.htmlMinify = htmlMinify
