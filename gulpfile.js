
const gulp = require ('gulp')
const gutil = require ('gulp-util')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const gulpexpress = require('gulp-express')


//	gulp.task('name', function(){
//		code here
//	})

gulp.task('log', ()=>{
	gutil.log('**== MY LOG TASK ==**')
})

gulp.task('es6', ()=>{
	return gulp.src('src/app.js')
	.pipe(babel({
		presets:['es2015']
	}))
	.pipe(gulp.dest('build'));
});

gulp.task('sassComp', ()=>{
	console.log('compiling sass')
	return gulp.src('src/sass/*')
	.pipe(sass())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('src/css'))
})

gulp.task('jsComp', ()=>{
	console.log('compiling JS')
	return gulp.src('src/js/*')
	.pipe(concat('mainJs.js'))
	.pipe(gulp.dest('src/mainjs'))
})

gulp.task('connect',()=>{
	console.log("we are running connect")
	gulpexpress.run(['app.js'])
})



gulp.task('watch',()=>{
	console.log("we are watching")
	gulp.watch(['src/app.js','index.html', 'src/sass/*','src/js/*'], ['es6','log','sassComp','jsComp'])
})

//everytime src/app.js changes, it will run the task 'es6'
gulp.task('default',['watch', 'es6','sassComp','jsComp', 'connect'])
