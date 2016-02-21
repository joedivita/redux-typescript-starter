/* WIP */

/// <reference path="../react/react.d.ts"/>

declare module 'teaspoon' {
  import * as React from 'react';

  interface QueryCollection {
    toArray: () => Array<any>
  }

  interface Collection {
    find: (domSelector: string) => Collection
    text: () => string
    length: number
    map: (mapFunction: (node?: HTMLElement, index?: number, collection?: Collection) => any) => QueryCollection
    trigger: (eventName: string, eventData?: Object) => void
    children: (selector?: string) => Collection
  }

  interface Selector {
    render: () => Collection
  }

  var $: (element: React.ReactElement<any>) => Selector;
  export = $;
}
