import <%= moduleName %> from './../../src/index';

describe('<%= appName %>', () => {
    describe('Library imports', () => {
        it('should import JS module', () => {
            assert.isFunction(<%= moduleName %>);
        });

        it('should exist in global scope', () => {
            assert.isFunction(window['<%= libName %>'].default);
        });
    });
});
