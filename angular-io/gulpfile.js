var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('app/*.ts')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});