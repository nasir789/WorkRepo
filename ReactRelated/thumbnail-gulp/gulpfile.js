var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
// var react = require('gulp-react');
// var concat = require('gulp-concat');

//what gulp will execute when we call it
//will run what name is, in instance called 'default' then run function

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: ['reactify'],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if (file) gutil.log('Recompiling' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build()
  bundler.on('update', build);
});
