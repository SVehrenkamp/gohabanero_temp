module.exports = function(grunt) {

  // Loads the necessary tasks for this Grunt file.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var _ref, _ref1, _ref2;

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ",
    baseDir: grunt.option('dir') || "dev",
    express: {
      options: {
        cmd: process.argv[0],
        port: 3000
      },
      dev: {
        options: {
          script: "server.js"
        }
      }
    },
    dev: {
      files: {
        base: "http://localhost:3000/",
        dir: (_ref1 = grunt.option('dir')) != null ? _ref1 : "",
        css: "css/main.css"
      }
    },
    files: {
      html: {},
      sass: {
        src: ["client/css/main.css"]
      },
      js: {}
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: [
          {
            expand: true,
            cwd: 'css',
            src: ['main.scss'],
            dest: 'css',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      express: {
        files: ['server.js'],
        options: {
          spawn: true
        }
      },
      sass: {
        files: ["css/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: true
        }
      }
    },
    browserSync: {
      dev: {
          bsFiles: {
              src : ['css/main.css', 'js/*', '*.html']
          },
          options: {
              watchTask: true,
              proxy: "localhost:3000"
          }
      }
    },
    server: {
      base: "" + (process.env.SERVER_BASE || 'public'),
      web: {
        port: 3000
      }
    }

  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['express:dev', 'sass', 'browserSync', 'watch:sass']);
};