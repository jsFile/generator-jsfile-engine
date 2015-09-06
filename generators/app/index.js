'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var appFiles = [
    'package.json',
    'Gruntfile.js',
    'karma.conf.js',

    'grunt_tasks_config/jscs.js',
    'grunt_tasks_config/uglify.js',
    'grunt_tasks_config/webpack.js',
    'grunt_tasks_config/copy.js',

    'tests/unit/index.spec.js',

    'src/index.js',
    'src/reader/createDocument.js',
    'README.md'
];

function _toCamelCase (str) {
    return (str || '').replace(/[-_]+([^_-])/g, function ($1, $2) {
        return $2.toUpperCase();
    });
}

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.argument('appName', { type: String, required: true });
    },

    prompting: function () {
        this.log(yosay(
            'Welcome to the ' + chalk.red('jsFileEngine') + ' generator!'
        ));
    },

    writing: {
        app: function () {
            var appName = this.appName || '';
            var appNameLowerCase = appName.toLowerCase();
            var libName = _toCamelCase(appName).replace(/jsfile/i, 'JsFile');
            var moduleName = appName.split('-').pop().toLowerCase() + 'Engine';
            moduleName = moduleName[0].toUpperCase() + moduleName.slice(1);

            appFiles.forEach(function (file) {
                this.fs.copyTpl(
                    this.templatePath('_' + file),
                    this.destinationPath(file),
                    {
                        appName: appName,
                        moduleName: moduleName,
                        libName: libName,
                        appNameLowerCase: appNameLowerCase,
                        appBuildPath: 'dist/' + appNameLowerCase + '.js',
                        appMinifiedBuildPath: 'dist/' + appNameLowerCase + '.min.js'
                    }
                );
            }, this);
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath('travis.yml'),
                this.destinationPath('.travis.yml')
            );
            this.fs.copy(
                this.templatePath('LICENSE'),
                this.destinationPath('LICENSE')
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});