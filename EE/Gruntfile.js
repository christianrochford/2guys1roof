module.exports = function(grunt) {

  grunt.initConfig({

// Set package.json location
    pkg: grunt.file.readJSON('package.json'),

// Compass
    compass: {
      dev: {
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/stylesheets',
          imagesDir: 'assets/images',
          outputStyle: 'compressed'
        }
      }
    },

// Concat JS
    concat: {
      options: {
        separator: ';'
      },
      // JS Files, Notice the seperation of jquery, plugins and initialisation files
      dist: {
        src: ['assets/js/lib/jquery-2.0.3.min.js',
              'assets/js/plugins/*.js',
              'assets/js/app/app.js',
        ],
        // Build Location pulling package name from JSON file
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    // Uglify Files - Notice the use of "force: true" in tasks, this forces the build even if there's errors
    uglify: {
      options: {
        force: true, 
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    // JShint - Notice the use of "force: true" in tasks, this forces the build even if there's errors
    jshint: {
      files: ['Gruntfile.js', 'assets/**/*.js'],
      options: {
          force: true, 
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    // Set JS Hint tasks to be watched (we could add compass here too)
    watch: {
      files: ['<%= jshint.files %>', 'assets/sass/*'],
      tasks: ['jshint', 'compass']
    }
  });

  // Load our relavent tasks

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'compass']);

};