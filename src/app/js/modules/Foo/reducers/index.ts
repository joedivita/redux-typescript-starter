import { handleActions, Action } from 'redux-actions';
import { FOO_ACTION } from '../constants';

const initialState = <any>{
  foo: 'bar'
}

export default handleActions<any>({
  [FOO_ACTION]: (state: any, action: Action): any => {
    return {
      foo: 'baz'
    }
  }
}, initialState);
