/* jshint node: true */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: [
                    'bower_components/foundation/scss',
                    'bower_components'
                ]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/ax-template.css': 'scss/app.scss'
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


        jshint: {
            all: ['Gruntfile.js', 'js/ax-template/**/*.js'],
            options: {
                jshintrc: true
            }
        },

        concat: {
            "ax-template": {
                dest: 'js/ax-template.js',
                src: [
                    'js/ax-template/app.js'
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
    grunt.registerTask('build', ['sass', 'buildJs']);
    grunt.registerTask('default', ['build', 'watch']);
};
