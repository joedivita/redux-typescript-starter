import { combineReducers } from 'redux';
import globalReducer from './Global/reducers/index';
import { IGlobalState } from './Global/definitions/globalDefinitions';

export interface IApplicationState {
  globalState: IGlobalState;
}

const rootReducer = combineReducers({
  globalState: globalReducer,
});

export { rootReducer }
