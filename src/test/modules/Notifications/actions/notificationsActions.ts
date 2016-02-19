import { expect } from 'chai'
import * as actions from '../../../../app/js/modules/Notifications/actions/notificationActions';
import * as types from '../../../../app/js/modules/Notifications/constants';

describe('Notification actions', () => {
  it('creates an action to emit a proper notification', () => {
    const payload = {
      type: 0,
      message: 'Foo'
    };
    const expectedAction = {
      type: types.EMIT_NOTIFICATION,
      payload: payload
    }
    const action = actions.emitNotification(payload);
    expect(action).to.deep.equal(expectedAction);
  })
});
