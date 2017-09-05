'use strict';

var program = require('commander');
var fs = require('fs');

function main() {

//  program
//    .version(version);

	function getDirectories(path) {
	  return fs.readdirSync(path).filter(function (file) {
	    return fs.statSync(path+'/'+file).isDirectory();
	  });
	}

	var availableNodes = getDirectories(__dirname + '/../nodes').join(', ');

  program
    .command('start <node>')
    .description('Start a specified node [' + availableNodes + ']')
    .action(function(node) {
      // Kill command line arguments as we're calling another cli to start up (don't want to re-process args).
      process.argv = [];
      
      var start = require('../nodes/' + node + '/start');
      start();
    });

  program.parse(process.argv);

  if (process.argv.length === 2) {
    program.help();
  }

}

module.exports = main;
