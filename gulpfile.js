const gulp = require("gulp");
const sass = require("gulp-sass");
//compile scss into css
function style() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"));
}
function watch() {
  gulp.watch("src/scss/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;
