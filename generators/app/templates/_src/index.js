import {assign, Engine, defineEngine} from 'JsFile';
import createDocument from './reader/createDocument';

/**
 * @description Supported files by engine
 * @type {{extension: Array, mime: Array}}
 */
const files = {
    extension: [],
    mime: []
};

class <%= moduleName %> extends Engine {
    createDocument = createDocument

    files = files

    static mimeTypes = files.mime.slice(0)
}

defineEngine(<%= moduleName %>);

export default <%= moduleName %>;