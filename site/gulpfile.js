var gulp = require('gulp'),
    // sass modules
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
//  sassdoc = require('sassdoc'),
    // Js modules
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    stripdebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    // images optimization
    imagemin = require('gulp-imagemin'),
    // directory management
    newer = require('gulp-newer'),
    // local server
    browserSync = require('browser-sync').create();

var src = './src/',
    dist = './dist/',
    inputCss = src + 'scss/**/*.scss',
    outputCss = dist + 'css',
    inputHtml = src + '*.html',
    outputHtml = dist,
    inputJs = src + 'js/**/*.js',
    outputJs = dist + 'js',
    inputImg = src + 'img/**/*',
    outputImg = dist + 'img';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var filesToMove = [
  './src/jsFsForm/*.js',
  './src/fonts/*.*'
];
// Sass processing
gulp.task('sass', function () {
  return gulp
    .src(inputCss)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputCss))
    .pipe(browserSync.stream())
    // .pipe(sassdoc())
    // // Release the pressure back and trigger flowing mode (drain)
    // // See: http://sassdoc.com/gulp/#drain-event
    // .resume();
});
// Optimize images
gulp.task('imagemin', function() {
  return gulp.src(inputImg)
    .pipe(newer(outputImg))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(outputImg));
});
// HTML processing
gulp.task('html', ['imagemin'], function() {
  var page = gulp.src(inputHtml)
      .pipe(newer(outputHtml));

  // minify production code
  // if (!devBuild) {
  //   page = page.pipe(htmlclean());
  // }

  return page.pipe(gulp.dest(outputHtml));
});
// JavaScript processing
gulp.task('js', function() {

  var jsbuild = gulp.src(inputJs)
    .pipe(deporder())
    .pipe(concat('main.js'));

  // if (!devBuild) {
  //   jsbuild = jsbuild
  //     .pipe(stripdebug())
  //     .pipe(uglify());
  // }

  return jsbuild.pipe(gulp.dest(outputJs));

});
// move folders
gulp.task('move', function(){
  gulp.src(filesToMove, { base: './src/' })
  .pipe(gulp.dest('dist'));
});
// start local server
gulp.task('serve',function() {
    browserSync.init({
        server: dist
    });
    gulp
      .watch(inputCss, ['sass'])
      .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
      gulp.watch(inputJs, ['js']).on('change', browserSync.reload)
      gulp.watch(inputHtml, ['html']).on('change', browserSync.reload)
});

gulp.task('default', [ 'run', 'serve']);

gulp.task('run', ['html', 'sass', 'js', 'move']);


gulp.task('prod', function () {
  return gulp
    .src(inputCss)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(outputCss));
});
