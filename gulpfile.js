const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const nodemon = require('nodemon');

// DECLARE FILE PATHS =============================
const basePath = './public';
const resetPath = "./public/styles/normalize.css";

const paths = {
  jsSrc: [`${basePath}/js/app.js`, `${basePath}/js/*.js`, `${basePath}/js/controllers/*.js`, `${basePath}/directives/*.js`, `${basePath}/js/services/*.js`],
  scssSrc: [`${resetPath}`, `${basePath}/styles/*.scss`],
  server: './server/server.js'
};

// DEFINE TASKS ===================================
gulp.task('server', () => {
  nodemon({
    'script': paths.server
  })
});

gulp.task('js-bundle', () =>  {
  gulp.src(paths.jsSrc)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('scss-bundle', () => {
  gulp.src(paths.scssSrc)
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(scss())
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./public/dist'))
});

// WATCH TASK =======================================
gulp.task('watch', () => {
  gulp.watch(paths.jsSrc, ['js-bundle']);
  gulp.watch(paths.scssSrc, ['scss-bundle']);
});

gulp.task('build', ['js-bundle','scss-bundle']);

gulp.task('default', ['watch', 'js-bundle','scss-bundle', 'server']);

//npm install --save-dev babel-preset-es2015