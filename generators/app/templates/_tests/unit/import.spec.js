import OoxmlEngine from './../../src/index';

describe('jsFile-ooxml', () => {
    describe('Library imports', () => {
        it('should import JS module', () => {
            assert.isFunction(<%= moduleName %>);
        });

        it('should exist in global scope', () => {
            assert.isFunction(window['<%= moduleName %>'].default);
        });
    });
});