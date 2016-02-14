"use strict";
require('../styles/app.sass');
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var react_router_2 = require('react-router');
var routes_1 = require('./config/routes');
ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_2.hashHistory}, routes_1.routes), document.getElementById('main'));
//# sourceMappingURL=main.js.map