global.G = {
    path: {
        task: require('./gulp/paths/tasks')
    },
    del: require('del'),
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create()
};

G.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

G.gulp.task('default',  G.gulp.series(
    'clean',
    G.gulp.parallel(
        'sass',
        'pug'
    ),
    G.gulp.parallel(
        'watch',
        'serve'
    )
));