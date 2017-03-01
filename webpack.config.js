const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: { 
		loaders: [{  
			test: /\.js$/, 
			loaders: ['react-hot-loader', 'babel-loader'],
			exclude: /node_modules/
		},]
	}
};