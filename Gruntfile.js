module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin:{
      html:['dist/index.html']
    },
    copy:{
      html: {
        src: './index.html', dest: 'dist/index.html'
      },
      css: {
        src: './css/custom.css', dest: 'dist/css/custom.css'
      },
      others : {
        files : [{
          expand: true,
          src: [
            './css/fonts/**',
            './css/patterns/**',
            './partials/**',
          ],
          dest: 'dist/'}
        ]
      }
    },
    concat: {
      generated: {
        files: [
        {
          dest: '.tmp/concat/js/app.js',
          src: [
          'js/*.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js'
          ]
        }
        ]
      }
    },
    uglify: {
      generated: {
        files: [
        {
          dest: 'dist/js/app.js',
          src: [ '.tmp/concat/js/app.js' ]
        }
        ]
      }
    },
    clean: {
      src : ['./dist','./.tmp']
    }

  });



  // simple build task
  grunt.registerTask('build', [
    'clean',
    'copy',
    'useminPrepare',
    'concat',
    'uglify',
  //  'cssmin',
    'usemin'
  ]);

};
