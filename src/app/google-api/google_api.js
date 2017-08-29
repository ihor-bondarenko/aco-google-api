'use strict';

const google = require('googleapis');

const ApiFactory = require('../../vendor/api/google_api_factory').GoogleApiFactory;
const authService = require('./services/auth_service').GoogleApiAuthService;
const components = {
    sheets: require('./components/sheets').GoogleSheets(google)
};

let instance = null;

class GoogleApi extends ApiFactory {
    constructor(o){
        super();
        this.initOptions = Object.assign({}, o);
        //this.api = components;
    }
    initApi() {
        return new Promise((resolve) => {
            authService.getService(this.initOptions.auth_type).then((data) => {
                google.options(data);
                this.api = components;
                resolve();
            }).catch((e) => {
                console.log(e);
            });
        });
    }
}

exports.GoogleApi = function(o){
    if(!instance) {
        instance = new GoogleApi(o);
    }
    return instance;
};