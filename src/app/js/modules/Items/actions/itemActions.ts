import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import * as axios from 'axios';
import { ItemsPayload } from '../definitions/itemsDefinitions';

const getItems: () => {} = createAction<ItemsPayload>(
  Constants.GET_ITEMS,
  () => ({
    promise: axios.get('https://github-note-taker-313.firebaseio.com/joedivita.json')
  })
)

const addItem: () => {} = createAction<ItemsPayload>(
  Constants.ADD_ITEM
);

export { addItem, getItems };
