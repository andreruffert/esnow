#!/usr/bin/env node
var path = require('path');
var chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));
var future = require('./lib/future');

// Parse command line options.
var outputFileName = argv.outputFileName || argv.f || 'app.js';
var outputPath = argv.outputPath || argv.o || '';
var entryFile = argv.entryFile || argv.e || '';
var outputFile = path.join(process.cwd(), outputPath, outputFileName);
var prod = argv.prod || argv.p || false;

if (outputPath === '' || entryFile === '') {
	return console.error(chalk.red('Please specify outputPath and entryFile!'));
}

var opts = {
	outputFileName: outputFileName,
	outputPath: path.join(process.cwd(), outputPath),
	entryFile: path.join(process.cwd(), entryFile),
	outputFile: outputFile,
	mapFile: outputFile + '.map',
	prod: prod
};

future(opts);