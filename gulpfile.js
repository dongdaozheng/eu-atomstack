const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp
    .src('scss/**/*.scss') // SCSS 文件路径
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets')); // 输出 CSS 文件路径
}

function watch() {
  gulp.watch('scss/**/*.scss', styles);
}

exports.default = gulp.series(styles, watch);
