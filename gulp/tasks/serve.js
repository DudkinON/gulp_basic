'use strict';

module.exports = function () {
  G.gulp.task('serve', function () {
      G.bs.init({
          open: false,
          server: 'build'
      });
      G.bs.watch('build', G.bs.reload);
  });
};