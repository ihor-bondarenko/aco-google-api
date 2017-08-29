'use strict';

const ApiServerFactory = require('../vendor/api/server_factory').ApiServerFactory;

class HapiServer extends ApiServerFactory {
    constructor(){
        super();
    }
}

exports.HapiServer =  function(){
    return new HapiServer();
};