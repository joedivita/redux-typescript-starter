/// <reference path="../redux/redux.d.ts" />
/// <reference types="react-router" />

declare module 'redux-async-connect' {
  export function asyncConnect(state: Object): ClassDecorator;
  export var reducer: any;
  export var ReduxAsyncConnect: any;
  export interface ReduxAsyncConnectState {
    loaded: boolean;
  }
  export interface PromiseOptions {
    store: Redux.Store;
    location: Location;
    params: any;
  }
}
