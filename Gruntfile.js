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
      html: [
        'dist/index.html',
        'dist/seo/index.html',
        'dist/seo/contact/index.html',
        'dist/seo/programming/index.html',
        'dist/seo/music/index.html'
      ]
    },
    copy:{
      html: {
        src: './index.html', dest: 'dist/index.html'
      },
      htaccess: {
        src: './.htaccess', dest: 'dist/.htaccess'
      },
    others : {
      files : [{
        expand: true,
        src: [
          './css/fonts/**',
          './css/patterns/**',
          './partials/**',
          './bower_components/font-awesome/fonts/*',
          './seo/**',
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
    },
    cssmin: {
      combine: {
        files: {
          './dist/css/custom.css': ['css/custom.css']
        }
      }

    },
    shell: {
        takeSnapshots: {
            command: 'node takeSnapshots'
        }
    }

  });



  // simple build task
  grunt.registerTask('build', [
  'clean',
  'shell:takeSnapshots',
  'copy',
  'cssmin',
  'useminPrepare',
  'concat',
  'uglify',
  'usemin'
  ]);

};
