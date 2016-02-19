import { expect } from 'chai'
import reducer from '../../../../app/js/modules/Notifications/reducers/index';
import * as types from '../../../../app/js/modules/Notifications/constants';
import * as definitions from '../../../../app/js/modules/Notifications/constants';

describe('Notifications reducer', () => {
  it('returns the initial state', () => {
    const initialState = reducer(undefined, { type: 'undefined' });
    expect(initialState).to.equal(null);
  });

  it('sets state properly on EMIT_NOTIFICATION', () => {
    const actionPayload = {
      type: types.EMIT_NOTIFICATION,
      payload: {
        type: 1,
        message: 'Message'
      }
    }
    const newState = reducer(null, actionPayload);
    expect(newState).to.deep.equal(actionPayload.payload);
  });
});
