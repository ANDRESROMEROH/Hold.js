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
const hold = require('holddotjs)
```
### API Reference
It's easy to use Hold.js API to wait for milliseconds, seconds, minutes and even hours.
```javascript
hold.millisecs(5).then(() => console.log('🚌💨')) // Holds 5ms 😭 

hold.seconds(30).then(() => console.log('🚌💨')) // Holds 30s 😞

hold.minutes(10).then(() => console.log('🚌💨')) // Holds 10min 😥

hold.hours(2).then(() => console.log('🚌💨')) // Holds 2hrs 😄
```
## License
Hold.js is licensed under the MIT License.