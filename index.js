const SECOND_MS = 1000;
const MINUTE_MS = 60000;
const HOUR_MS = 3600000;

/**
* @param {String} ms
* @returns {Promise<boolean>}
*/
async function millisecs(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
* @param {String} s
* @returns {Promise<any>}
*/
async function seconds(s = 0) {
    return new Promise(resolve => setTimeout(resolve, s * SECOND_MS));
}

/**
* @param {String} min
* @returns {Promise<any>}
*/
async function minutes(min = 0) {
    return new Promise(resolve => setTimeout(resolve, min * MINUTE_MS));
}

/**
* @param {String} hr
* @returns {Promise<any>}
*/
async function hours(hr = 0) {
    return new Promise(resolve => setTimeout(resolve, hr * HOUR_MS));
}

module.exports = { millisecs, seconds, minutes, hours };