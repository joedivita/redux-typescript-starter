"use strict";
var jsdom_1 = require('jsdom');
var chai = require('chai');
var ChaiImmutable = require('chai-immutable');
var doc = jsdom_1.jsdom('<!doctype html><html><body></body></html>');
var win = doc.defaultView;
global['document'] = doc;
global['window'] = win;
Object.keys(window).forEach(function (key) {
    if (!(key in global)) {
        global[key] = window[key];
    }
});
chai.use(ChaiImmutable);
//# sourceMappingURL=test_helper.js.map