'use strict';

const ApiServerFactory = require('../../vendor/api/server_factory').ApiServerFactory;
const Hapi = require('hapi');

class HapiServer extends ApiServerFactory {
    constructor(){
        super();
        this.server = null;
    }

    start(){
        return new Promise((resolve, reject) => {
            if(!this.server){
                this.server = new Hapi.Server();
            }
            this.server.connection({ port: 6699 });
            this.server.start((err) => {
                if (err) {
                    reject();
                    throw err;
                }
                console.log(`Server running at: ${this.server.info.uri}`);
                resolve();
            });
        });
    }
}

exports.HapiServer =  function(){
    return new HapiServer();
};