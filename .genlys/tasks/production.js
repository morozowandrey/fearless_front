var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    filter = require('gulp-filter'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),

    config = require('../config');


gulp.task('font:production', function () {
    gulp.src('dev/fonts/**')
        .pipe(gulp.dest(config.path.production.fonts));
});
gulp.task('img:production', function () {
    gulp.src('dev/images/**')
        .pipe(gulp.dest(config.path.production.images));
});
gulp.task('view:production', function () {
    gulp.src('dev/views/**')
        // .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.path.production.views));
});

gulp.task('compress:production', function () {
    var jsFilter = filter('**/*.js', {restore: true});
    var cssFilter = filter('**/*.css', {restore: true});
    var htmlFilter = filter('**/*.html', {restore: true});
    var notIndexFilter = filter(['**/*.*', '!**/*.html'], {restore: true});

    return gulp.src('dev/index.html')
        .pipe(useref())

        .pipe(jsFilter)
        .pipe(uglify({mangle: false}))
        .pipe(jsFilter.restore)


        .pipe(cssFilter)
        .pipe(cssFilter.restore)


        .pipe(htmlFilter)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(htmlFilter.restore)


        .pipe(notIndexFilter)
        .pipe(rev())
        .pipe(notIndexFilter.restore)

        .pipe(revReplace())

        .pipe(gulp.dest(config.path.production.main));
});


gulp.task('production', [
    'view:production',
    'compress:production',
    'font:production',
    'img:production',
])