import { handleActions, Action } from 'redux-actions';
import { ADD_ITEM } from '../constants';
import * as Immutable from 'immutable';

const initialState = Immutable.Map<string, any>({
  items: Immutable.List<string>([
    'Hello',
    'Goodbye'
  ])
});

export default handleActions<any>({

  // ADD_ITEM Action
  [ADD_ITEM]: (state: Immutable.Map<string, any>, action: Action): any => {
    const items: Immutable.List<string> = state.get('items');
    return state.setIn(['items'], items.unshift('Foobar'));
  }

}, initialState);
