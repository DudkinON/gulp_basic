'use strict';

module.exports = function () {
  G.gulp.task('clean', function () {
      return G.del([
          'build'
      ]);
  })
};