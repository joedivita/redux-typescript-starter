import { combineReducers } from 'redux';
import itemsReducer from './Items/reducers/index';
import { ItemsState } from './Items/reducers/index';

export interface ApplicationState {
  itemsState: ItemsState
}

const rootReducer = combineReducers({
  itemsState: itemsReducer
});

export { rootReducer }
