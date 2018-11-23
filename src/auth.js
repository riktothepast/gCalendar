'use strict';
const { google } = require('googleapis');

function auth(privatekey, scopes) {
  const jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    scopes);

  return new Promise((resolve, reject) => (
    jwtClient.authorize((error) => {
      if (error) {
        reject(error);
      }
      resolve(jwtClient);
    })
  ));
}

module.exports = auth;
