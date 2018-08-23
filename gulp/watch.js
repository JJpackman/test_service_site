const gulp = require('gulp');
const run = require('run-sequence');

gulp.task('watch', function() {
  run(
    'html:watch',
    'styles:watch',
    'scripts:watch',
    'images:watch',
    'webp:watch',
    'sprite:watch'
  );
});
