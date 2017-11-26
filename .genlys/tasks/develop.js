var gulp = require('gulp'),
    config = require('../config'),

    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    babel = require("gulp-babel"),

    browserSync = require("browser-sync"),
    reload = browserSync.reload;


gulp.task('dev', [
    'view',
    'script',
    'style',
    'font',
    'image'
]);

gulp.task('view', function () {
    gulp.src(config.path.app.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(config.path.dev.html)) //Бросим их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('script', function () {
    gulp.src(config.path.app.scripts) //Найдем наш main файл
        // TODO: minimize js
        .pipe(gulp.dest(config.path.dev.js)) //Бросим готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('style', function () {
    gulp.src(config.path.app.stylus) //Выберем наш landing.scss
        .pipe(stylus())
        .pipe(concat('style.css'))
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cleanCSS()) //Сожмем
        .pipe(gulp.dest(config.path.dev.css)) //И в build
        .pipe(reload({stream: true}))
});

gulp.task('image', function () {
    gulp.src(config.path.app.images) //Выберем наши картинки
        .pipe(gulp.dest(config.path.dev.images)) //И бросим в build
});

gulp.task('font', function () {
    gulp.src(config.path.app.fonts)
        .pipe(gulp.dest(config.path.dev.fonts))
});

