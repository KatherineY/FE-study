import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')//打开ejs文件
	  .pipe(gulp.dest('server'))//把所有的模板文件拷贝到server目录下拷贝
	  .pipe(gulpif(args.watch,livereload()))//监听  是否是热更新
})
