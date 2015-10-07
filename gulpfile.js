// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

//Css
gulp.task('css', ['less'], function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});

// Compile Less
gulp.task('less', function() {
	return gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('src/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('assets/js'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/less/*.less', ['css']);
});

// Default Task
gulp.task('default', ['css', 'scripts']);
// Build All
gulp.task('build', ['default']);