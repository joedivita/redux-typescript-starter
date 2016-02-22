import { expect } from 'chai';
import * as actions from '../../../../app/js/modules/Items/actions/itemActions';
import * as types from '../../../../app/js/modules/Items/constants';
import * as configureMockStore from 'redux-mock-store';
import * as thunk from 'redux-thunk';
import * as promiseMiddleware from 'redux-promise-middleware';
import * as nock from 'nock';

describe('Item actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates GET_ITEMS_SUCCESS when fetching items', (done) => {
    const middlewares = [thunk, promiseMiddleware()];
    const mockStore = configureMockStore(middlewares);
    // Mock out the response
    nock(types.GET_ITEMS_URL).get('').reply(200, [
      'Foo',
      'Bar',
      'Baz',
    ]);
    const pendingAction = (incomingAction) => {
      expect(incomingAction.type).to.equal(types.GET_ITEMS_PENDING);
    };
    const successAction = (incomingAction) => {
      expect(incomingAction.type).to.equal(types.GET_ITEMS_FULFILLED);
      expect(incomingAction.payload.data).to.deep.equal(['Foo', 'Bar', 'Baz']);
    };
    const store = mockStore(undefined, [pendingAction, successAction], done);
    store.dispatch(actions.getItems());
  });
});
