/**
 * Created by girl on 2017/5/4.
 */
var webpack = require('webpack')
var path = require('path')
var sourceLoader = path.resolve(__dirname, '../index.js');
console.log('~~~~~~~~~~~~~~~~~~~~~~~ come test.js');
webpack({
    entry: path.resolve(__dirname, './main.js'),
    output: {
        path: '/',
        filename: 'test.build.js'
    },
    module: {
        rules: [
            {
                test: /\.sqc$/,
                loader: sourceLoader
            }
            ,{
                test: /\.less$/,
                loader: 'less-loader'
            }
        ]
    }
})

console.log('~~~~~~~~~~~~~~~~~~~~~~~ out test.js');
