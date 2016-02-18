import { handleActions, Action } from 'redux-actions';
import {
  ADD_ITEM,
  GET_ITEMS_PENDING,
  GET_ITEMS_FULFILLED,
  GET_ITEMS_REJECTED,
} from '../constants';
import { Map, List } from 'immutable';

export interface ItemsState {
  items: List<string>
  loading: boolean
}

const initialState: ItemsState = {
  items: List<string>(),
  loading: false
};

export default handleActions<any>({

  // GET_ITEMS_FULFILLED
  [GET_ITEMS_FULFILLED]: (state: ItemsState, action: Action): ItemsState => {
    return {
      items: List<string>(action.payload.data),
      loading: false
    };
  },

  // GET_ITEMS_PENDING
  [GET_ITEMS_PENDING]: (state: ItemsState, action: Action): ItemsState => {
    return {
      items: state.items,
      loading: true
    };
  },

  // ADD_ITEM Action
  [ADD_ITEM]: (state: ItemsState, action: Action): ItemsState => {
    const items = List<string>(state.items);
    return {
      items: items.unshift('Foobar'),
      loading: false
    };
  }

}, initialState);
