const PostcssPxToViewport = require('postcss-px-to-viewport');

module.exports = {
    plugins: [
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
            }
        ],
        [
            "postcss-px-to-viewport",
            {
                viewportWidth: 1920,
                viewportHeight: 1080,
                unitPrecision: 3,
                viewportUnit: "vw",
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: false,
            },
        ],
        "postcss-normalize",
    ]
}