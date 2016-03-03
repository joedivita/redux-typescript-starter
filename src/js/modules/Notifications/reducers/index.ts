import { handleActions, Action } from 'redux-actions';
import {
  EMIT_NOTIFICATION,
} from '../constants';
import {
  INotificationPayload,
  INotificationState,
} from '../definitions/notificationsDefinitions';

const initialState: INotificationState = null;

export default handleActions<any>({

  // EMIT_NOTIFICATION
  [EMIT_NOTIFICATION]: (
  state: INotificationState, action: Action): INotificationState => {
    const payload: INotificationPayload = action.payload;

    return {
      message: payload.message,
      type: payload.type,
    };
  },

}, initialState);
