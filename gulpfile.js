const fs = require('fs');
const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', () => {
  fs.writeFile("autocommit_counter", "1", {flag: 'w+'}, () => {});
  gulp.watch('**/*.php', ['runtests']);
});

gulp.task(
  'runtests',
  shell.task(
    [
      './vendor/bin/phpspec run --no-interaction',
      'git add src/ spec/',
      'git commit -m "Auto-commit TDD #`cat autocommit_counter`"',
      'count=`cat autocommit_counter` && let "count++" && echo $count > autocommit_counter'
    ]
  )
);
