# Hold.js 🚌🏃🏻‍♂️
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/holddotjs">
<img alt="npm" src="https://img.shields.io/npm/dw/holddotjs">
<img alt="npm" src="https://img.shields.io/npm/v/holddotjs">
<img alt="NPM" src="https://img.shields.io/npm/l/holddotjs">
<a href="https://github.com/ANDRESROMEROH/hold.js/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/ANDRESROMEROH/hold.js"></a>

When something feels right... Hold on to it! :)
A Javascript module for waiting different amounts of time.

## Getting Started
### Install
```shell
npm install holddotjs
```
### Import
```javascript
const hold = require('holddotjs');
```
### API Reference
It's easy to use Hold.js API to wait for milliseconds, seconds, minutes and even hours.
```javascript
async function makeBusLeave() {
    await hold.millisecs(5);    // -> 😭 Holds for 5ms
    await hold.seconds(30);     // -> 😞 Holds for 30s
    await hold.minutes(10);     // -> 😦 Holds for 10min
    await hold.hours(2);        // -> 😄 Holds for 2hrs

    console.log('🚌💨 leaving...');
}
```
## TypeScript Definitions
```typescript
/**
 * @param ms The amount of milliseconds to wait.
 * @return A promise that gets resolved after a given amount of milliseconds.
 */
function millisecs(ms?: number): Promise<void>;

/**
 * @param s The amount of seconds to wait.
 * @return A promise that gets resolved after a given amount of seconds.
 */
function seconds(s?: number): Promise<void>;

/**
 * @param min The amount of minutes to wait.
 * @return A promise that gets resolved after a given amount of minutes.
 */
function minutes(min?: number): Promise<void>;

/**
 * @param hr The amount of hours to wait.
 * @return A promise that gets resolved after a given amount of hours.
 */
function hours(hr?: number): Promise<void>;
```
## License
Hold.js is licensed under the MIT License.