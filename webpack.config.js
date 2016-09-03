"use strict";

let path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: ['./utils.js', './about_page.js'],
		home: ['./utils.js', './home_page.js'],
		contact: ['./utils.js', './contact_page.js'],
	},
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "[name].js"
	},

	plugins: [commonsPlugin, new ExtractTextPlugin("styles_[name].css"),],

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
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!')
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}