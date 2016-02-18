import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';

const addItem = createAction<any>(
  Constants.ADD_ITEM,
  () => {}
);

export { addItem };
