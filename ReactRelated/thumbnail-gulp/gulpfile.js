var gulp = require('gulp');
var gutil = require('gulp-util'); //debugger in console
var source = require('vinyl-source-stream');
var browserify = require('browserify'); //load order done correctly
var watchify = require('watchify'); //handle changes
var reactify = require('reactify');
var react = require('gulp-react');
var concat = require('gulp-concat');

//what gulp will execute when we call it
//will run what name is, in instance called 'default' then run function

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: []
  }))
  return gulp.src('src/**') //get every file inside src
    .pipe(react()) //turn jsx files to JS
    .pipe(concat('application.js')) // combine and name file 'application'
    .pipe(gulp.dest('./')) //save in current project directory
});
