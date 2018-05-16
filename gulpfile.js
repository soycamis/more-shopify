const gulp = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");

const input = "./sass/*.scss";
const output = "./assets/";

gulp.task("sass", () => {
  return gulp.src(input)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task("default", () => {
  gulp.watch("./sass/*.scss", ["sass"]);
});