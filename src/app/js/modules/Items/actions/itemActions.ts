import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import * as axios from 'axios';

const getItems = createAction<any>(
  Constants.GET_ITEMS,
  () => ({
    promise: axios.get('https://github-note-taker-31.firebaseio.com/joedivita.json')
  })
)

const addItem = createAction<any>(
  Constants.ADD_ITEM
);

export { addItem, getItems };
