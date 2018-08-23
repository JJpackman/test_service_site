const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');

gulp.task('copy', function() {
  gulp.src([
    config.src.img + '/**',
    config.src.fonts + '/**/*.{woff,woff2}'
  ], {
    base: 'src'
  })
    .pipe(gulp.dest(config.build.root))
});
