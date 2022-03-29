const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    // configuração do webpackdevserver
    devServer: {
        static: {
          directory: path.join(__dirname),
        },
        compress: true,
        port: 9000,
      },
    module: {
        rules: [
            {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                     loader: 'babel-loader',
                 }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            }
        ]
    },
}