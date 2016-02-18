import { combineReducers } from 'redux-immutable';
import itemsReducer from './Items/reducers/index';

const rootReducer = combineReducers({
  items: itemsReducer
});

export { rootReducer }
