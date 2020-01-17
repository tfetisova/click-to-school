const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    minifyjs = require('gulp-js-minify'),
    cleanCSS = require('gulp-clean-css'),
    rigger = require('gulp-rigger');

const path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        fonts: 'build/fonts/'

    },
    src: {
        html: 'src/**/*.html',
        scss: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*',
        fonts: 'src/fonts/**/*'
    },
    clean: './build/'
};
const htmlBuild = async function(){
    await gulp.src(path.src.html)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.html))
    //rigger это наш плагин, позволяющий использовать такую конструкцию для импорта файлов:
    // //= template/footer.html
    //пример:
    // <body>
    // //= template/header.html
    //
    // <section class="content">
    //   Content
    //   </section>
    //
    //   //= template/footer.html
    //   </body>
};

const scssBuild = ()=>{
    return gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 100 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path.build.css))

};

const jsBuild = ()=> {
    return gulp.src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(gulp.dest(path.build.js))
};

const cleanBuild = ()=>{
    return gulp.src(path.clean, {allowEmpty:true})
        .pipe(clean())
};
const jsMinify = ()=> {
        return gulp.src('build/js/script.js')
            .pipe(minifyjs())
            .pipe(gulp.dest(path.build.js));
};
const fontsBuild = async function() {
    await gulp.src(path.src.fonts)
      .pipe(gulp.dest(path.build.fonts))
};

const cssMinify =()=> {
    return gulp.src(path.build.css)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.build.css));
};
const imgMinify =()=>{
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
};
const watcher = ()=> {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
    gulp.watch(path.src.html, htmlBuild).on('change',browserSync.reload);
    gulp.watch(path.src.scss, scssBuild).on('change',browserSync.reload);
    gulp.watch(path.src.js, jsBuild).on('change',browserSync.reload);
    gulp.watch(path.src.js, jsMinify).on('change',browserSync.reload);
    gulp.watch(path.src.img, imgMinify).on('change',browserSync.reload);
};
gulp.task('build',gulp.series(
    cleanBuild,
    htmlBuild,
    fontsBuild,
    scssBuild,
    cssMinify,
    jsBuild,
    jsMinify,
    imgMinify,
    watcher

));