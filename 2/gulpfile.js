var gulp = require('gulp');
less = require('gulp-less');
var jsdoc = require('gulp-jsdoc3');
babel = require('gulp-babel');


gulp.task('less', function(){//задача для галпа, перевод файлов less в css
    gulp.src('src/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});
gulp.task('babel', function(){// задача для галпа, перевод файлов из ES6 в ES5
    gulp.src('src/js/scroll.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
});
gulp.task('jsdoc', function () {//задача для галпа создания jsdoc
    gulp.src(['README.md', 'src/js/scroll.js'])
        .pipe(jsdoc())
});
