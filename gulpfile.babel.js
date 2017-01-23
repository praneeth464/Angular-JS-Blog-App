'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import path from 'path';
import sync from 'run-sequence';
import serve from 'browser-sync';
import rename from 'gulp-rename';
import template from 'gulp-template';
import fs from 'fs';
import yargs from 'yargs';
import lodash from 'lodash';
import nodemon from 'gulp-nodemon';
import clean from 'gulp-clean';

var BROWSER_SYNC_RELOAD_DELAY = 500;
let reload = () => serve.reload();

let paths = {
    js: 'src/client/**/*.js',
    styl: 'src/client/**/*.styl',
    html: 'src/client/**/*.html)',
    index: 'src/client/index.html',
    entry: './src/client/app.js',
    output: 'build'
};


gulp.task('webpack', () => {
    return gulp.src(paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.output));
});


gulp.task('html', () => {
    return gulp.src(paths.index)
        .pipe(gulp.dest(paths.output));
});


gulp.task('clean', () => {
    return gulp.src(paths.output)
        .pipe(clean());
});


gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({

            // nodemon our expressjs server
            script: 'src/server/server.js',

            // watch core server file(s) that require server restart on change
            watch: ['src/server/**/*.js']
        })
        .on('start', function onStart() {
            // ensure start only got called once
            if (!called) { cb(); }
            called = true;
        })
        .on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            setTimeout(function reload() {
                serve.reload({
                    stream: false //
                });
            }, BROWSER_SYNC_RELOAD_DELAY);
        });
});

gulp.task('serve', ['nodemon'], () => {
    serve({
        browser: ['google chrome'],
        proxy: 'http://localhost:8000',
        port: process.env.PORT || 3000,
        open: false
    });
});

gulp.task('watch', () => {
    let allPaths = [].concat([paths.js], [paths.styl], [paths.html]);
    gulp.watch(allPaths, ['webpack', 'html', reload]);
});


gulp.task('default', (done) => {
    sync('clean', 'webpack', 'html', 'serve', 'watch', done);
});
