const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: path.join(__dirname, "src", "index.tsx"),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
    },
    devServer: {
        host: "localhost",
        port: 9000,
        inline: false,
        historyApiFallback: {
            rewrites: [
              {
                from: /^\/[A-Za-z]*\/[A-Za-z]*\.js$/,
                to: function (context) {
                  const fileName = context.parsedUrl.pathname.split('/').pop();
                  return `/${fileName}`;
                },
              },
            ],
          },
        contentBase: [
            path.join(__dirname, 'assets'),
            path.join(__dirname, 'dist')
        ]
    }
}