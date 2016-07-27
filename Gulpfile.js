
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');
;
//var autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var input = 'resources/sass/**/*.scss';
var output = 'resources/css';

//var autoprefixerOptions = {
//  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
//};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
//    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
});

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('connect', function() {
  connect.server({
    port: 8888
  });
});

gulp.task("js", function(){

    var destDir = "./resources/js/";

    return browserify([
        "./resources/js/vendors/jquery.js",
//        "./resources/js/vendors/remodal.js",
        "./resources/js/vendors/responsive-nav.min.js"
    ])
        .bundle()
    .on('error', function(e){
        gutil.log(e);
    })
        .pipe(source("plugins.js"))
        .pipe(gulp.dest("./resources/js/"));
});

gulp.task('default', ['connect', 'sass', 'watch']);