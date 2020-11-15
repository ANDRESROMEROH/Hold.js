const SECOND_MS = 1000;
const MINUTE_MS = 60000;
const HOUR_MS = 3600000;

async function millisecs(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function seconds(s = 0) {
    return new Promise(resolve => setTimeout(resolve, s * SECOND_MS));
}

async function minutes(min = 0) {
    return new Promise(resolve => setTimeout(resolve, min * MINUTE_MS));
}

async function hours(hr = 0) {
    return new Promise(resolve => setTimeout(resolve, hr * HOUR_MS));
}

module.exports = { millisecs, seconds, minutes, hours };