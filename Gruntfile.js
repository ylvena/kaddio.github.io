module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },

        browserSync: {
            dev: {
               options: {
                    watchTask: true,
                    server: true,
                    port: "3000",
                    files: "css/*, **/*.html, *.js, js/**/*.js"
                }
            }
        },

        jshint: {
            options: {
                force: true
            },

            files: ['Gruntfile.js', 'js/**/*.js', '!js/services/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserSync', 'jshint', 'watch']);
};
