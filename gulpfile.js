const gulp = require('gulp')
const batch = require('gulp-batch')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const gutil = require('gulp-util')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const minifyCSS = require('gulp-csso')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const browserify = require('browserify')
const babelify = require('babelify')
const es2015 = require('babel-preset-es2015')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()


gulp.task('pug', function(){
  return gulp.src('templates/page/*.pug')
    .pipe(plumber({errorHandler: notify.onError({
        message: "<%= error.message %>",
        title: "Template compilation"
      })}))
    .pipe(pug({
      basedir: '.'
    }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream())
})

gulp.task('scss', function(){
  return gulp.src('css/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError({
        message: "<%= error.message %>",
        title: "CSS preprocessing"
      })}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer({browsers: ['last 3 version']})]))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream({match: '**/*.css'}))
})

gulp.task('img', function(){
  return gulp.src('img/**/*.jpg|jpeg|png|svg')
    .pipe(gulp.dest('./build/img'))
})

gulp.task('js', () => {
  browserify('./js/main.js')
    .transform(babelify.configure({ presets: [es2015] }))
    .on('error', notify.onError({
        message: "<%= error.message %>",
        title: "Babelify JS"
      }))
    .bundle()
    .on('error', notify.onError({
        message: "<%= error.message %>",
        title: "JS compilation"
      }))
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('about-page-js', () => {
  browserify('./js/about.js')
    .transform(babelify.configure({ presets: [es2015] }))
    .on('error', notify.onError({
        message: "<%= error.message %>",
        title: "Babelify JS"
      }))
    .bundle()
    .on('error', notify.onError({
        message: "<%= error.message %>",
        title: "JS compilation"
      }))
    .pipe(source('./about.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('thank-you-page-js', () => {
  browserify('./js/thankYouPage.js')
    .transform(babelify.configure({ presets: [es2015] }))
    .on('error', notify.onError({
        message: "<%= error.message %>",
        title: "Babelify JS"
      }))
    .bundle()
    .on('error', notify.onError({
        message: "<%= error.message %>",
        title: "JS compilation"
      }))
    .pipe(source('./thankYouPage.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('serve', function() {

    browserSync.init({
        server: "./build",
        open: false,
    })

    gulp.watch("css/**/*.scss", ['scss'])
    gulp.watch("js/components/*.js", ['js','about-page-js','thank-you-page-js'])
    gulp.watch("js/main.js", ['js'])
    gulp.watch("js/about.js", ['about-page-js'])
    gulp.watch("js/thankYouPage.js", ['thank-you-page-js'])
    gulp.watch("templates/**/*.pug", ['pug'])
    gulp.watch('img/**/*', browserSync.reload)
})

gulp.task('default', [ 'build', 'serve' ])
gulp.task('build', [ 'thank-you-page-js', 'about-page-js', 'pug', 'scss', 'js', 'img' ])
