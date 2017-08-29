'use strict';

class GoogleSheets {
    constructor(google){
        this.sheets = google.sheets('v4');
    }
    getSheets() {
        this.sheets.spreadsheets.values.get({
            //spreadsheetId: '1QIKV6noUrpilC4_mu1lO0ZG7C5adAS7c_dt6fCKTInk',
            range: 'A:N'
        }, function(err, response) {
            if (err) {
                console.log('The API returned an error: ' + err);
                return;
            }
            var rows = response.values;
            if (rows.length == 0) {
                console.log('No data found.');
            } else {
                console.log('Name, Major:');
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    // Print columns A and E, which correspond to indices 0 and 4.
                    console.log('%s, %s', row[0], row[4]);
                }
            }
        });
    }
    batchGet() {
        this.sheets.spreadsheets.get({
            //spreadsheetId: '1QIKV6noUrpilC4_mu1lO0ZG7C5adAS7c_dt6fCKTInk'
        }, function(err, response) {
            if (err) {
                console.error(err);
                return;
            }

            // TODO: Change code below to process the `response` object:
            console.log(JSON.stringify(response, null, 2));
        });
    }
}

exports.GoogleSheets = function(google){
    return new GoogleSheets(google);
};


