'use strict';

const { google } = require('googleapis');

function events(auth) {
    const calendar = google.calendar({ version: 'v3', auth });

    function list(calendarId = 'primary', params) {
        return calendar.events.list(
            Object.assign({}, params, calendarId)
        ).then((res.data.items));
    }

    return {
        list
    }
}

module.exports = events;