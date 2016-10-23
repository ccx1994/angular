/**
 * Created by Administrator on 2016/10/23.
 */
//var path = require('path');
var gulp = require('gulp');
//var conf = require('./conf');

var browserSync = require('browser-sync');
//var browserSyncSpa = require('browser-sync-spa');

gulp.task('serve',[],function(){
    browserSync.init({
        startPath:'/main.html',
        server: "./src"
    });

    //gulp.watch("src/**/*.html", []);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
});