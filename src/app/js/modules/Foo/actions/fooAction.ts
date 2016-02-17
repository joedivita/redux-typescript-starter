import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';

const fooAction = createAction<any>(
  Constants.FOO_ACTION,
  (foo: string) => ({ foo: foo })
);

export { fooAction };
