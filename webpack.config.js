const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'js/main.bundle.js'
	},
	module: {
		rules: [
			{test: /\.css$/, use: ['style-loader','css-loader','sass-loader']}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // src html doc to compile from
			hash: true // add a hash onto the script tags generated from plugin
		})
	]
}

module.exports = config;