import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import * as axios from 'axios';
import { ItemsPayload, ItemPayload } from '../definitions/itemsDefinitions';

const getItems: () => {} = createAction<ItemsPayload>(
  Constants.GET_ITEMS,
  () => ({
    promise: axios.get('https://github-note-taker-313.firebaseio.com/joedivita.json')
  })
)

const addItem: () => {} = createAction<ItemPayload>(
  Constants.ADD_ITEM
);

export { addItem, getItems };
