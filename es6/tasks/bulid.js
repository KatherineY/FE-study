import gulp from 'gulp';
//任务之间的关联关系
import gulpSequence from 'gulp-sequence';

//顺序：清空--拷贝CSS--编译模板--执行脚本--serve放在最后执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
