'use strict';

const auth = require('./src/auth');
const events = require('./src/calendar/events');

module.exports = (privateKey, scopes) => (
  auth(privateKey, scopes)
    .then(events)
);
