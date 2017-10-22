//babel to transpile our script before mocha runs the test
require('babel-register')();

//disable webpack since mocha doesn't understand css
require.extensions['.css'] = function() {};
