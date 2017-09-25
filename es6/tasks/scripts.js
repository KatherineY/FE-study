import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';//自动刷新的包
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//对文件重命名
import uglify from 'gulp-uglify';//压缩文件
import {log,color} from 'gulp-util';
import args from './util/args';//对命令行参数进行解析

gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])
	  .pipe(plumber({
	  	errorHandle:function(){
	  		
	  	}
	  }))
	  .pipe(named())
	  .pipe(gulpWebpack({
	  	module:{
	  		loaders:[{
	  			test:/\.js$/,
	  			loader:'babel-loader'
	  		}]
	  	}
	  }),null,(err,stats)=>(
	  	log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
	  		chunks:false
	  	}))
	  ))
	  .pipe(gulp.dest('server/public/js'))
	  .pipe(rename({
	  	basename:'cp',
	  	extname:'.min.js'
	  }))
	  .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
	  .pipe(gulp.dest('server/public/js'))
	  //监听文件  自动刷新
	  .pipe(gulpif(args.watch,livereload()))
})
