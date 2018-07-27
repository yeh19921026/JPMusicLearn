//https://segmentfault.com/a/1190000013052777
var debug = process.env.NODE_ENV !== "production";
//var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/main.jsx",
    output: {
        path: __dirname + "/js",
        filename: "app.jsx"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
    module: {
        rules: [{
            test: /\.jsx?$/, // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react']
            },

        }, ]
    }
}