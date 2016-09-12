///////////////////////////////////////////////
// NODE MODULES
// =========================

// GULP
const	GULP = require('gulp');

// CSS
const	SASS = require('gulp-sass');
const	MINCSS = require('gulp-clean-css');
const	PREFIXCSS = require('gulp-autoprefixer');

// JAVASCRIPT
const	JSUGLIFY = require('gulp-uglify');
const	JSCONCAT = require('gulp-concat');

// OTHER
const	WATCH = require('gulp-watch');
const	RENAME = require('gulp-rename');

// ROUTES

const PREPROCESSED = 'source/pre';
const PROCESSED = 'source/post';
const DEVELOPMENT = 'source/_dev';
const PRODREADY = 'source/_prod';
const PRODUCTION = 'html';
const SOURCE = '../src';
const APP = '../src/app';

// DEV COMPILE
///////////////////////////////////////////////

GULP.task('dev', function() {
	GULP.watch(PREPROCESSED + '/sass/**/*.sass', ['sass-dev']);
	GULP.watch(PREPROCESSED + '/js/**/*.js', ['js-dev']);
	GULP.watch(PREPROCESSED + '/assets/**/*', ['imagemin']);
	GULP.watch(PREPROCESSED + '/fonts/**/*', ['fonts']);
});

GULP.task('prod', function() {
	GULP.watch(PREPROCESSED + '/sass/**/*.sass', ['sass-prod']);
	GULP.watch(PREPROCESSED + '/js/**/*.js', ['js-prod']);
	GULP.watch(PREPROCESSED + '/assets/**/*', ['imagemin-prod']);
	GULP.watch(PREPROCESSED + '/fonts/**/*', ['fonts']);
});

GULP.task('app', function() {
	GULP.watch(PREPROCESSED + '/sass/**/*.sass', ['sass-app-main']);
	GULP.watch(PREPROCESSED + '/sass/**/*.sass', ['sass-app']);
	GULP.watch(PREPROCESSED + '/js/**/*.js', ['js-app']);
	GULP.watch(PREPROCESSED + '/assets/**/*', ['imagemin-app']);
	GULP.watch(PREPROCESSED + '/fonts/**/*', ['fonts-app']);
});

// SASS & CSS
///////////////////////////////////////////////

GULP.task('sass-dev', function() {
	GULP.src(PREPROCESSED + '/sass/**/*.sass')
		.pipe(SASS.sync().on('error', SASS.logError))
		.pipe(PREFIXCSS())
		.pipe(GULP.dest(PROCESSED + '/css'))
		.pipe(GULP.dest(DEVELOPMENT + '/css'));

	GULP.src(PREPROCESSED + '/css/**/*.css')
		.pipe(GULP.dest(DEVELOPMENT + '/css'))
		.pipe(GULP.dest(PRODUCTION + '/css'));
});

GULP.task('sass-prod', function() {
	GULP.src(PREPROCESSED + '/sass/**/*.sass')
		.pipe(SASS.sync().on('error', SASS.logError))
		.pipe(PREFIXCSS())
		.pipe(MINCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
		.pipe(RENAME({suffix: '.min'}))
		.pipe(GULP.dest(PRODREADY + '/css'))
		.pipe(GULP.dest(PRODUCTION + '/css'));

	GULP.src(PREPROCESSED + '/css/**/*.css')
		.pipe(GULP.dest(PRODREADY + '/css'))
		.pipe(GULP.dest(PRODUCTION + '/css'));
});

GULP.task('sass-app', function() {
	GULP.src([PREPROCESSED + '/sass/**/*.sass', '!' + PREPROCESSED + '/sass/app.sass'])
		.pipe(SASS.sync().on('error', SASS.logError))
		.pipe(PREFIXCSS())
		.pipe(MINCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
		.pipe(RENAME({suffix: '.min'}))
		.pipe(GULP.dest(PRODREADY + '/css'))
		.pipe(GULP.dest(PRODUCTION + '/css'))
		.pipe(GULP.dest(APP));
});

GULP.task('sass-app-main', function(){
	GULP.src(PREPROCESSED + '/sass/app.sass')
		.pipe(SASS.sync().on('error', SASS.logError))
		.pipe(PREFIXCSS())
		.pipe(MINCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
		.pipe(RENAME({suffix: '.min'}))
		.pipe(GULP.dest(PRODREADY + '/css'))
		.pipe(GULP.dest(PRODUCTION + '/css'))
		.pipe(GULP.dest(SOURCE));

	GULP.src(PREPROCESSED + '/css/**/*.css')
		.pipe(GULP.dest(SOURCE));
});

// JAVASCRIPT
///////////////////////////////////////////////

GULP.task('js-dev', function(){
	GULP.src([PREPROCESSED + '/js/**/*.js'])
		.pipe(JSCONCAT('app.min.js'))
		.pipe(GULP.dest(PROCESSED + '/js'))
		.pipe(GULP.dest(DEVELOPMENT + '/js'));
});

GULP.task('js-prod', function(){
	GULP.src(['source/js/**/*.js'])
		.pipe(JSCONCAT('*.js'))
		.pipe(JSUGLIFY())
		.pipe(RENAME('app.min.js'))
		.pipe(GULP.dest(PRODREADY + '/js'))
		.pipe(GULP.dest(PRODUCTION + '/js'));
});

GULP.task('js-app', function(){
	GULP.src(['source/js/**/*.js'])
		.pipe(JSCONCAT('*.js'))
		.pipe(JSUGLIFY())
		.pipe(RENAME('app.min.js'))
		.pipe(GULP.dest(PRODREADY + '/js'))
		.pipe(GULP.dest(PRODUCTION + '/js'))
		.pipe(GULP.dest(APP + '/js'));
});

// IMAGES
///////////////////////////////////////////////

GULP.task('imagemin', function(){
	GULP.src(PREPROCESSED + '/assets/images/**/*')
		.pipe(IMAGEMIN())
		.pipe(GULP.dest(DEVELOPMENT + '/assets/'))
		.pipe(GULP.dest(PRODUCTION + '/assets/images/'));
});

GULP.task('imagemin-prod', function(){
	GULP.src(PREPROCESSED + '/assets/images/**/*')
		.pipe(IMAGEMIN())
		.pipe(GULP.dest(PRODREADY + '/assets/'))
		.pipe(GULP.dest(PRODUCTION + '/assets/images/'));
});

GULP.task('imagemin-app', function(){
	GULP.src(PREPROCESSED + '/assets/images/**/*')
		.pipe(IMAGEMIN())
		.pipe(GULP.dest(PRODREADY + '/assets/'))
		.pipe(GULP.dest(PRODUCTION + '/assets/images/'))
		.pipe(GULP.dest(APP + '/assets/images/'));
});

// FONTS
///////////////////////////////////////////////

GULP.task('fonts', function(){
	GULP.src(PREPROCESSED + '/assets/fonts/**/*')
		.pipe(GULP.dest(PROCESSED + '/fonts/**/*'))
		.pipe(GULP.dest(DEVELOPMENT + '/fonts/**/*'))
		.pipe(GULP.dest(PRODREADY + '/fonts/**/*'))
		.pipe(GULP.dest(PRODUCTION + '/assets/fonts/**/*'))
		.pipe(GULP.dest(APP + '/assets/fonts/**/*'));
});
