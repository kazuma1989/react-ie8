JSON = require('imports?this=>window,this=>global!json3');
require('core-js/es5');
require('core-js/es6/object');
require('core-js/es6/function');
require('core-js/es6/array');
require('core-js/es6/string');
require('core-js/es6/promise');

(() => {
  const text = JSON.stringify([1, 2, 3].map(x => x * 10)).repeat(2);
  console.log(text);
})();

// -----
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(<h1>HELLO</h1>, document.getElementById('root'));
