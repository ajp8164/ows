'use strict';

var program = require('commander');

function main() {

//  program
//    .version(version);

  program
    .command('start')
    .description('Start the ows node')
    .action(function(node) {
      // Kill command line arguments as we're calling another cli to start up (don't want to re-process args).
      process.argv = [];
      
      var start = require('./start');
      start();
    });

  program.parse(process.argv);

  if (process.argv.length === 1) {
    program.help();
  }

}

module.exports = main;
