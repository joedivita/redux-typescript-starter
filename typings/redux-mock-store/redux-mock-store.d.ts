/// <reference path="../redux/redux.d.ts" />

declare module 'redux-mock-store' {
  interface ActionType {
    type: string
  }

  interface MockStore {
    (state: any, expectedActions: Array<any>, done: () => any): Redux.Store;
  }
  var configureMockStore: (middlewares: Array<Redux.Middleware>) => MockStore;
  export = configureMockStore;
}
