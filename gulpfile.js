var gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src('./src/index.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig',
                myString: 'Hello World',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ],
                items: [
                  {
                    "name": "my thing",
                    "whatever" : {
                  		"title": "Lorem Ipsum",
                  		"subtitle": "Lorem Ipsum"
                	  }
                	},
                  {
                    "name": "my second thing"
                  }
                ]
            }
        }))
        .pipe(gulp.dest('./dest/'));
});

gulp.task('watch', function () {
    watch('src/**/*.twig', batch(function (events, done) {
        gulp.start('compile', done);
    }));
});

gulp.task('default', ['compile']);
