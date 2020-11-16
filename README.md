# Hold.js 🚌🏃🏻‍♂️
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
    await hold.millisecs(5); // Holds 5ms 😭
    await hold.seconds(30); // Holds 30s 😞
    await hold.minutes(10); // Holds 10min 😦
    await hold.hours(2); // Holds 2hrs 😄

    console.log('🚌💨 leaving...');
}
```
## License
Hold.js is licensed under the MIT License.