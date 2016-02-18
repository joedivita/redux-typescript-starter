import { combineReducers } from 'redux-immutable';
import fooReducer from './Foo/reducers/index';

const rootReducer = combineReducers({
  foo: fooReducer
});

export { rootReducer }
