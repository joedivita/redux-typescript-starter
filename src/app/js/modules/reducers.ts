import { combineReducers } from 'redux';
import fooReducer from './Foo/reducers/index';

const rootReducer = combineReducers({
  foo: fooReducer
});

export { rootReducer }
