/// <reference path="../redux/redux.d.ts" />

declare module 'redux-immutable' {
  import { Reducer } from 'redux';
  export function combineReducers(reducers: any): Reducer;
}
