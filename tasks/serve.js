var gulp = require('gulp');
var liveServer = require('live-server');
var config = require('../gulp.config')();
var connect = require('gulp-connect');
var path = require('path');

/* Start live server dev mode */
gulp.task('serve-dev', ['wiredep', 'tsc-app', 'watch-ts', 'watch-sass'], function () {
    //liveServer.start(config.liveServer.dev);
    connect.server({
      root: '',
      port: process.env.PORT || 5000, // localhost:5000
      livereload: false
    });
});

/* Start live server production mode */
gulp.task('serve-build', ['build'], function () {
  //  liveServer.start(config.liveServer.prod);
  connect.server({
    root: [__dirname],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});
