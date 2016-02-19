import { handleActions, Action } from 'redux-actions';
import {
  EMIT_NOTIFICATION
} from '../constants';
import {
  NotificationPayload,
  NotificationState
} from '../definitions/notificationsDefinitions';

const initialState: NotificationState = null;

export default handleActions<any>({

  // EMIT_NOTIFICATION
  [EMIT_NOTIFICATION]: (
  state: NotificationState, action: Action): NotificationState => {
    const payload: NotificationPayload = action.payload;

    return {
      type: payload.type,
      message: payload.message
    }
  }

}, initialState);
