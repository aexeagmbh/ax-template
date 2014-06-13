module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss',
          'bower_components/foundation-icon-fonts'
        ]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'bower_components/foundation/js/',    src: '**',                   dest: 'js/'},
          {expand: true, cwd: 'bower_components/foundation-icons/', src: 'foundation-icons.css', dest: 'css/'},
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('default', ['build', 'watch']);
}
