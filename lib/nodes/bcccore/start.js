'use strict';

var path = require('path');
var servicesPath = path.resolve(__dirname, '../../../');

function start() {
  var bcccored = require('bcccore-node/lib/cli/bcccored');
  var additionalServices = ['bcccore-explorer-api', 'ows-explorer'];
  bcccored(servicesPath, additionalServices);
}

module.exports = start;
