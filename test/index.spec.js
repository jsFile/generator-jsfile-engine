'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var test = require('yeoman-generator').test;
var Generator = require('./../generators/app/index');

describe('jsfile-engine generator', function () {
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
        assert.file(Generator.appFiles);
    });

    it('sets a app name', function () {
        assert.fileContent('package.json', new RegExp(appName.toLowerCase()));
        assert.fileContent('src/index.js', new RegExp(moduleName));
    });
});
