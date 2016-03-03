import * as chai from 'chai';
import * as ChaiImmutable from 'chai-immutable';
import * as jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
global.navigator = { userAgent: 'node.js' };
global.HTMLElement = global.window.HTMLElement;

chai.use(<(chai: any, utils: any) => void>ChaiImmutable);
