const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();


const styles = () => {
    return src('src/css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            cascade: false
        }) )
        .pipe(cleanCss({
           level: 2 
        }))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())

}

const htmlMinify =  () => {
   return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())

}

const watchFiles = () => {
    browserSync.init({
       server:  {
        baseDir: 'dist'
       } 
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/css/**/*.css', styles)

exports.styles = styles
exports.htmlMinify = htmlMinify
exports.default = series(htmlMinify, styles, watchFiles )