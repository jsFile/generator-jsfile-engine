module.exports = function (grunt) {
    return {
        app: {
            // webpack options
            entry: "./src/index.js",
            output: {
                path: "dist/",
                filename: "package.js"
            },

            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        query: {
                            stage: 0
                        }
                    }
                ]
            },

            stats: {
                // Configure the console output
                colors: false,
                modules: true,
                reasons: true
            },

            progress: false
        }
    };
};