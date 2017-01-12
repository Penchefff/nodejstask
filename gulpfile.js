
// require
var	gulp		= require('gulp'),
	browserSync	= require('browser-sync'),
	runSequence	= require('run-sequence'),
	del			= require('del'),
	$			= require('gulp-load-plugins')(/*{ lazy: false }*/)
;


var SRC		= 'src/',
	DST		= 'dist/',
	LIB		= 'src/lib/',
	PATH	= {
		SASS	: { DST: 'css'		, SRC: [ 'sass/*', 'sass/**/*' ] },
		JS		: { DST: 'js/app.js', SRC: [ 'app/*.js', 'app/**/*.js' ], LIB: [ LIB + '*.js' ] },
		TPL		: { DST: 'tpl'		, SRC: [ 'app/*.html', 'app/**/*.html' ] },
	},
	
	LIBS	= [
		{ BASE: 'https://code.jquery.com/'													, FILES: [ 'jquery-2.2.1.min.js' ] },
		{ BASE: 'https://code.angularjs.org/1.5.0/'											, FILES: [ 'angular.min.js', 'angular-sanitize.min.js', 'angular-messages.min.js' ] },
		{ BASE: 'https://raw.githubusercontent.com/angular-ui/ui-router/0.2.18/release/'	, FILES: [ 'angular-ui-router.min.js' ] },
		{ BASE: 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.19.1/'			, FILES: [ 'select.min.js' ] },
	]
;


// Prepend SRC
for(var i in PATH){ for(var p in PATH[i].SRC){ PATH[i].SRC[p] = SRC + PATH[i].SRC[p]; } }


// =================================== //
// ============= INSTALL ============= //
// =================================== //

gulp.task('install', [ 'install.clean', 'install.jslibs' ]);

gulp.task('install.clean', function(callback)
{
	return del(LIB, callback);
});

gulp.task('install.jslibs', function(callback)
{
	for(i = 0; i < LIBS.length; i++)
	{
		$.remoteSrc(LIBS[i].FILES, { base: LIBS[i].BASE }).pipe(gulp.dest(LIB));
	}
});

gulp.task('install.jslibs-debug', function(callback)
{
	return $.remoteSrc([ 'angular.js', 'angular.min.js.map' ], { base: 'https://code.angularjs.org/1.5.0/' }).pipe(gulp.dest(DST + 'js'));
});


// =================================== //
// ============== BUILD ============== //
// =================================== //
// http://stackoverflow.com/questions/27905849/how-to-compile-only-sass-files-that-have-been-changed-with-gulp

gulp.task('build', function(callback)
{
	return runSequence(
		[ 'build.clean' ],
		[ 'build.sass', 'build.js', 'build.tpl' ],
		
		callback
	);
});

gulp.task('build.clean', function(callback)
{
	return del(DST, callback);
});

gulp.task('build.sass', function()
{
	return gulp.src(PATH.SASS.SRC)
		.pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
		.pipe($.sourcemaps.init())
		.pipe($.sass())
		.pipe($.pleeease({ autoprefixer: { 'browsers': [ 'last 4 versions' ] }, minifier: { preserveHacks: true, removeAllComments: true } }))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(DST + PATH.SASS.DST))
	;
});

gulp.task('build.js', function()
{
	return gulp.src(PATH.JS.SRC)
		.pipe($.newer(DST + PATH.JS.DST))
		.pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
		// .pipe($.livescript())
		.pipe($.uglify())
		
		.pipe($.addSrc.prepend(PATH.JS.LIB))
		.pipe($.newer(DST + PATH.JS.DST))
		.pipe($.order([ '**/jquery-*', '**/angular.min.*', '**/angular*', '**/app.module.*' ]))
		// .pipe($.print())
		
		.pipe($.concat(PATH.JS.DST))
		.pipe(gulp.dest(DST))
	;
});

gulp.task('build.tpl', function()
{
	gulp.src(SRC + '*.html')
		.pipe($.newer(DST))
		.pipe(gulp.dest(DST));
	
	return gulp.src(PATH.TPL.SRC)
		.pipe(gulp.dest(DST + PATH.TPL.DST));
});


// =================================== //
// ============= WATHERS ============= //
// =================================== //

gulp.task('watch.sass'		, [ 'build.sass'	], function(){ browserSync.reload(); });
gulp.task('watch.js'		, [ 'build.js'		], function(){ browserSync.reload(); });
gulp.task('watch.tpl'		, [ 'build.tpl'		], function(){ browserSync.reload(); });

gulp.task('watch', [ 'build' ], function()
{
	browserSync.init({ server: { baseDir: DST } });
	
	gulp.watch(PATH.SASS.SRC		, [ 'watch.sass' ]);
	gulp.watch(PATH.JS.SRC			, [ 'watch.js' ]);
	gulp.watch(PATH.JS.LIB			, [ 'watch.js' ]);
	gulp.watch(PATH.TPL.SRC			, [ 'watch.tpl' ]);
	gulp.watch(SRC + 'index.html'	, [ 'watch.tpl' ]);
});

gulp.task('default', [ 'watch' ] );

