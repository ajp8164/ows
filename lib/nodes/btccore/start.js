'use strict';

var path = require('path');
var servicesPath = path.resolve(__dirname, '../../../');

function start() {
  var btccored = require('btccore-node/lib/cli/btccored');
  var additionalServices = ['btccore-explorer-api', 'ows-explorer'];
  btccored(servicesPath, additionalServices);
}

module.exports = start;
