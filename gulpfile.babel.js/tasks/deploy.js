import Gulp  from 'gulp';
import { execSync } from 'child_process';

Gulp.task('deploy', ['prod'], () => {
  execSync(['bash gulpfile.babel.js/lib/deploy.sh'], { stdio: 'inherit' });
});