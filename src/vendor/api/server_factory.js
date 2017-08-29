'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

class ApiServerFactory {
    constructor(){}
}

util.inherits(ApiServerFactory, eventEmitter);

exports.ApiServerFactory = ApiServerFactory;
