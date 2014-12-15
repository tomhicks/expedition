module.exports = {
    entry: "./src/client/main.jsx",
    output: {
        publicPath: "/build",
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
