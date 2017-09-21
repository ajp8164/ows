'use strict';

var path = require('path');
var servicesPath = path.resolve(__dirname, '../../../');

function start() {
	var owsnoded = require('ows-node/lib/cli/owsnoded');
	var additionalServices = ['explorer-api', 'ows-explorer'];
	owsnoded(servicesPath, additionalServices);
}

module.exports = start;
