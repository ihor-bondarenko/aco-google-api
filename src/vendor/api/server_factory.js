'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;

class ApiServerFactory {
    constructor(){};
}

util.inherits(ApiServerFactory, eventEmitter);

exports.ApiServerFactory = ApiServerFactory;
