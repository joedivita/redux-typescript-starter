import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import * as axios from 'axios';
import { IItemsPayload, IItemPayload } from '../definitions/itemsDefinitions';

const getItems: () => {} = createAction<IItemsPayload>(
  Constants.GET_ITEMS,
  () => ({
    promise: axios.get(Constants.GET_ITEMS_URL),
  })
);

const addItem: () => {} = createAction<IItemPayload>(
  Constants.ADD_ITEM
);

export { addItem, getItems };
