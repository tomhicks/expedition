module.exports = {
    entry: "./src/client/main.jsx",
    output: {
        publicPath: "/build",
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
            { test: /\.jsx$/, loader: "jsx" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
