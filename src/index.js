JSON = require('imports?this=>window,this=>global!json3');
require('es5-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');

ReactDOM.render(<App />, document.getElementById('root'));
