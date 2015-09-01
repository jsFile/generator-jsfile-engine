module.exports = function () {
    return {
        options: {
            compress: true,
            report: false
        },
        engine: {
            'src': '<%= appBuildPath %>',
            'dest': '<%= appMinifiedBuildPath %>'
        }
    };
};