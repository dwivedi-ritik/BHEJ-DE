function generateUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function setIP(request) {
    if (request.headers['x-forwarded-for']) {
        ip = request.headers['x-forwarded-for'].split(/\s*,\s*/)[0];
    } else {
        ip = request.connection.remoteAddress;
    }
    // IPv4 and IPv6 use different values to refer to localhost
    if (ip == '::1' || ip == '::ffff:127.0.0.1') {
        ip = '127.0.0.1';
    }
    return ip
}



module.exports = {
    generateUUID,
    setIP
}