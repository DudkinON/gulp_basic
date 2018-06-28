module.exports = function () {
    G.gulp.task('sass', function () {
        return G.gulp.src('app/css/app.scss')
            .pipe(G.gp.sourcemaps.init())
            .pipe(G.gp.sass())
            .on('error', G.gp.notify.onError({
                title: 'Style'
            }))
            .pipe(G.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'opera 12.1'
                ]}))
            .pipe(G.gp.sourcemaps.write())
            .pipe(G.gulp.dest('./build/assets/css'))
    });

};