//服务器脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器
import args from './util/args';

gulp.task('serve',(cb)=>{
	if(!args.watch) return cb();
	
	var server=liveserver.new(['--harmony','server/bin/www']);
	server.start();
	
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);//通知服务器，文件发生了改变
	})
	
	//监听需要重启服务的文件
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()//重启服务
	});
})
