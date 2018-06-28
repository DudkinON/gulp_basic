'use strict';

module.exports = function () {
  G.gulp.task('watch', function () {
      G.gulp.watch('./app/css/*.scss', G.gulp.series('sass'));
      G.gulp.watch('./app/template/*.pug', G.gulp.series('pug'));
  });
};