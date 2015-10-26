'use strict';

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import jscs from 'gulp-jscs';
import less from 'gulp-less';
import plumber from 'gulp-plumber';
import source from 'vinyl-source-stream';
import stylish from 'gulp-jscs-stylish';

const config = {
  dest: 'dist/js',
  vendors: [
    'react-dom',
    'react',
    'material-ui'
  ]
};

gulp.task('vendors', () => {
  var stream = browserify({
    debug: false,
    require: config.vendors
  });

  stream.bundle()
  .pipe(source('vendors.js'))
  .pipe(plumber())
  .pipe(gulp.dest(config.dest));

  return stream;
});

gulp.task('jscs', () => {
  gulp.src(['./src/**/*jsx', 'Gulpfile.babel.js'])
  .pipe(jscs())
  .pipe(plumber())
  .pipe(stylish());
});

gulp.task('app', ['jscs'], () => {
  var stream = browserify({
    entries: ['./src/app.jsx'],
    transform: [babelify],
    debug: false,
    extensions: ['.jsx'],
    fullPaths: false
  });

  config.vendors.forEach((vendor) => {
    stream.external(vendor);
  });

  return stream.bundle()
  .pipe(source('app.js'))
  .pipe(plumber())
  .pipe(gulp.dest(config.dest));

});

gulp.task('less', () => {
  return gulp.src('./less/main.less')
		.pipe(less())
    .pipe(plumber())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('browsersync', () => {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false,
    browser: ['google chrome']
  });
});

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.jsx'], ['app', browserSync.reload]);
});

gulp.task('default',['browsersync', 'vendors', 'app', 'watch'], () => {});
