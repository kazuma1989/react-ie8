JSON = require('imports?this=>window,this=>global!json3');
require('babel-polyfill');

(() => {
  const text = JSON.stringify([1, 2, 3].map(x => x * 10)).repeat(2);
  console.log(text);
})();
