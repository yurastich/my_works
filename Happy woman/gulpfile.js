"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  fileinclude = require("gulp-file-include"),
  autoprefixer = require('gulp-autoprefixer');

gulp.task("css", function () {

  gulp.src([
      'dev/style/*.css',
      '!dev/style/style.css',
      '!dev/style/libs.css'
    ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./dev/style'))
    .pipe(gulp.dest('./prod/style'));

  gulp.src('dev/style/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./prod/style'));

});

gulp.task("js", function () {

  gulp.src([
      'dev/js/jquery-2.2.3.min.js',
      'dev/js/*.js',
      '!dev/js/global.js',
      '!dev/js/libs.js'
    ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./dev/js'))
    .pipe(gulp.dest('./prod/js'));

  gulp.src([
      'dev/js/global.js'
    ])
    .pipe(gulp.dest('./prod/js'));

});


gulp.task('html', function () {
  gulp.src(['dev/html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./prod/html'))

});

gulp.task("media", function () {

  gulp.src([
      'dev/img/*'
    ])
    .pipe(gulp.dest('./prod/img'));

  gulp.src([
      'dev/fonts/*'
    ])
    .pipe(gulp.dest('./prod/fonts'));

});

gulp.task("watch", function () {

  gulp.watch("dev/style/*/*.sass", ["css"]);
  gulp.watch("dev/style/main.sass", ["css"]);
  gulp.watch("dev/style/global.js", ["js"]);
  gulp.watch("dev/html/*.html", ["html"]);
  gulp.watch("dev/html/components/*.html", ["html"]);
  gulp.watch("dev/html/components/*/*.html", ["html"]);

});

gulp.task("default", [

  "css",
  "html",
  "js",
  "media",
  "watch"

]);

