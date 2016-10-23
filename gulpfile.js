var gulp =require("gulp");//创建 gulp模块
var uglify=require("gulp-uglify");//创建js混淆压缩 模块
var minify_css =require("gulp-minify-css");//创建 css混淆压缩模块
var gulp_concat = require('gulp-concat'); //创建 文件合并模块
var wrench = require('wrench');


/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 *  yj－－将以js|coffee结尾的文件过滤出来
 *  yj－－ 除了gulp/dev-template中的文件，其余所有的以js｜coffee结尾的文件全部倒入
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    if (!(file.indexOf('dev-template') == 0)) {
        require('./gulp/' + file);
    }
});


// test任务一
gulp.task('task1',function(){
    console.log("task1 done");
});

// test任务二
gulp.task('task2',['task1'],function(){
    console.log("task2 done");
});