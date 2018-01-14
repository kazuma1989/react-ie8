JSON = require('imports?this=>window,this=>global!json3');
require('core-js/es5');
require('core-js/es6/object');
require('core-js/es6/function');
require('core-js/es6/array');
require('core-js/es6/string');
require('core-js/es6/promise');

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');

ReactDOM.render(<App />, document.getElementById('root'));
