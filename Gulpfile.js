var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

gulp.task('fonts', function(done) {
  gulp.src('assets/fonts/*')
    // .pipe(uglify())
    .pipe(gulp.dest('build/fonts'));
  done();
});

gulp.task('scripts', function(done) {
  gulp.src('assets/js/**/*.js')
    // .pipe(uglify())
    .pipe(gulp.dest('build/js'));
  done();
});

gulp.task('styles', function(done) {
  gulp.src('assets/stylesheets/app.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('build/css'));
  done();
});

gulp.task('image-minify', function(done) {
    gulp.src('assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
  done();
});

gulp.task('minify-html', function(done) {
  return gulp.src('*.html')
    .pipe(gulp.dest('build/'));
  done();
});

gulp.task('watch', function(done) {
  gulp.watch('assets/js/**/*.js', gulp.parallel('scripts'));
  gulp.watch('assets/stylesheets/**/*.scss', gulp.parallel('styles'));
  gulp.watch('*.html', gulp.parallel('minify-html'));
  gulp.watch('assets/images/*', gulp.parallel('image-minify'));
  gulp.watch('assets/fonts/*', gulp.parallel('fonts'));
  done();
});

gulp.task('default', gulp.series('fonts', 'scripts', 'styles', 'watch', 'minify-html', 'image-minify'));
