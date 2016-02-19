import { handleActions, Action } from 'redux-actions';
import {
  ADD_ITEM,
  GET_ITEMS_PENDING,
  GET_ITEMS_FULFILLED,
  GET_ITEMS_REJECTED,
} from '../constants';
import { Map, List } from 'immutable';
import { ItemsState, ItemsPayload } from '../definitions/itemsDefinitions';

const initialState: ItemsState = {
  items: List<string>(),
  loading: false,
  error: null
};

export default handleActions<any>({

  // GET_ITEMS_REJECTED
  [GET_ITEMS_REJECTED]: (state: ItemsState, action: Action): ItemsState => {
    const payload: ItemsPayload = action.payload;

    // TODO: Add error into ItemsState
    return {
      items: List<string>(),
      loading: false,
      error: {
        code: payload.status,
        message: payload.statusText
      }
    }
  },

  // GET_ITEMS_FULFILLED
  [GET_ITEMS_FULFILLED]: (state: ItemsState, action: Action): ItemsState => {
    const payload: ItemsPayload = action.payload;

    return {
      items: List<string>(payload.data),
      loading: false,
      error: null
    };
  },

  // GET_ITEMS_PENDING
  [GET_ITEMS_PENDING]: (state: ItemsState, action: Action): ItemsState => {
    return {
      items: state.items,
      loading: true,
      error: null
    };
  },

  // ADD_ITEM Action
  [ADD_ITEM]: (state: ItemsState, action: Action): ItemsState => {
    const items = List<string>(state.items);
    return {
      items: items.unshift('Foobar'),
      loading: false,
      error: null
    };
  }

}, initialState);
