import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{//创建任务
	return gulp.src('app/**/*.css')
	  .pipe(gulp.dest('server/public'))
})
