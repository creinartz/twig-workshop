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
                    "name": "myhotel",
                    "callToAction" : {
                  		"headline01": "Lorem Ipsum",
                  		"name": "Lorem Ipsum",
                  		"cssclass": "icon-icn_info_circle_fill_light",
                  		"ctaBoxBg": "trv-maincolor-04"
                	  }
                	},
                  {
                    "name": "myhotel"
                  }
                ]
            }
        }))
        .pipe(gulp.dest('./dest/'));
});

gulp.task('build', function () { console.log('Working!'); });

gulp.task('watch', function () {
    watch('src/**/*.twig', batch(function (events, done) {
        gulp.start('compile', done);
    }));
});

gulp.task('default', ['compile']);
