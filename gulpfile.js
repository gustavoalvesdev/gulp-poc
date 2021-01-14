const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('minifyImage', () => {
    return new Promise(function(resolve, reject) {
        gulp.src('src/imagem.jpg')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/'));
            resolve();
    });
});