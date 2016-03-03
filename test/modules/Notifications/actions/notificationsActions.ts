import { expect } from 'chai';
import * as actions from '../../../../src/js/modules/Notifications/actions/notificationActions';
import * as types from '../../../../src/js/modules/Notifications/constants';

describe('Notification actions', () => {
  it('creates an action to emit a proper notification', () => {
    const payload = {
      message: 'Foo',
      type: 0,
    };
    const expectedAction = {
      payload: payload,
      type: types.EMIT_NOTIFICATION,
    };
    const action = actions.emitNotification(payload);
    expect(action).to.deep.equal(expectedAction);
  });
});
