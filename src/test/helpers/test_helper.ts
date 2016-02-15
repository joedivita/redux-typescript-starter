import { jsdom } from 'jsdom';
import * as chai from 'chai';
import * as ChaiImmutable from 'chai-immutable';

const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global['document'] = doc;
global['window'] = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(<(chai:any, utils:any) => void>ChaiImmutable);
