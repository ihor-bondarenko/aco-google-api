'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;

class GoogleApiFactory {
    constructor(){};
}

util.inherits(GoogleApiFactory, eventEmitter);

exports.GoogleApiFactory = GoogleApiFactory;