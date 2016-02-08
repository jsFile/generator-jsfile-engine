import JsFile from 'JsFile';
import createDocument from './reader/createDocument';

const {Engine} = JsFile;

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

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }

    static mimeTypes = files.mime.slice(0)
}

export default <%= moduleName %>;