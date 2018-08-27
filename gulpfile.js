// Mostly derived from https://bitsofco.de/a-simple-gulp-workflow/


// First require gulp
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');

// Define file sources
var sassMain = ['dev/scss/wphealthtracker-admin-ui.scss'];
var sassSources = ['dev/scss/*.scss'];
//var sassSources = ['development/sass/**/*.scss']; // Any .scss file in any sub-directory
var jsSources = ['dev/js/*.js', 'dev/js/D3/charts/*.js']; // Any .js file in scripts directory
var d3Source = ['dev/js/D3/d3.js']; // Any .js file in scripts directory

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
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('assets/js')); // The destination for the concatenated and uglified file
});

// Task to watch for changes in our file sources
gulp.task('watch', function() {
    gulp.watch(sassMain,['sass']); // If any changes in 'sassMain', perform 'sass' task
    gulp.watch(sassSources,['sass']);
    gulp.watch(jsSources,['concat']);
    gulp.watch(d3Source,['d3-uglify']); 
});

// Default gulp task
gulp.task('default', ['sass', 'd3-uglify', 'concat', 'watch']);