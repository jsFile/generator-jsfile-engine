'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var test = require('yeoman-generator').test;

describe('jsfile-engine:app', function () {
    var appName = 'jsFile-ooxml';
    var moduleName = 'OoxmlEngine';
    var libName = 'JsFileOoxml';

    before(function (done) {
        test.run(path.join(__dirname, '../generators/app'))
            .withOptions({skipInstall: true})
            .withArguments([appName])
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'package.json',
            'Gruntfile.js',
            'karma.conf.js',
            '.travis.yml',

            'grunt_tasks_config/jscs.js',
            'grunt_tasks_config/uglify.js',
            'grunt_tasks_config/webpack.js',

            'tests/unit/engine.spec.js',

            'src/index.js',
            'LICENSE',
            'README.md'
        ]);
    });

    it('sets a app name', function () {
        assert.fileContent('package.json', new RegExp(appName.toLowerCase()));
        assert.fileContent('src/index.js', new RegExp(moduleName));
        assert.fileContent('grunt_tasks_config/webpack.js', new RegExp(libName));
    });
});
