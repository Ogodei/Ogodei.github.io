/**
 * 1) Run `$ grunt` in terminal -- this will create minified resources and copy original (unminified) files from `src` to `dist`
 * 2) In `index.html` make sure the HTML points to the minified resources
 */

module.exports = function (grunt) {
    // Task configuration:
    grunt.initConfig({
        
        // copies files from `src` to `dist`
        copy: {
            main: {
                files: [
                    {expand: true, src: ['src/stylesheets/*'],  dest: 'dist/stylesheets/',  flatten: true, filter: 'isFile'},
                    {expand: true, src: ['src/scripts/*'],      dest: 'dist/scripts/',      flatten: true, filter: 'isFile'}
                ]
            }
        },
        
        // minify CSS:
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/stylesheets/*.css'],
                    dest: 'dist/stylesheets',
                    ext: '.min.css'
                }]
            }
        },
        
        // minify JS:
        uglify: {
            my_target: {
                files: {'dist/scripts/scripts.min.js' : 'src/scripts/*.js'}
            }
        }
    });

    // Load Grunt tasks:
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    // Register default:
    grunt.registerTask("default", ["cssmin", "uglify", "copy"]);
};