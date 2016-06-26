import Gulp from 'gulp';
import Async from 'gulp-sequence';

Gulp.task('build:production', (cb) => {
  process.env.NODE_ENV = 'production';
  Async('clean',
    ['js', 'json'],
    ['sass', 'html'],
    ['images'],
  cb);
});
