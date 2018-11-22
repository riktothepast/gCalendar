'use strict';

function auth(privatekey, scopes) {
    const jwtClient = new google.auth.JWT(
        privatekey.client_email,
        null,
        privatekey.private_key,
        scopes);

    return jwtClient.authorize()
        .then((jwtClient));
}

module.exports = auth;
