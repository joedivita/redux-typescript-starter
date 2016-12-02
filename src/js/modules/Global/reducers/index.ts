import { handleActions, Action } from 'redux-actions';
import {
  BEGIN_GLOBAL_LOAD,
  END_GLOBAL_LOAD,
} from '../constants';
import { IGlobalState } from '../definitions/globalDefinitions';

const initialState: IGlobalState = {
  globalLoaderRequestCount: 0,
};

export default handleActions<any>({

  // BEGIN_GLOBAL_LOAD
  [BEGIN_GLOBAL_LOAD]:
  (state: IGlobalState, action: Action): IGlobalState => {
    return {
      globalLoaderRequestCount: state.globalLoaderRequestCount + 1,
    };
  },

  // END_GLOBAL_LOAD
  [END_GLOBAL_LOAD]:
  (state: IGlobalState, action: Action): IGlobalState => {
    return {
      globalLoaderRequestCount: state.globalLoaderRequestCount - 1,
    };
  },

}, initialState);
