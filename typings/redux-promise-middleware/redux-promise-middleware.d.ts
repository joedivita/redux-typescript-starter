/// <reference path="../redux/redux.d.ts" />

declare module 'redux-promise-middleware' {
    var promiseMiddleware: () => Redux.Middleware
    export = promiseMiddleware;
}
