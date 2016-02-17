import { handleActions, Action } from 'redux-actions';
import { FOO_ACTION } from '../constants';
import { Map } from 'immutable';

const initialState = Map<string, any>({
  bar: 'baz'
});

export default handleActions<any>({
  [FOO_ACTION]: (state: Map<string, any>, action: Action): any => {
    console.log('reducing for FOO_ACTION');
    return state.set('bar', 'boo');
  }
}, initialState);
