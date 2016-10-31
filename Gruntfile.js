module.exports = function(grunt) {

    grunt.initConfig({

        svgstore: {
            options: {
                includedemo: true,
                cleanup: true,
                // This will prefix each ID
                prefix : 'svg-',
                // will add and overide the the default
                // xmlns="http://www.w3.org/2000/svg"
                // attribute to the resulting SVG
                svg: {
                viewBox : '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg'
                },
                symbol: {
                preserveAspectRatio: 'xMidYMin meet'
            }
        },
            default : {
                files: {
                'dist/assets/toolkit/svg/all.svg': ['src/assets/toolkit/svg/*.svg'],
                },
            },
        },


        svginjector: {
            example: {
                options: {
                    container: 'svg-container'
                },
                files: {
                    'dist/assets/toolkit/svg/svg.js': 'dist/assets/toolkit/images/all.svg'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svginjector');
    grunt.registerTask('svg', ['svgstore', 'svginjector']);
};
