module.exports = {
    'path': {
        'dev': {
            'html': 'dev/',
            'css': 'dev/styles/',
            'images': 'dev/images/',
            'fonts': 'dev/fonts/',
            'js': 'dev/js/',
            'bower': 'dev/bower_components/'
        },
        'app': {
            'html': 'app/**/*.html',
            'stylus': 'app/stylus/*.styl',
            'images': 'app/images/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': 'app/scripts/**/*.js'
        },
        'production': {
            'main': 'production/',
            'fonts': 'production/fonts',
            'images': 'production/images',
            'views': 'production/views',
            'js': 'production/js'
        },
        'watch': {
            'html': 'app/**/*.html',
            'stylus': 'app/stylus/**/*.styl',
            'images': 'app/images/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': 'app/scripts/**/*.js'
        },
        'clean': './dev',
        'bower': 'bower_components/**/*.*'
    },
    'serverConfig': {
        'server': {
            'baseDir': "./dev"
        },
        'tunnel': true,
        'host': 'localhost',
        'port': 9000
    }
}
