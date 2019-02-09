// Mostly derived from https://bitsofco.de/a-simple-gulp-workflow/


// First require gulp
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    zip = require('gulp-zip'),
    del = require('del');

// Define file sources
var sassMain = ['dev/scss/wphealthtracker-admin-ui.scss'];
var sassFrontendMain = ['dev/scss/frontend/wphealthtracker-frontend-ui.scss'];
var sassSources = ['dev/scss/*.scss'];
//var sassSources = ['development/sass/**/*.scss']; // Any .scss file in any sub-directory
var jsSources = ['dev/js/*.js', 'dev/js/D3/charts/*.js']; // Any .js file in scripts directory
var d3Source = ['dev/js/D3/d3.js']; // Any .js file in scripts directory

var frontendDietJs = ['dev/js/frontend/wphealthtracker-jre-frontend-dietstats.js', 'dev/js/D3/charts/d3-diet-js.js'];
var frontendVitalsJs = ['dev/js/frontend/wphealthtracker-jre-frontend-vitalsstats.js', 'dev/js/D3/charts/d3-vitals-js.js'];
var frontendExerciseJs = ['dev/js/frontend/wphealthtracker-jre-frontend-exercisestats.js', 'dev/js/D3/charts/d3-exercise-js.js'];

var babelSource = ['dev/js/D3/charts/d3-vitals-js.js']; // Any .js file in scripts directory
gulp.task('babel', () =>
    gulp.src(babelSource)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);


// Task to compile SASS files
gulp.task('sass', function() {
    gulp.src(sassMain) // use sassMain file source
        .pipe(sass({
            outputStyle: 'compressed' // Style of compiled CSS
        })
            .on('error', gutil.log)) // Log descriptive errors to the terminal
        .pipe(gulp.dest('assets/css')); // The destination for the compiled file
});

// Task to compile SASS files
gulp.task('sassFrontend', function() {
    gulp.src(sassFrontendMain) // use sassMain file source
        .pipe(sass({
            outputStyle: 'compressed' // Style of compiled CSS
        })
            .on('error', gutil.log)) // Log descriptive errors to the terminal
        .pipe(gulp.dest('assets/css')); // The destination for the compiled file
});

// Task to uglify d3 file
gulp.task('d3-uglify', function() {
    gulp.src(d3Source) // use jsSources
        .pipe(uglify()) // Uglify concatenated file
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('assets/js')); // The destination for the renamed and uglified file
});

// Task to concatenate and uglify js files
gulp.task('concat', function() {
    gulp.src(jsSources) // use jsSources
        .pipe(concat('wphealthtracker-admin-min.js')) // Concat to a file named 'script.js'
        //.pipe(babel({presets: ['es2015']}))
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('assets/js')); // The destination for the concatenated and uglified file
});

// Task to concatenate and uglify js files
gulp.task('concat1', function() {
    gulp.src(frontendDietJs) // use jsSources
        .pipe(concat('wphealthtracker-jre-frontend-dietstats-min.js')) // Concat to a file named 'script.js'
        //.pipe(babel({presets: ['es2015']}))
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('assets/js/frontend')); // The destination for the concatenated and uglified file
});

// Task to concatenate and uglify js files
gulp.task('concat2', function() {
    gulp.src(frontendVitalsJs) // use jsSources
        .pipe(concat('wphealthtracker-jre-frontend-vitalsstats-min.js')) // Concat to a file named 'script.js'
        //.pipe(babel({presets: ['es2015']}))
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('assets/js/frontend')); // The destination for the concatenated and uglified file
});

// Task to concatenate and uglify js files
gulp.task('concat3', function() {
    gulp.src(frontendExerciseJs) // use jsSources
        .pipe(concat('wphealthtracker-jre-frontend-exercisestats-min.js')) // Concat to a file named 'script.js'
        //.pipe(babel({presets: ['es2015']}))
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('assets/js/frontend')); // The destination for the concatenated and uglified file
});

gulp.task('copyassets', function () {
    gulp.src(['./assets/**/*'], {base: './'}).pipe(gulp.dest('../wphealthtracker_dist/WPHealthTracker-Distribution'));
});

gulp.task('copyincludes', function () {
    gulp.src(['./includes/**/*'], {base: './'}).pipe(gulp.dest('../wphealthtracker_dist/WPHealthTracker-Distribution'));
});

gulp.task('copymainfile', function () {
    gulp.src(['./wphealthtracker.php'], {base: './'}).pipe(gulp.dest('../wphealthtracker_dist/WPHealthTracker-Distribution'));
});

gulp.task( 'copyreadme', function () {
    gulp.src([ './readme.txt' ], {base: './'}).pipe(gulp.dest( '../wphealthtracker_dist/WPHealthTracker-Distribution' ) );
});

gulp.task('zip', function () {
    return gulp.src('../wphealthtracker_dist/WPHealthTracker-Distribution/**')
        .pipe(zip('wphealthtracker.zip'))
        .pipe(gulp.dest('../wphealthtracker_dist/WPHealthTracker-Distribution'));
});

gulp.task('clean', function(cb) {
    del(['../wphealthtracker_dist/WPHealthTracker-Distribution/**/*', '!../wphealthtracker_dist/WPHealthTracker-Distribution/wphealthtracker.zip'], {force: true}, cb);
});

gulp.task( 'cleanzip', function(cb) {
    del([ '../wphealthtracker_dist/WPHealthTracker-Distribution/**/*' ], {force: true}, cb);
});



// Task to watch for changes in our file sources
gulp.task('watch', function() {
    gulp.watch(sassMain,['sass']); // If any changes in 'sassMain', perform 'sass' task
    gulp.watch(sassFrontendMain,['sassFrontend']);
    gulp.watch(sassSources,['sass']);
    gulp.watch(jsSources,['concat']);
    gulp.watch(d3Source,['d3-uglify']); 
});

// Default gulp task
gulp.task('default', ['sass', 'sassFrontend', 'd3-uglify', 'concat', 'concat1', 'concat2', 'concat3', 'watch']);

//gulp.task( 'default', [ 'cleanzip' ]);

//gulp.task('default', ['copyassets', 'copyincludes', 'copymainfile', 'copyreadme']);

//gulp.task('default', ['zip']);

//gulp.task('default', ['clean']);