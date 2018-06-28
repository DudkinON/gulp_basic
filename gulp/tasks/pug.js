'use strict';

module.exports = function () {
    G.gulp.task('pug', function () {
        return G.gulp.src('app/template/*.pug')
            .pipe(G.gp.pug({ pretty: true }))
            .on('error', G.gp.notify.onError(function (error) {
                return {
                    title: "Pug",
                    message: error.message
                }
            }))
            .pipe(G.gulp.dest('build/'))
    });

};