"use strict"

module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../scripts/quiz.js']
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {"CarLot": true},
        browserify: true
        },
        files: ['../scripts/**/*.js']
      },
      watch: {
        javascripts: {
          files: ['../scripts/**/*.js'],
          tasks: ['jshint', 'browserify']
        }
      }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
  };