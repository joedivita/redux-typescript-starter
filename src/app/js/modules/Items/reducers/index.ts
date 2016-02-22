import { handleActions, Action } from 'redux-actions';
import {
  ADD_ITEM,
  GET_ITEMS_PENDING,
  GET_ITEMS_FULFILLED,
  GET_ITEMS_REJECTED,
} from '../constants';
import { Map, List } from 'immutable';
import { IItemsState, IItemsPayload } from '../definitions/itemsDefinitions';

const initialState: IItemsState = {
  error: null,
  items: List<string>(),
  loading: false,
};

export default handleActions<any>({

  // GET_ITEMS_REJECTED
  [GET_ITEMS_REJECTED]: (state: IItemsState, action: Action): IItemsState => {
    const payload: IItemsPayload = action.payload;

    // TODO: Add error into ItemsState
    return {
      error: {
        code: payload.status,
        message: payload.statusText,
      },
      items: List<string>(),
      loading: false,
    };
  },

  // GET_ITEMS_FULFILLED
  [GET_ITEMS_FULFILLED]: (state: IItemsState, action: Action): IItemsState => {
    const payload: IItemsPayload = action.payload;

    return {
      error: null,
      items: List<string>(payload.data),
      loading: false,
    };
  },

  // GET_ITEMS_PENDING
  [GET_ITEMS_PENDING]: (state: IItemsState, action: Action): IItemsState => {
    return {
      error: null,
      items: state.items,
      loading: true,
    };
  },

  // ADD_ITEM Action
  [ADD_ITEM]: (state: IItemsState, action: Action): IItemsState => {
    const items = List<string>(state.items);
    return {
      error: null,
      items: items.unshift('Foobar'),
      loading: false,
    };
  },

}, initialState);
