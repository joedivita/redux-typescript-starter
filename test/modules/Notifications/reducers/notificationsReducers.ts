import { expect } from 'chai';
import reducer from '../../../../src/js/modules/Notifications/reducers/index';
import * as types from '../../../../src/js/modules/Notifications/constants';
import * as definitions from '../../../../src/js/modules/Notifications/constants';

describe('Notifications reducer', () => {
  it('returns the initial state', () => {
    const initialState = reducer(undefined, { type: 'undefined' });
    expect(initialState).to.equal(null);
  });

  it('sets state properly on EMIT_NOTIFICATION', () => {
    const actionPayload = {
      payload: {
        message: 'Message',
        type: 1,
      },
      type: types.EMIT_NOTIFICATION,
    };
    const newState = reducer(null, actionPayload);
    expect(newState).to.deep.equal(actionPayload.payload);
  });
});
