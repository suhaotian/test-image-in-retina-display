var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload=browserSync.reload;
minifyhtml=require('gulp-minify-html'),
gulp.task('sync', function () {
  browserSync({
    server:{
      baseDir:'./'
    },
    //open:false,
    port:8000
  })
});
gulp.task('html',function(){
    return gulp.src('./src/html/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('./'))
})
gulp.task('default',['html','sync'], function () {
  gulp.watch('*.html',['html',browserSync.reload]);
});
