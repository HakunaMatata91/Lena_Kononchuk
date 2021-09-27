'use strict';

const {task} = require('gulp');
const {create} = require('browser-sync');
// const { require } = require('yargs');

let gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglifyjs'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith = require('gulp.spritesmith');

// gulp.task('hello', gulp.series(function () {
//     console.log("Hello World");
// }));

/*less*/
let to_less = done => {
    return gulp.src('app/less/**/*.less')
        .pipe(concat('main.css'))
        .pipe(less())
        .pipe(autoprefixer(['last 15 version', '>1%', 'ie 8', 'ie 7'], {cascade:true}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream()) +
        console.log('main.less c конвертирован и объеденины и успешно ковертирован с файлами css перемещен в папку app') +
        done();
};
/*less*/

/*Watch*/
let watch = () => {
    gulp.watch('./app/less/**/*.less', to_less);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
    console.log('Отслеживание файлов активировано');
};
/*Watch*/

/*browserSync*/
let browser_sync = done => {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
    });
    console.log('сервер запущен');
    done();
}
/*browserSync*/

/*script*/
let scripts = done => {
    return gulp.src([
            './app/libs/jquery/dist/jquery.min.js',
            './app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest('./app/js')) +
        console.log('js - файлы библиотек для FE успешно обьединенны и минифицированы') +
        done();
};
//*script*/

/*css libs*/
// let css_libs = done => {
//     return gulp.src('./app/css/libs.css')
//         .pipe(cssnano())
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('.app/css')) +
//         console.log('libs.css минифицирован')
//     done()
// };
/*css*/

/*optimize img*/
let img = done => {
    return gulp.src('./app/img/**/*')
        .pipe(cache(imagemin({
            interced: true,
            progressive: true,
            svgPlugins: [{
                remoweVievBox: false
            }],
            use: [pngquant]
        })))
        .pipe(gulp.dest('dist/img')) +
        console.log('изображение оптимизировано') +
        done();
};
/*opt*/

/*Build*/
let build = done => {
    let buildCss = gulp.src('./app/css/**/*')
        // './app/css/libs.min.css'  вставить после фикса выше
        .pipe(gulp.dest('dist/css')); //style to dist directory

    let buildFonts = gulp.src('./app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts')); // fonts to dist directory

    let buildJs = gulp.src('./app/js/**/*')
        .pipe(gulp.dest('dist/js')); // js to dist directory

    let buildLess = gulp.src('./app/less/**/*')
        .pipe(gulp.dest('dist/less')); // js to dist directory

    let buildHtml = gulp.src('./app/*.html')
        .pipe(gulp.dest('dist')); //Html to dist directory

    let buildVendore = gulp.src('./app/vendore/**/*')
        .pipe(gulp.dest('dist/vendore')); //Vendore to dist directory

    console.log('Проект сделан. Теперь можно залить его на сервер...');
    done();
};
/*Build*/

/*clear Del*/
let clean = done => {
    return del.sync('dist') +
        console.log('папка dist удалена...') +
        done();
};
/*clear del*/

/*clear cache if img in directory*/
let clear = done => {
    return cache.clearAll() + console.log("кеш очищен...") +
        done();
};
/*clear cache if img in directory*/

/*sprite for img*/
let sprite = ()=>{
    let spriteData = gulp.src('./app/sprite/*.png')
    .pipe(spritesmith({
        imgName: 'sptite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('./app/img/sprite'));
};
/*sprite for img*/
gulp.task('browser-sync', browser_sync);
gulp.task('less', to_less);
// gulp.task('css-libs', gulp.series(to_less, css_libs));
gulp.task('scripts', scripts);
gulp.task('build', gulp.parallel(clean, img, to_less, scripts, build));
gulp.task('clean', clean);
gulp.task('clear', clear);
gulp.task('img', img);
gulp.task('sprite', sprite);
// gulp.task('watch', gulp.parallel(browser_sync, to_less, scripts, watch)); //  
gulp.task('default', gulp.parallel(browser_sync, to_less, scripts, sprite, watch));