import Gulp from 'gulp';
import Async from 'gulp-sequence';

Gulp.task('build:development', (cb) => {
  Async('clean',
    ['js', 'json'],
    ['sass', 'html'],
    ['images'],
  cb);
});
