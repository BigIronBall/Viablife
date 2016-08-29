var gulp = require('gulp'), //本地安装gulp所用到的地方
    cssmin = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    pngquant = require('imagemin-pngquant');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('cssmin', function () {
    gulp.src('css/*.css') //该任务针对的文件
    	.pipe(cssmin({
    		keepBreaks: true,
    		keepSpecialComments: '*'//保留浏览器前缀
    	}))
        .pipe(gulp.dest('temp/css')); //将会在src/css下生成index.css
});

//压缩html
gulp.task('htmlmin',function(){
	gulp.src('*.html')
		.pipe(htmlmin({
			removeComments: true,//清除HTML注释
	        collapseWhitespace: true,//压缩HTML
	        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
	        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
	        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
	        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	        minifyJS: true,//压缩页面JS
	        minifyCSS: true//压缩页面CSS
		}))
		.pipe(gulp.dest('dist/'));
});

//合并文件
gulp.task('concat',function(){
	gulp.src("temp/css/*.css")
		.pipe(concat('all.css'))//合并后的文件名
		.pipe(gulp.dest('dist/css'));
});

//压缩图片
gulp.task('imagemin', function () {
    gulp.src('images/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
        	optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            use: [pngquant()],
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        })))
        .pipe(gulp.dest('dist/images'));
});

//字体处理
gulp.task('fonts',function(){
	gulp.src('fonts/*')
		.pipe(gulp.dest('dist/fonts'));
})


//执行默认任务
gulp.task('default',['htmlmin','imagemin','cssmin','concat','fonts']);



