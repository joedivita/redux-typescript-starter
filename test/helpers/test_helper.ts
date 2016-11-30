import * as chai from 'chai';
import * as jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
global.navigator = { userAgent: 'node.js' };
global.HTMLElement = global.window.HTMLElement;
