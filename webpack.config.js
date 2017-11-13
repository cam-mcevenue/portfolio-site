const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSCSS = new ExtractTextPlugin({
	filename: "css/main.css",
	//disabled: false,
	allChunks: true
});

const config = {
	entry: './src/js/main.js',

	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'js/main.bundle.js'
	},

	module: {
		rules: [

			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','sass-loader']
				})
			}

		]
	},

	plugins: [

		new HtmlWebpackPlugin({
			template: './src/index.html', // src html doc to compile from
			hash: true // add a hash onto the script tags generated from plugin
		}),

		extractSCSS
		
	]
}

module.exports = config;