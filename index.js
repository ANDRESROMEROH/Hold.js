const SECOND_MS = 1000;
const MINUTE_MS = 60000;
const HOUR_MS = 3600000;

/**
* @param {String} ms The amount of milliseconds to wait.
* @returns {Promise<void>}
*/
async function millisecs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
* @param {String} s The amount of seconds to wait.
* @returns {Promise<void>}
*/
async function seconds(s) {
    return new Promise(resolve => setTimeout(resolve, s * SECOND_MS));
}

/**
* @param {String} min The amount of minutes to wait.
* @returns {Promise<void>}
*/
async function minutes(min) {
    return new Promise(resolve => setTimeout(resolve, min * MINUTE_MS));
}

/**
* @param {String} hr The amount of hours to wait.
* @returns {Promise<void>}
*/
async function hours(hr) {
    return new Promise(resolve => setTimeout(resolve, hr * HOUR_MS));
}

module.exports = { millisecs, seconds, minutes, hours };