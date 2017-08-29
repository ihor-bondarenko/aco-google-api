'use strict';

const server = require('./app/server/hapi_server').HapiServer();
const googleApi = require('./app/google-api/google_api').GoogleApi({
    auth_type: 'api_key'
});

server.start().then((e) => {
    googleApi.initApi().then(() => {
        googleApi.api.sheets.batchGet();
    }).catch(() => {});
}).catch(() => {});