// Init packages
const autoprefixer = require('autoprefixer');
const { src, dest, watch, parallel, series} = require('gulp');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
/* const injectHTML = require('gulp-inject-in-html'); */

// file path vars
const files = {
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js',
    htmlPath: 'src/html/**/*.html'
}

// making tasks 
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write(''))
        .pipe(dest('dist/css')
    );
}

function jsTask(){
    return src(files.jsPath)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('dist/js')
    );
}

function imageminTask(){
    return src(['./src/img/**/*'])
        .pipe(imagemin())
        .pipe(dest('dist/Assets'))
}

/* function htmlTask() {
    return src(files.htmlPath)
      .pipe(injectHTML())
      .pipe(dest('src/'));
} */

function watchTask(){
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

exports.default = series(
    parallel(scssTask, jsTask),
    // cacheBustTask,
    imageminTask,
    watchTask
);