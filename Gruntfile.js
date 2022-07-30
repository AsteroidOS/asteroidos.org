/*
 * asteroidos.org
 *
 * Copyright (c) 2017, Florent Revest, Alexis Sellier, Less Core Team, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Project metadata
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('.assemblerc.yml'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', '<%= site.helpers %>/*.js']
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        production: true,
        assets: '<%= site.dest %>/public',

        // Metadata
        pkg: '<%= pkg %>',     // extend the context with `pkg`
        site: '<%= site %>',   // extend the context with `site`

        // Templates
        partials: '<%= site.includes %>/*.hbs',
        layoutdir: '<%= site.layouts %>',
        layoutext: '<%= site.layoutext %>',
        layout: '<%= site.layout %>',

        // Extensions
        // mixins: ['<%= site.mixins %>/utils.js'],
        helpers: ['<%= site.helpers %>/*.js'],
        plugins: ['<%= site.plugins %>'],

        // `compose` helper options
        compose: {cwd: 'pages'},

        // markdown options
        marked: {
          process: true,

          // highlight.js options
          prefix: 'lang-'
        },

        collections: [{
          name: 'post',
          sortby: 'posted',
          sortorder: 'descending'
        }]
      },
      site: {
        options: { permalinks: {preset: 'pretty'} },
        files: [{
          cwd: '<%= site.pages %>/',
          dest: '<%= site.dest %>/',
          expand: true,
          src: ['**/*.{hbs,md}', '!main/**/*.{hbs,md}']
        }, {
          cwd: '<%= site.pages %>/main/',
          dest: '<%= site.dest %>/',
          expand: true,
          src: '**/*.{hbs,md}'
        }]
      }
    },

    prettify: {
      site: {
        files: [
          {
            expand: true,
            cwd: '<%= site.dest %>',
            src: '*.html',
            dest: '<%= site.dest %>/',
            ext: '.html'
          }
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: ['<%= site.dest %>']
        }
      }
    },

    // Compile Less to CSS
    less: {
      options: {
        paths: ['styles/bootstrap', 'styles/components']
      },
      site: {
        src: ['styles/index.less'],
        dest: '<%= assemble.options.assets %>/css/index.css'
      }
    },

    // Copy source assets to _gh_pages
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '<%= site.assets %>/public',
            src: ['**'],
            dest: '<%= site.dest %>/public/'
          },
          {
            expand: true,
            cwd: '<%= site.assets %>/root',
            src: ['*'],
            dest: '<%= site.dest %>/',
            rename: function (dest, src) {
            dest = dest + src.replace(/^_/, '');
            return dest;
            }
          }
        ]
      }
    },

    watch: {
      options: {livereload: true },
      styles: {
        files: ['<%= site.styles %>/**/*.less'],
        tasks: ['less:site']
      },
      pages: {
        files: ['<%= site.pages %>/**/*.hbs'],
        tasks: ['assemble:site']
      },
      templates: {
        files: ['<%= site.templates %>/**/*.hbs'],
        tasks: ['assemble:site']
      },
      assets: {
        files: ['<%= site.assets %>/**/*.*'],
        tasks: ['copy']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-repos');
  grunt.loadNpmTasks('grunt-sync-pkg');

  grunt.registerTask('design', [
    'copy',
    'less:site',
    'assemble:site',
    'connect',
    'watch'
  ]);

  // Default tasks to be run.
  grunt.registerTask('default', [
    'jshint',
    'copy',
    'less:site',
    'assemble:site'
  ]);
};
