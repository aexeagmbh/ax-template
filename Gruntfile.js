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
                    {expand: true, cwd: 'bower_components/foundation-icons/', src: 'foundation-icons.css', dest: 'css/'}
                ]
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'js/**/*.js'],
            jshintrc: true
        },

        concat: {
            "ax-template": {
                dest: 'js/ax-template.js',
                src: [
                    'bower_components/foundation/js/vendor/jquery.js',
                    'bower_components/foundation/js/vendor/modernizr.js',
                    'bower_components/foundation/js/foundation.js'
                ]
            }
        },

        uglify: {
            build: {
                src: 'js/ax-template.js',
                dest: 'js/ax-template.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('buildJs', ['concat', 'uglify']);
    grunt.registerTask('build', ['sass', 'buildJs', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);
}
