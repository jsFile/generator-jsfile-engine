import JsFile from 'JsFile';
import <%= moduleName %> from './../../<%= appBuildPath %>';

describe('<%= appName %>', () => {
    let files = window.files;

    it('should exist', () => {
        assert.isFunction(<%= moduleName %>);
    });
});