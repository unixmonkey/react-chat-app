'use strict';

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import jscs from 'gulp-jscs';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import source from 'vinyl-source-stream';
import stylish from 'gulp-jscs-stylish';

const config = {
  vendors: [
    'react-dom',
    'react',
    'jquery',
    'materialize-js',
    'flux'
  ],
  fonts: [
    './node_modules/materialize-css/font/roboto/*.{ttf,woff,woff2,eof,svg}'
  ]
};

gulp.task('fonts', function() {
  gulp.src(config.fonts)
    .pipe(plumber())
    .pipe(gulp.dest('dist/font'));
});

gulp.task('vendors', () => {
  var stream = browserify({
    debug: false,
    require: config.vendors
  });

  gulp.src('node_modules/pickadate/lib/picker.js').pipe(gulp.dest('node_modules/materialize-css/bin'));

  stream.bundle()
  .pipe(plumber())
  .pipe(source('vendors.js'))
  .pipe(gulp.dest('dist/js'));

  return stream;
});

gulp.task('jscs', () => {
  gulp.src(['./src/**/*.{js,jsx}', 'Gulpfile.babel.js'])
  .pipe(plumber())
  .pipe(jscs())
  .pipe(stylish());
});

gulp.task('app', ['jscs'], () => {
  var stream = browserify({
    entries: ['./src/app.jsx'],
    transform: [babelify],
    debug: false,
    extensions: ['.jsx', '.js'],
    fullPaths: false
  });

  config.vendors.forEach((vendor) => {
    stream.external(vendor);
  });

  return stream.bundle()
  .pipe(plumber())
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist/js'));

});

gulp.task('sass', () => {
  return gulp.src('./scss/main.scss')
    .pipe(plumber())
		.pipe(sass().on('error', sass.logError))
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
  gulp.watch(['./src/**/*.{js,jsx}'], ['app', browserSync.reload]);
  gulp.watch(['./scss/**/*.scss'], ['sass', browserSync.reload]);
});

gulp.task('default',['fonts', 'sass', 'vendors', 'app', 'watch'], () => {});
