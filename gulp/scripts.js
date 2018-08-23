const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');

gulp.task('scripts', function() {
  gulp.src(config.src.js + '/**/*.js')
    .pipe(plugins.concat('script.js'))
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.build.js))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.build.js));
});

gulp.task('scripts:watch', function() {
  gulp.watch(config.src.js + '/**/*.js', ['scripts']);
});
