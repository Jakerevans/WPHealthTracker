/**
Mostly derived from https://bitsofco.de/a-simple-gulp-workflow
npm install gulp
npm install --save-dev gulp-sass
npm install --save-dev gulp-concat
npm install --save-dev gulp-uglify
npm install --save-dev gulp-util
npm install --save-dev gulp-rename
npm install --save-dev gulp-babel
npm install --save-dev gulp-zip
npm install --save-dev del
 */

// First require gulp.
var gulp   = require( 'gulp' ),
    sass   = require( 'gulp-sass' ),
    concat = require( 'gulp-concat' ),
    uglify = require( 'gulp-uglify' ),
    gutil  = require( 'gulp-util' ),
    rename = require( 'gulp-rename' ),
    zip    = require( 'gulp-zip' ),
    del    = require( 'del' );

var sassFrontendSource        = [ 'dev/scss/frontend/wphealthtracker-frontend-ui.scss' ];
var sassBackendSource         = [ 'dev/scss/wphealthtracker-admin-ui.scss' ];
var jsBackendSource           = [ 'dev/js/*.js' ];
var jsFrontendSource          = [ 'dev/js/frontend/*.js' ];
var watcherMainFrontEndScss = gulp.watch( sassFrontendSource );
var watcherMainBackEndScss = gulp.watch( sassBackendSource );
var watcherJsFrontendSource = gulp.watch( jsFrontendSource );
var watcherJsBackendSource = gulp.watch( jsBackendSource );

// Define default task.
gulp.task( 'default', function( done ) {
    return done();
});

// Task to compile Frontend SASS file.
gulp.task( 'sassFrontendSource', function() {
    return gulp.src( sassFrontendSource )
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on( 'error', gutil.log ) )
        .pipe(gulp.dest( 'assets/css' ) )
});

// Task to compile Backend SASS file
gulp.task( 'sassBackendSource', function() {
    return gulp.src( sassBackendSource )
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on( 'error', gutil.log) )
        .pipe(gulp.dest( 'assets/css' ) );
});

// Task to concatenate and uglify js files
gulp.task( 'concatAdminJs', function() {
    return gulp.src(jsBackendSource ) // use jsSources
        .pipe(concat( 'wphealthtracker-admin-min.js' ) ) // Concat to a file named 'script.js'
        .pipe(uglify() ) // Uglify concatenated file
        .pipe(gulp.dest( 'assets/js' ) ); // The destination for the concatenated and uglified file
});


// Task to concatenate and uglify js files
gulp.task( 'concatFrontendJs', function() {
    return gulp.src(jsFrontendSource ) // use jsSources
        .pipe(concat( 'wphealthtracker_frontend.min.js' ) ) // Concat to a file named 'script.js'
        .pipe(uglify() ) // Uglify concatenated file
        .pipe(gulp.dest( 'assets/js' ) ); // The destination for the concatenated and uglified file
});

gulp.task( 'copyassets', function () {
    return gulp.src([ './assets/**/*' ], {base: './'}).pipe(gulp.dest( '../wphealthtracker_dist/WPHealthTracker-Distribution' ) );
});

gulp.task( 'copyincludes', function () {
    return gulp.src([ './includes/**/*' ], {base: './'}).pipe(gulp.dest( '../wphealthtracker_dist/WPHealthTracker-Distribution' ) );
});

gulp.task( 'copyreadme', function () {
    return gulp.src([ './readme.txt' ], {base: './'}).pipe(gulp.dest( '../wphealthtracker_dist/WPHealthTracker-Distribution' ) );
});

gulp.task( 'copymainfile', function () {
    return gulp.src([ './wphealthtracker.php' ], {base: './'}).pipe(gulp.dest( '../wphealthtracker_dist/WPHealthTracker-Distribution' ) );
});

gulp.task( 'zip', function () {
    return gulp.src( '../wphealthtracker_dist/WPHealthTracker-Distribution/**' )
        .pipe(zip( 'wphealthtracker.zip' ) )
        .pipe(gulp.dest( '../wphealthtracker_dist/WPHealthTracker-Distribution' ) );
});

gulp.task( 'cleanzip', function(cb) {
    return del([ '../wphealthtracker_dist/WPHealthTracker-Distribution/**/*' ], {force: true}, cb);
});

gulp.task( 'clean', function(cb) {
    return del([ '../wphealthtracker_dist/WPHealthTracker-Distribution/**/*', '!../wphealthtracker_dist/WPHealthTracker-Distribution/wphealthtracker.zip' ], {force: true}, cb);
});

// Cleanup/Zip/Deploy task
gulp.task('default',gulp.series( 'cleanzip', 'sassFrontendSource', 'sassBackendSource', 'concatAdminJs', 'concatFrontendJs', gulp.parallel('copyassets','copyincludes','copyreadme','copymainfile'),'zip','clean',function(done) {done();}));

/*
 *  WATCH TASKS FOR SCSS/CSS
 *
*/
watcherMainFrontEndScss.on('all', function(event, path, stats) {

    gulp.src( sassFrontendSource )
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on( 'error', gutil.log ) )
        .pipe(gulp.dest( 'assets/css' ) )
        .on('end', function(){ console.log('Finished!!!') });

  console.log('File ' + path + ' was ' + event + 'ed, running tasks...');
});
watcherMainBackEndScss.on('all', function(event, path, stats) {

    gulp.src( sassBackendSource )
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on( 'error', gutil.log) )
        .pipe(gulp.dest( 'assets/css' ) )
        .on('end', function(){ console.log('Finished!!!') });

  console.log('File ' + path + ' was ' + event + 'ed, running tasks...');
});
watcherJsBackendSource.on('all', function(event, path, stats) {

    gulp.src( jsBackendSource ) // use jsSources
        .pipe(concat( 'wphealthtracker_admin.min.js' ) ) // Concat to a file named 'script.js'
        .pipe(uglify() ) // Uglify concatenated file
        .pipe(gulp.dest( 'assets/js' ) )
        .on('end', function(){ console.log('Finished!!!') });


  console.log('File ' + path + ' was ' + event + 'ed, running tasks...');
});
watcherJsFrontendSource.on('all', function(event, path, stats) {

    gulp.src(jsFrontendSource ) // use jsSources
        .pipe(concat( 'wphealthtracker_frontend.min.js' ) ) // Concat to a file named 'script.js'
        .pipe(uglify() ) // Uglify concatenated file
        .pipe(gulp.dest( 'assets/js' ) ) // The destination for the concatenated and uglified file
        .on('end', function(){ console.log('Finished!!!') });

  console.log('File ' + path + ' was ' + event + 'ed, running tasks...');
});
