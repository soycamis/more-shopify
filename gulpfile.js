const gulp = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant');
const prefix = require('gulp-autoprefixer')


const input = './src/*.scss'
const output = './assets/'

gulp.task('prefix-sass', () => {
  gulp.src(input)
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(output))
})

gulp.task('imagemin', () => {
  gulp.src('./src/img/**')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./assets/'))
})

gulp.task('default', () => {
  gulp.watch('./src/*.scss', ['prefix-sass'])
})
