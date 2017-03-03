var browserify = require('browserify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var os = require('os');
var reactify = require('reactify');
var liveReload = require('gulp-livereload');
var open = require('gulp-open');
var less = require('gulp-less');
var path = require('path');

var browser = os.platform() === 'linux' ? 'google-chrome' : (
    os.platform() === 'darwin' ? 'google chrome' : (
        os.platform() === 'win32' ? 'chrome' : 'firefox'
    )
);

gulp.task('browserify', function() {
    return browserify('./src/js/app.js')
    .transform('babelify')
    .bundle()
    .pipe(source('app.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(liveReload());
});

gulp.task('less', function () {
    return gulp.src('./src/css/style.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function(){
    gulp.src('./src/*.html').pipe(gulp.dest('dist'));
    gulp.src('./src/css/**/*.*').pipe(gulp.dest('dist/css'));
    gulp.src('./src/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
    gulp.src('./src/images/*.*').pipe(gulp.dest('dist/images'));
    gulp.src('./src/files/*.*').pipe(gulp.dest('dist/files'));
    gulp.src('./src/js/vendor/*.*').pipe(gulp.dest('dist/js/vendor'));

});

gulp.task('open', function(){
    var options = {
        uri: 'http://localhost'+':'+'5000',
        app: browser
    };
    gulp.src(__filename)
        .pipe(open(options));
});

gulp.task('default',  ['browserify', 'less', 'copy', 'open'], function() {
    liveReload.listen();
    gulp.watch('./src/**/*.*', ['browserify', 'less', 'copy']);
});
