JSON = require('imports?this=>window,this=>global!json3');
require('babel-polyfill');

(() => {
  const text = JSON.stringify([1, 2, 3].map(x => x * 10)).repeat(2);
  console.log(text);
})();

// -----
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(<h1>hello</h1>, document.getElementById('root'));
