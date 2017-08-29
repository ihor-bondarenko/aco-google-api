'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const googleAuth = require('google-auth-library');
const config = require('../../../../config.json');

const authServices = {
    'api_key': Object.assign({}, config.api_key)
};

class GoogleApiAuthService {
    constructor(type){
        this.auth = null;
    }

    getService(type){
        return new Promise((resolve) => {
            let res = {};
            switch(type){
                case 'api_key':
                    res = authServices.api_key;
                    break;
            }
            resolve(res);
        });
    }
}

util.inherits(GoogleApiAuthService, eventEmitter);

exports.GoogleApiAuthService = new GoogleApiAuthService();
