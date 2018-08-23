const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');

gulp.task('html', function() {
  return gulp.src(config.src.root + '/*.html')
    .pipe(plugins.posthtml([
      require('posthtml-include')()
    ]))
    .pipe(gulp.dest(config.build.root));
});

gulp.task('html:watch', function() {
  gulp.watch(config.src.root + '/*.html', ['html']);
});
