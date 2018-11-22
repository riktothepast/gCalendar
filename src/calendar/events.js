'use strict';

const { google } = require('googleapis');

function events(auth) {
    const calendar = google.calendar({ version: 'v3', auth });
    
    function list(calendarId = 'primary', params) {
        return new Promise(function(resolve, reject) { 
            calendar.events.list(
                Object.assign({}, params, { calendarId })
                , (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
                });
        });
    }

    return {
        list
    }
}

module.exports = events;