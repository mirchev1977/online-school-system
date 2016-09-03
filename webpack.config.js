"use strict";

let path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: ['./utils.js', './about_page.js'],
		home: ['./utils.js', './home_page.js'],
		contact: ['./utils.js', './contact_page.js'],
	},
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "[name].js"
	},

	plugins: [commonsPlugin],

	devServer: {
		contentBase: 'public'
	},

	module:{
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.es6$/,
				exclude: 'node_modules',
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}