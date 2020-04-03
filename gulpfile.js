// Init packages
const autoprefixer = require('autoprefixer');
const { src, dest, watch, parallel, series} = require('gulp');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const server = require('browser-sync').create();

// file path vars
const files = {
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js',
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

// Loading the new version of the file
/* const cbString = new Date().getTime();

function cacheBustTask(){
    return src(['./src/index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('dist')
    );
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